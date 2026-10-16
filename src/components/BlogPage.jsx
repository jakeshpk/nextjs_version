'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ViewCounter from '@/components/ViewCounter';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function CategoryBadge({ category }) {
  const colorMap = {
    'Industry Insights': 'bg-indigo-50 text-indigo-700 border-indigo-100',
    'Technical': 'bg-amber-50 text-amber-700 border-amber-100',
    'Company News': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'Case Study': 'bg-sky-50 text-sky-700 border-sky-100',
    'Tutorial': 'bg-purple-50 text-purple-700 border-purple-100',
  };
  const colors = colorMap[category] || 'bg-slate-50 text-slate-700 border-slate-100';
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors}`}>
      {category}
    </span>
  );
}

function FeaturedPost({ post, views }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="glass-card-strong rounded-3xl overflow-hidden hover:translate-y-[-4px] transition-all duration-500">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
            {post.coverImage ? (
              <>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent"></div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600"></div>
            )}
            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-slate-900 text-xs font-bold uppercase tracking-wider shadow-lg">
                <i className="fas fa-star text-amber-500"></i>
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <CategoryBadge category={post.category} />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mt-4 mb-3 group-hover:text-sky-600 transition-colors leading-tight">
              {post.title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-calendar-alt"></i>
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-clock"></i>
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-eye text-sky-500"></i>
                <ViewCounter slug={post.slug} initialViews={views} trackView={false} />
              </span>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Read Article <i className="fas fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogCard({ post, index, views }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article
        className="glass-panel rounded-2xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          {post.coverImage ? (
            <>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600"></div>
          )}
          {/* Read time badge */}
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur text-white text-xs font-medium">
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <CategoryBadge category={post.category} />
          </div>

          <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <i className="fas fa-calendar-alt"></i>
              {formatDate(post.date)}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5">
              <i className="fas fa-eye text-slate-400"></i>
              <ViewCounter slug={post.slug} initialViews={views} trackView={false} showLabel={false} />
            </span>
            <span className="text-sky-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <i className="fas fa-arrow-right text-xs"></i>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function BlogPage({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewsMap, setViewsMap] = useState({});

  useEffect(() => {
    let isMounted = true;
    async function fetchViews() {
      try {
        const res = await fetch('/api/views');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data?.views) {
            setViewsMap(data.views);
          }
        }
      } catch (err) {
        console.error('Error fetching blog post views:', err);
      }
    }
    fetchViews();
    return () => {
      isMounted = false;
    };
  }, []);

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  // Apply filters
  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const allCategories = ['All', ...categories];

  return (
    <main className="min-h-screen fade-in">
      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-purple-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-1 bg-sky-400 rounded-full"></div>
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-wider">Blog & Insights</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Insights</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Expert perspectives on construction, BIM technology, electrical engineering, and project management from the V4 Building Solutions team.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles by title, topic, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition"
              />
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'All' && !searchQuery && (
        <section className="py-12 bg-slate-50/80">
          <div className="container mx-auto px-6">
            <FeaturedPost post={featuredPost} views={viewsMap[featuredPost.slug]} />
          </div>
        </section>
      )}

      {/* Category Filters & Posts Grid */}
      <section className={`py-16 ${featuredPost && activeCategory === 'All' && !searchQuery ? 'bg-white' : 'bg-slate-50/80'}`}>
        <div className="container mx-auto px-6">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat === 'All'
                    ? regularPosts.length
                    : regularPosts.filter(p => p.category === cat).length
                  }
                </span>
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-newspaper text-5xl text-slate-300 mb-4"></i>
              <p className="text-slate-400 text-lg mb-2">No articles found</p>
              <p className="text-slate-400 text-sm">
                {searchQuery ? 'Try a different search term' : 'No posts in this category yet'}
              </p>
              {(searchQuery || activeCategory !== 'All') && (
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-4 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
                >
                  View All Posts
                </button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} views={viewsMap[post.slug]} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="glass-card-strong rounded-3xl p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3">
              Stay Updated
            </h2>
            <p className="text-slate-500 mb-8 max-w-lg mx-auto">
              Get the latest engineering insights, project updates, and industry news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition text-sm"
              />
              <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition shadow-lg shadow-slate-900/20 text-sm whitespace-nowrap">
                Subscribe <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-3">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
