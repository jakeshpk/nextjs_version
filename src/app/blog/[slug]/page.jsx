import { getAllBlogSlugs, getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import BlogPostPage from '@/components/BlogPostPage';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const pageTitle = post.metaTitle ? `${post.metaTitle} | V4 Building Solutions Blog` : `${post.title} | V4 Building Solutions Blog`;
  const pageDescription = post.metaDescription || post.excerpt;
  const canonicalUrl = post.canonical || `/blog/${post.slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://www.v4bs.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // If not enough same-category posts, fill with recent ones
  if (relatedPosts.length < 3) {
    const remaining = allPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.find(rp => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...remaining);
  }

  return <BlogPostPage post={post} relatedPosts={relatedPosts} />;
}
