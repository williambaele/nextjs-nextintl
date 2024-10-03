import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('API Route called');
  const data = ['Hello', 'World'];
  return NextResponse.json({ data }, { status: 200 });
}
