import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // For now, log the submission. Replace with Resend/SendGrid when API key is configured.
    console.log('Contact form submission:', { name, email, phone, message, package: body.package })

    // TODO: Integrate with Resend or SendGrid
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Reputation 500 <noreply@reputation500.com>',
    //   to: process.env.CONTACT_EMAIL || 'info@reputation500.com',
    //   subject: `New Contact: ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
