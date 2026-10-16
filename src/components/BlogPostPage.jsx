'use client';

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

function RelatedPostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="glass-panel rounded-2xl overflow-hidden hover:translate-y-[-3px] transition-all duration-300">
        <div className="relative h-36 overflow-hidden">
          {post.coverImage ? (
            <>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500"></div>
          )}
        </div>
        <div className="p-4">
          <CategoryBadge category={post.category} />
          <h4 className="text-sm font-bold text-slate-800 mt-2 mb-1 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h4>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <i className="fas fa-eye text-slate-400"></i>
              <ViewCounter slug={post.slug} trackView={false} showLabel={false} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function ConnectWithUs({ post }) {
  const url = typeof window !== 'undefined' ? window.location.href : `https://www.v4bs.in/blog/${post.slug}`;
  const text = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden shadow-xl border border-white/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h4 className="font-bold text-lg mb-4 text-sky-400">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61566564854807"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon-dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/v4_building_solutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-dark"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.instagram.com/v4bimtraining/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram BIM Training"
              className="social-icon-dark"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@V4Buildingsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-icon-dark"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Share Article */}
        <div className="pt-4 md:pt-0 md:border-l md:border-white/10 md:pl-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
            Share Article
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 transition text-sm font-medium"
              aria-label="Share on WhatsApp"
            >
              <i className="fab fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-sky-500 hover:text-white text-slate-400 border border-white/10 flex items-center justify-center transition"
              aria-label="Share on Facebook"
            >
              <i className="fab fa-facebook-f text-sm"></i>
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white text-slate-400 border border-white/10 flex items-center justify-center transition"
              aria-label="Share on LinkedIn"
            >
              <i className="fab fa-linkedin-in text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPostPage({ post, relatedPosts }) {
  return (
    <main className="min-h-screen fade-in">
      {/* Hero Section */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/blog" className="text-sky-300 hover:text-white transition flex items-center gap-2 group">
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              <span className="font-medium">All Articles</span>
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{post.category}</span>
          </nav>

          <CategoryBadge category={post.category} />

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <i className="fas fa-user text-xs"></i>
              </div>
              <span>{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-calendar-alt"></i>
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-clock"></i>
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-eye text-sky-400"></i>
              <ViewCounter slug={post.slug} trackView={true} />
            </span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="container mx-auto px-6 -mt-6 relative z-10 max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20">
            <div className="relative h-64 md:h-96">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Content & Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 max-w-6xl mx-auto">
            {/* Article Body */}
            <article className="blog-content prose prose-slate prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200 not-prose">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Connect With Us & Share */}
              <div className="mt-10 not-prose">
                <ConnectWithUs post={post} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author Card */}
              <div className="glass-card-strong rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white flex items-center justify-center font-bold text-lg">
                    V4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{post.author}</h4>
                    <p className="text-xs text-slate-500">Chartered Engineers & Contractors</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  KSEB Class B Licensed Electrical Contractors & Chartered Engineers based in Thrissur, Kerala. Specializing in MEP, BIM, and IT solutions.
                </p>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(rp => (
                      <RelatedPostCard key={rp.slug} post={rp} />
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-xl"></i>
                </div>
                <h4 className="font-bold text-white mb-2">Need Expert Help?</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Get professional consultation for your construction or engineering project.
                </p>
                <Link
                  href="/"
                  className="block w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-white font-medium rounded-xl transition text-sm"
                >
                  Contact Us <i className="fas fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="py-12 bg-slate-50/80">
        <div className="container mx-auto px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full transition shadow-lg shadow-slate-900/20"
          >
            <i className="fas fa-arrow-left"></i>
            Back to All Articles
          </Link>
        </div>
      </section>
    </main>
  );
}
