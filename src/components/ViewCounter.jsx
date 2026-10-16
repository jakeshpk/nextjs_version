'use client';

import { useState, useEffect } from 'react';

export default function ViewCounter({
  slug,
  trackView = false,
  initialViews = null,
  showLabel = true,
  className = '',
}) {
  const [views, setViews] = useState(initialViews);
  const [loading, setLoading] = useState(initialViews === null);

  useEffect(() => {
    if (!slug) return;

    let isMounted = true;

    async function handleViews() {
      try {
        const sessionKey = `v4bs_viewed_${slug}`;
        const hasViewedInSession = typeof window !== 'undefined' && sessionStorage.getItem(sessionKey);

        // If trackView is true and user hasn't visited this post in this session, increment!
        if (trackView && !hasViewedInSession) {
          try {
            sessionStorage.setItem(sessionKey, '1');
          } catch (_) {
            // In case sessionStorage is blocked in private browsing
          }

          const res = await fetch(`/api/views/${encodeURIComponent(slug)}`, {
            method: 'POST',
          });

          if (res.ok) {
            const data = await res.json();
            if (isMounted && typeof data.views === 'number') {
              setViews(data.views);
              setLoading(false);
              return;
            }
          }
        }

        // Otherwise (or if already viewed in this session, or trackView is false), just fetch current count
        if (initialViews === null || trackView) {
          const res = await fetch(`/api/views/${encodeURIComponent(slug)}`, {
            method: 'GET',
          });

          if (res.ok) {
            const data = await res.json();
            if (isMounted && typeof data.views === 'number') {
              setViews(data.views);
            }
          }
        }
      } catch (err) {
        console.error('Failed to update/fetch view count:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    handleViews();

    return () => {
      isMounted = false;
    };
  }, [slug, trackView, initialViews]);

  // Sync if initialViews changes from parent batch load
  useEffect(() => {
    if (initialViews !== null) {
      setViews(initialViews);
      setLoading(false);
    }
  }, [initialViews]);

  if (loading && views === null) {
    return (
      <span className={`inline-block animate-pulse text-slate-400 ${className}`}>
        &mdash;
      </span>
    );
  }

  const count = views ?? 0;
  const formattedCount = count.toLocaleString('en-IN');

  return (
    <span className={className}>
      {formattedCount}
      {showLabel ? ` ${count === 1 ? 'view' : 'views'}` : ''}
    </span>
  );
}
