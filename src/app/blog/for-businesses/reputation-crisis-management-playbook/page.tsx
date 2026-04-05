import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Reputation Crisis Management Playbook for Businesses | Reputation 500',
  description: 'A step-by-step crisis management playbook covering the first 48 hours, team assembly, stakeholder communication, and long-term reputation recovery.',
  alternates: { canonical: `${SITE_URL}/blog/for-businesses/reputation-crisis-management-playbook` },
  openGraph: {
    title: 'Reputation Crisis Management Playbook for Businesses',
    description: 'A step-by-step crisis management playbook covering the first 48 hours, team assembly, stakeholder communication, and long-term reputation recovery.',
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reputation Crisis Management Playbook for Businesses',
    description: metadata.description,
    author: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Reputation 500', url: SITE_URL },
    datePublished: '2026-04-05',
    dateModified: '2026-04-05',
    url: `${SITE_URL}/blog/for-businesses/reputation-crisis-management-playbook`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What qualifies as a reputation crisis?',
        acceptedAnswer: { '@type': 'Answer', text: 'A reputation crisis is any event that threatens to significantly damage public perception of your business. This includes viral negative reviews or social media posts, data breaches, executive misconduct, product recalls, negative media coverage, lawsuits, employee scandals, or any incident generating significant negative online conversation about your brand.' },
      },
      {
        '@type': 'Question',
        name: 'How quickly should a business respond to a reputation crisis?',
        acceptedAnswer: { '@type': 'Answer', text: 'You should acknowledge the situation publicly within 1-4 hours of the crisis becoming public. A detailed response with an action plan should follow within 24 hours. Research shows that companies that respond within the first hour experience 50% less reputational damage than those that wait 24 hours or more.' },
      },
      {
        '@type': 'Question',
        name: 'Should you delete negative social media comments during a crisis?',
        acceptedAnswer: { '@type': 'Answer', text: 'Generally no. Deleting comments during a crisis almost always backfires because users screenshot content before deletion, and the act of deleting is seen as censorship, which fuels further outrage. The only exception is content that is abusive, threatening, or contains misinformation that could cause physical harm. For all other negative comments, respond transparently.' },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to recover from a reputation crisis?',
        acceptedAnswer: { '@type': 'Answer', text: 'Recovery timelines vary significantly based on crisis severity and response quality. Minor crises with strong responses can recover within 30-90 days. Moderate crises typically require 3-6 months of sustained effort. Severe crises involving legal issues or fundamental trust violations may take 12-24 months or longer for full recovery.' },
      },
      {
        '@type': 'Question',
        name: 'Do small businesses need a crisis management plan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Small businesses are often more vulnerable to reputation crises because they have fewer resources to absorb the impact and less brand equity to fall back on. A single viral negative incident can devastate a small business. Having even a basic crisis plan with designated roles, pre-approved messaging, and monitoring tools dramatically improves outcomes.' },
      },
    ],
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-bg-dark pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs light items={[
            { label: 'Blog', href: '/blog' },
            { label: 'For Businesses', href: '/blog/for-businesses' },
            { label: 'Crisis Management Playbook' },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Reputation Crisis Management Playbook for Businesses
            </h1>
            <p className="text-gray-400 text-sm">Published April 5, 2026 · By Reputation 500 Team</p>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A reputation crisis can strike any business at any time — a viral social media complaint, a damaging news article, a data breach, or an executive scandal. How you respond in the <strong>first 48 hours</strong> determines whether the crisis becomes a temporary setback or a permanent scar on your brand. Companies that respond quickly and transparently experience <strong>50% less long-term reputational damage</strong> than those that delay or stay silent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This playbook provides a structured framework for managing reputation crises from the first alert through full recovery, drawn from Reputation 500&apos;s experience managing crisis responses for businesses across industries.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            The First 4 Hours: Assess, Assemble, Acknowledge
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The initial hours of a crisis are when the most damage occurs — and when you have the greatest opportunity to control the narrative. Speed matters more than perfection at this stage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Assess the situation.</strong> Before responding, understand the scope. What happened? How widely has it spread? What platforms are affected? Is the information accurate or distorted? Gather facts quickly, but do not wait for complete information before acting. A <strong>15-30 minute assessment</strong> is sufficient to inform your initial response.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Assemble your crisis team.</strong> Every business should have a pre-designated crisis team. At minimum, this includes a decision-maker (CEO or senior executive), a communications lead, a legal advisor, and a social media manager. For larger organizations, add HR, operations, and customer service representatives as needed. If you work with a <Link href="/services/for-businesses/business-reputation-management" className="text-[#004AAD] hover:underline">reputation management partner</Link>, notify them immediately.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Acknowledge publicly.</strong> Within the first four hours, publish a brief statement acknowledging the situation. You do not need to have all the answers — you need to show you are aware and taking it seriously. A simple acknowledgment buys you time while demonstrating responsiveness.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Hours 4-24: Investigate, Strategize, Communicate
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With the immediate acknowledgment published, shift to gathering comprehensive information and developing your full response strategy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Conduct a thorough investigation.</strong> Determine exactly what happened, who is affected, and what your organization&apos;s responsibility is. Document everything. If external parties (customers, employees, partners) were harmed, quantify the impact. This investigation informs your messaging and legal posture.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Develop your messaging framework.</strong> Create a core message that addresses three things: what happened, what you are doing about it, and how you will prevent it from happening again. Prepare variations for different audiences — customers, employees, media, investors, and partners. Every communication should be consistent in its core facts and tone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Communicate with stakeholders directly.</strong> Do not let your employees, partners, or key customers learn about the crisis from social media. Send direct communications to each stakeholder group with information relevant to them. Employees need reassurance and talking points. Customers need to know how they are affected and what you are doing. Partners need to understand your response plan.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Hours 24-48: Media Response and Social Containment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By the second day, the crisis has likely attracted media attention and significant social media discussion. Your focus shifts to controlling the narrative across these channels.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Engage media proactively.</strong> Rather than waiting for reporters to contact you, issue a formal statement through your <Link href="/services/for-businesses/digital-pr" className="text-[#004AAD] hover:underline">digital PR channels</Link>. If the crisis warrants it, hold a press conference or publish a detailed blog post. Being the primary source of information about your own crisis reduces speculation and misinformation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Manage social media strategically.</strong> Assign dedicated team members to monitor every major platform in real time. Respond to direct questions and concerns with pre-approved messaging. Do not delete negative comments unless they contain threats or misinformation. Deleting comments during a crisis invariably amplifies the backlash. Instead, respond transparently and direct complex issues to private channels.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Monitor sentiment continuously.</strong> Track mention volume, sentiment trends, and emerging narratives across all platforms. Use monitoring tools to identify when the conversation begins to shift — either toward resolution or toward a secondary crisis. This data informs when to accelerate or modify your response.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Week One: Stabilize and Begin Recovery
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            After the acute phase, transition from crisis response to recovery mode. The objective is to stabilize your online presence and begin rebuilding trust.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Publish detailed updates.</strong> Provide substantive updates on the actions you have taken, the results of your investigation, and the changes you are implementing. Transparency during recovery builds more trust than the crisis destroyed. Companies that provide regular, detailed updates recover <strong>40% faster</strong> than those that go silent after the initial response.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Begin content creation.</strong> Start publishing positive content that addresses the crisis themes. If the crisis involved customer service failures, publish content about your new service commitments. If it involved a product issue, detail your quality control improvements. This content begins competing with crisis coverage in search results.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Long-Term Recovery: Rebuilding What Was Lost
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Full reputation recovery requires sustained effort over months. The actions you take during this phase determine whether the crisis becomes a permanent association with your brand or a distant memory.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement the structural changes you promised. Nothing destroys post-crisis trust faster than failing to follow through on commitments made during the response. Publicly report on progress. Solicit feedback from affected parties. Invest in the systems — monitoring, review management, content creation — that will prevent a recurrence and strengthen your reputation going forward.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Reputation 500, our post-crisis recovery programs typically run 6-12 months and include aggressive content suppression, media placement campaigns, and review generation strategies designed to rebuild trust systematically.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mt-16 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">What qualifies as a reputation crisis?</h3>
              <p className="text-gray-700">A reputation crisis is any event that threatens to significantly damage public perception of your business, including viral negative posts, data breaches, executive misconduct, product recalls, negative media coverage, or any incident generating significant negative online conversation.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How quickly should a business respond to a reputation crisis?</h3>
              <p className="text-gray-700">Acknowledge the situation publicly within 1-4 hours. A detailed response with an action plan should follow within 24 hours. Companies that respond within the first hour experience 50% less reputational damage than those that wait.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">Should you delete negative social media comments during a crisis?</h3>
              <p className="text-gray-700">Generally no. Deleting comments during a crisis typically backfires as users screenshot content and view deletion as censorship. The only exception is content that is abusive, threatening, or contains dangerous misinformation.</p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg mb-2">How long does it take to recover from a reputation crisis?</h3>
              <p className="text-gray-700">Minor crises with strong responses can recover within 30-90 days. Moderate crises typically require 3-6 months. Severe crises involving legal issues or fundamental trust violations may take 12-24 months or longer.</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Do small businesses need a crisis management plan?</h3>
              <p className="text-gray-700">Yes. Small businesses are often more vulnerable because they have fewer resources to absorb impact and less brand equity to fall back on. Even a basic plan with designated roles and pre-approved messaging dramatically improves outcomes.</p>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Is Your Business Prepared for a Reputation Crisis?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a free crisis readiness assessment and a custom response plan before you need one.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center px-8 py-3.5 text-base font-semibold rounded-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Related Articles</h2>
          <div className="space-y-4">
            <Link href="/blog/for-businesses/warning-signs-reputation-at-risk" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Warning Signs Your Online Reputation Is at Risk →</span>
            </Link>
            <Link href="/blog/for-businesses/how-to-respond-negative-reviews" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">How to Respond to Negative Reviews Professionally →</span>
            </Link>
            <Link href="/blog/for-businesses/proactive-reputation-management-strategy" className="block p-4 border border-gray-200 rounded-lg hover:border-[#004AAD]/30 transition-colors">
              <span className="font-semibold text-gray-900">Proactive Reputation Management Strategy for Businesses →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
