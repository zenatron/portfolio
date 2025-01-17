'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSortAlphaDown, FaSortAlphaUp, FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa';

export default function BlogClient({ posts }: { posts: any[] }) {
  const [sortBy, setSortBy] = useState('date');
  const [order, setOrder] = useState('desc');

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'title') {
      return order === 'asc'
        ? a.metadata.title.localeCompare(b.metadata.title)
        : b.metadata.title.localeCompare(a.metadata.title);
    } else if (sortBy === 'date') {
      const dateA = new Date(a.metadata.date);
      const dateB = new Date(b.metadata.date);
      return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    }
    return 0;
  });

  return (
    <main className="flex-1 px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <div className="flex items-center space-x-4">
          {/* Sort By Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-secondary text-white px-4 py-2 rounded-lg"
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>

          {/* Sort Order Button */}
          <button
            onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
            className="bg-accent text-white px-4 py-2 rounded-lg flex items-center"
          >
            {sortBy === 'title' ? (
              order === 'asc' ? (
                <FaSortAlphaDown className="text-lg" />
              ) : (
                <FaSortAlphaUp className="text-lg" />
              )
            ) : order === 'asc' ? (
              <FaSortNumericDown className="text-lg" />
            ) : (
              <FaSortNumericUp className="text-lg" />
            )}
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <div key={post.slug} className="bg-secondary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{post.metadata.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{post.metadata.date}</p>
            <p className="text-gray-300">{post.metadata.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline mt-4 block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}