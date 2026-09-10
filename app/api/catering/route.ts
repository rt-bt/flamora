import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Connect to your catering booking system (Supabase, Firebase, custom API)
    // For now, return a demo response
    return NextResponse.json({
      success: true,
      message: 'Catering enquiry received (demo mode)',
      data: {
        id: `CAT-${Date.now()}`,
        ...body,
        status: 'pending',
        note: 'This is a demo response. No actual catering enquiry has been recorded.',
      },
    }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
