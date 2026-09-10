import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Connect to your contact system (Resend, SendGrid, etc.)
    // For now, return a demo response
    return NextResponse.json({
      success: true,
      message: 'Contact message received (demo mode)',
      data: {
        id: `MSG-${Date.now()}`,
        ...body,
        status: 'pending',
        note: 'This is a demo response. No actual message has been sent.',
      },
    }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
