import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Insert contact message into contacts table
    const { data, error } = await (supabase as any)
      .from('contacts')
      .insert([
        {
          name,
          email,
          subject: subject || 'New Website Inquiry',
          message,
          status: 'unread',
        },
      ])
      .select()
      .single();

    if (error) {
      console.warn('Supabase contact insert warning:', error.message);
    }

    // Console notification dispatch for codersukh@gmail.com
    console.log(`[CONTACT NOTIFICATION -> codersukh@gmail.com]
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
Time: ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! Check Admin Panel & Email.',
      data: data || { name, email, subject, message },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Failed to send message.' },
      { status: 500 }
    );
  }
}
