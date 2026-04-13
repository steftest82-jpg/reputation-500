import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = 'info@reputation500.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, package: pkg, service, company, country } = body

    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // Determine email subject
    const subject = `[Next Steps] Reputation500: ${name}`

    // Build email HTML
    const htmlParts = [
      `<h2>${subject}</h2>`,
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
    ]
    if (company) htmlParts.push(`<p><strong>Company:</strong> ${company}</p>`)
    if (country) htmlParts.push(`<p><strong>Country:</strong> ${country}</p>`)
    if (phone) htmlParts.push(`<p><strong>Phone:</strong> ${phone}</p>`)
    if (pkg) htmlParts.push(`<p><strong>Package:</strong> ${pkg}</p>`)
    if (service) htmlParts.push(`<p><strong>Service:</strong> ${service}</p>`)
    if (message) htmlParts.push(`<p><strong>Message:</strong></p><p>${message}</p>`)

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Reputation 500 <onboarding@resend.dev>',
        to: TO_EMAIL,
        subject,
        html: htmlParts.join('\n'),
        replyTo: email,
      })
    } else {
      // Fallback: log to console when no API key
      console.log('Contact form submission (no RESEND_API_KEY):', { subject, name, email, phone, message, pkg, service, company })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
