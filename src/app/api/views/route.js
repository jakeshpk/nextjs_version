import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (!isSupabaseConfigured || !supabase) {
    return NextResponse.json({ views: {} });
  }

  try {
    const { data, error } = await supabase
      .from('post_views')
      .select('slug, views');

    if (error) {
      console.error('Error fetching blog post views:', error);
      return NextResponse.json({ views: {} });
    }

    const viewsMap = (data || []).reduce((acc, row) => {
      acc[row.slug] = Number(row.views) || 0;
      return acc;
    }, {});

    return NextResponse.json({ views: viewsMap });
  } catch (err) {
    console.error('Unexpected error fetching post views:', err);
    return NextResponse.json({ views: {} });
  }
}
