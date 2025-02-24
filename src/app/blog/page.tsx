import { getAllBlogPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogLayout from '@/components/BlogLayout';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-primary-bg text-primary-text">
      <Header />
      <BlogLayout posts={posts} />
      <Footer />
    </div>
  );
}