import { getAllBlogPosts, getAllCategories } from '@/lib/blog';
import BlogPage from '@/components/BlogPage';

export const metadata = {
  title: 'Blog | V4 Building Solutions — Engineering Insights & Industry Updates',
  description: 'Expert insights on BIM, electrical engineering, construction best practices, and project case studies from V4 Building Solutions, Thrissur, Kerala.',
  openGraph: {
    title: 'Blog | V4 Building Solutions',
    description: 'Expert engineering insights, construction tips, and project case studies.',
    url: 'https://www.v4bs.in/blog',
    type: 'website',
  },
};

export default function BlogListPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return <BlogPage posts={posts} categories={categories} />;
}
