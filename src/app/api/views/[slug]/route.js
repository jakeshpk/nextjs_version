import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

function isBot(userAgent) {
  if (!userAgent) return false;
  return /bot|crawler|spider|crawling|lighthouse|google|bing|yahoo|baidu|yandex|duckduckbot|facebookexternalhit|whatsapp|preview/i.test(
    userAgent
  );
}

export async function GET(request, { params }) {
  const { slug } = await params;

  if (!isSupabaseConfigured || !supabase || !slug) {
    return NextResponse.json({ views: 0 });
  }

  try {
    const { data, error } = await supabase
      .from('post_views')
      .select('views')
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error(`Error fetching views for slug ${slug}:`, error);
      return NextResponse.json({ views: 0 });
    }

    return NextResponse.json({ views: Number(data?.views) || 0 });
  } catch (err) {
    console.error(`Unexpected error fetching views for ${slug}:`, err);
    return NextResponse.json({ views: 0 });
  }
}

export async function POST(request, { params }) {
  const { slug } = await params;

  if (!isSupabaseConfigured || !supabase || !slug) {
    return NextResponse.json({ views: 0 });
  }

  const userAgent = request.headers.get('user-agent') || '';

  // Skip counting automated bots / crawlers
  if (isBot(userAgent)) {
    const { data } = await supabase
      .from('post_views')
      .select('views')
      .eq('slug', slug)
      .maybeSingle();

    return NextResponse.json({ views: Number(data?.views) || 0, skipped: true });
  }

  try {
    const { data, error } = await supabase.rpc('increment_post_view', {
      page_slug: slug,
    });

    if (error) {
      console.error(`Error incrementing views for slug ${slug}:`, error);
      // Fallback: try reading the current views so we don't break the UI
      const { data: fallbackData } = await supabase
        .from('post_views')
        .select('views')
        .eq('slug', slug)
        .maybeSingle();

      return NextResponse.json({ views: Number(fallbackData?.views) || 0 });
    }

    return NextResponse.json({ views: Number(data) || 0 });
  } catch (err) {
    console.error(`Unexpected error incrementing views for ${slug}:`, err);
    return NextResponse.json({ views: 0 });
  }
}
