import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const blogDirectory = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog posts sorted by date (newest first).
 * Returns metadata only — no HTML content.
 */
export function getAllBlogPosts() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory).filter(f => f.endsWith('.md'));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'V4 Building Solutions',
      category: data.category || 'General',
      tags: data.tags || [],
      coverImage: data.coverImage || '',
      featured: data.featured || false,
      readTime: data.readTime || '3 min read',
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get a single blog post by slug — includes parsed HTML content.
 */
export async function getBlogPostBySlug(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    date: data.date || '',
    author: data.author || 'V4 Building Solutions',
    category: data.category || 'General',
    tags: data.tags || [],
    coverImage: data.coverImage || '',
    featured: data.featured || false,
    readTime: data.readTime || '3 min read',
    metaTitle: data.metaTitle || '',
    metaDescription: data.metaDescription || '',
    canonical: data.canonical || '',
    contentHtml,
  };
}

/**
 * Get all unique categories from blog posts.
 */
export function getAllCategories() {
  const posts = getAllBlogPosts();
  const categories = [...new Set(posts.map(p => p.category))];
  return categories;
}

/**
 * Get all unique tags from blog posts.
 */
export function getAllTags() {
  const posts = getAllBlogPosts();
  const tags = [...new Set(posts.flatMap(p => p.tags))];
  return tags;
}

/**
 * Get all slugs for static generation.
 */
export function getAllBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(blogDirectory).filter(f => f.endsWith('.md'));
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}
