import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Connect to your booking system (Supabase, Firebase, custom API)
    // For now, return a demo response
    return NextResponse.json({
      success: true,
      message: 'Reservation request received (demo mode)',
      data: {
        id: `RES-${Date.now()}`,
        ...body,
        status: 'pending',
        note: 'This is a demo response. No actual reservation has been made.',
      },
    }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
