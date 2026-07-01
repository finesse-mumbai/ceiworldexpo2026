import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const type = searchParams.get('type');

    if (!type) {
      return NextResponse.json({ status: 'Error', message: 'Missing type parameter' }, { status: 400 });
    }

    const contentType = request.headers.get('content-type') || '';
    let bodyText = '';

    if (contentType.includes('application/x-www-form-urlencoded')) {
      bodyText = await request.text();
    } else if (contentType.includes('application/json')) {
      const bodyJson = await request.json();
      bodyText = new URLSearchParams(bodyJson).toString();
    } else {
      bodyText = await request.text();
    }

    const response = await fetch(
      `https://api.worldexindia.com/ceifair/php/controller/buyerController.php?type=${type}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: bodyText,
      }
    );

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json({ status: 'Error', message: 'Invalid response format from server.' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Internal server error.';
    return NextResponse.json(
      { status: 'Error', message: errorMsg },
      { status: 500 }
    );
  }
}
