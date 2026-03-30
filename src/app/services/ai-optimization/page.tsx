import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Accordion from '@/components/ui/Accordion'
import ServiceCTA from '@/components/ui/ServiceCTA'
import MediaGallery from '@/components/homepage/MediaGallery'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Optimization: Get Your Brand in AI Answers | Reputation 500',
  description:
    'Ensure your brand is accurately cited by ChatGPT, Claude, Perplexity, and Google AI Overviews. AI search optimization, entity building, and knowledge graph presence for forward-thinking brands.',
  alternates: { canonical: `${SITE_URL}/services/ai-optimization` },
}

const valueProps = [
  {
    icon: 'fa-robot',
    title: 'AI Response Auditing',
    description:
      'We query every major AI platform for your brand and competitors, then map exactly what each model says, misses, or gets wrong about you.',
  },
  {
    icon: 'fa-brain',
    title: 'Entity & Knowledge Graph Building',
    description:
      'We strengthen your digital entity across Wikipedia, Wikidata, Google Knowledge Panel, and structured data sources so AI systems recognize your brand as authoritative.',
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Generative Engine Optimization',
    description:
      'Content engineered to be cited in AI Overviews, Perplexity answers, and Bing Chat responses, driving visibility in the new zero-click search landscape.',
  },
  {
    icon: 'fa-eye',
    title: 'Continuous AI Monitoring',
    description:
      'Automated tracking of how ChatGPT, Claude, Gemini, and Perplexity mention your brand week over week, with alerts for sentiment shifts or inaccuracies.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'AI Brand Audit',
    description:
      'We systematically query ChatGPT, Claude, Perplexity, Google AI Overviews, and Gemini with hundreds of brand-relevant prompts. The resulting audit reveals how each AI system perceives your brand, where gaps exist, and where competitors are being recommended instead of you.',
  },
  {
    number: '02',
    title: 'Entity & Authority Strategy',
    description:
      'We build and optimize your digital entity across the structured data sources that AI models trust: schema markup, knowledge graphs, Wikipedia references, authoritative citations, and high-quality backlinks from sources LLMs weight heavily in retrieval.',
  },
  {
    number: '03',
    title: 'AI-Optimized Content Creation',
    description:
      'We produce content specifically structured for AI citation: clear factual statements, structured data, FAQ sections, and authoritative claims backed by verifiable sources. This content is designed to be retrieved and quoted by large language models.',
  },
  {
    number: '04',
    title: 'Monitor, Measure & Iterate',
    description:
      'AI models update constantly. We run automated monitoring across all major platforms, track changes in how your brand is cited, and iterate our strategy to maintain and improve your AI visibility over time.',
  },
]

const faqs = [
  {
    title: 'What is AI optimization and why does it matter for my brand?',
    content:
      'AI optimization ensures that when someone asks ChatGPT, Claude, Perplexity, or Google AI Overviews about your industry, your brand appears in the answer accurately and favorably. As millions of consumers shift from traditional search to conversational AI for recommendations, purchase decisions, and research, the brands that AI systems cite will capture the majority of new business. If AI assistants do not mention you, or worse, cite inaccurate information, you lose opportunities to competitors who have optimized for this channel.',
  },
  {
    title: 'Which AI platforms do you optimize for?',
    content:
      'We optimize for all major AI assistants and AI-powered search products: OpenAI ChatGPT, Anthropic Claude, Google Gemini and AI Overviews, Perplexity, Microsoft Copilot, Bing Chat, and emerging voice assistants that are rapidly gaining market share. Our methodology targets both the training data layer, which determines what models learn during pre-training and fine-tuning, and the retrieval layer, which controls what models access in real-time via retrieval-augmented generation (RAG). This dual-layer approach gives you comprehensive coverage across AI systems that update on different cycles and rely on different source hierarchies. We continuously expand our platform coverage as new AI search products emerge, ensuring your brand stays visible regardless of which AI assistant your audience prefers.',
  },
  {
    title: 'Can you fix inaccurate information that AI is saying about my brand?',
    content:
      'Yes. We identify the root sources of inaccuracy and address them directly. This includes correcting information on high-authority websites that AI models reference, optimizing structured data on your own properties, securing corrections or updates in publications that feed retrieval systems, and creating new authoritative content that provides AI models with accurate facts. Most clients see measurable improvement in AI response accuracy within 8 to 12 weeks.',
  },
  {
    title: 'How is AI optimization different from traditional SEO?',
    content:
      'Traditional SEO optimizes for ranking positions in a list of blue links. AI optimization focuses on being cited within the AI-generated answer itself. The ranking factors differ significantly: AI models prioritize entity authority, factual clarity, structured data, and source trustworthiness over traditional signals like keyword density or backlink volume. Both disciplines complement each other, but AI optimization requires specialized strategies that go beyond conventional SEO.',
  },
  {
    title: 'How do you measure AI optimization success?',
    content:
      'We track AI mention frequency, response accuracy, sentiment, citation ranking (where you appear relative to competitors in AI answers), and coverage across different query types and prompt variations. Our proprietary monitoring system runs hundreds of brand-relevant prompts across all major AI platforms on a weekly basis to detect changes in how your brand is represented. Clients receive monthly reports showing how AI-generated answers about their brand evolve over time, along with competitive benchmarks that show how you compare to key rivals in AI visibility. We also flag any new inaccuracies or negative sentiment shifts immediately so they can be addressed before they become embedded in model behavior.',
  },
  {
    title: 'How long does it take to see improvement in AI-generated responses?',
    content:
      'Timelines vary by platform. AI systems that use real-time web retrieval (like Perplexity and Google AI Overviews) can reflect changes within 2 to 4 weeks. Systems that rely more heavily on training data (like ChatGPT base models) may take longer as improvements depend on content indexing cycles and model updates. We set realistic expectations during onboarding and provide ongoing monitoring so you can track progress continuously.',
  },
]

export default function AIOptimizationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Optimization Services',
    description:
      'AI optimization services that ensure accurate, favorable brand representation in ChatGPT, Claude, Perplexity, Google AI Overviews, and other AI-powered search and assistant platforms.',
    provider: {
      '@type': 'Organization',
      name: 'Reputation 500',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Optimization',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content,
      },
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-white pt-28 lg:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'AI Optimization' },
            ]}
          />

          <div className="max-w-3xl ">
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#000] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              AI Optimization &mdash; Get Your Brand in AI Answers
            </h1>
            <p
              className="text-lg text-[#555] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Millions of buyers now ask ChatGPT, Claude, Perplexity, and Google AI Overviews
              for recommendations instead of scrolling search results. If AI does not mention
              your brand, you are invisible to a rapidly growing audience. Reputation 500
              makes sure AI systems know who you are, what you do, and why you are the best
              choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#004AAD] text-white font-semibold rounded-md hover:bg-[#003a8a] transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Your Free AI Brand Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#004AAD] text-[#004AAD] font-semibold rounded-md hover:bg-[#004AAD] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              How We Get Your Brand Cited by AI
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              AI visibility is not an accident. It requires a deliberate strategy that
              addresses how large language models discover, evaluate, and cite information
              about your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-white p-6 rounded-xl border border-[#004AAD]/15 hover:border-[#004AAD]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#004AAD]/10 text-[#004AAD] mb-4">
                  <i className={`fas ${prop.icon} text-xl`} />
                </div>
                <h3
                  className="text-lg font-bold text-[#000] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {prop.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Section (Two Columns) ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold text-[#000] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The New Front in Reputation Management
              </h2>
              <div className="space-y-4 text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                <p>
                  The way people find information has fundamentally changed. Instead of
                  scanning ten blue links, a growing share of consumers ask AI assistants
                  direct questions and receive a single, synthesized answer. When someone asks
                  an AI about your industry or your brand by name, that response can make or
                  break a business relationship before you ever get a chance to make your case.
                </p>
                <p>
                  AI-generated responses are built from training data, retrieval-augmented
                  generation sources, and real-time web access. If your brand lacks
                  authoritative, well-structured content across the web, AI assistants may
                  produce incomplete, inaccurate, or unfavorable responses. If competitors
                  have better-optimized content, AI systems will recommend them instead of you.
                </p>
                <p>
                  Reputation 500 has developed a proprietary methodology that addresses both
                  the training data layer and the real-time retrieval layer. We audit how major
                  AI systems currently represent your brand, identify gaps and inaccuracies,
                  and implement a strategy designed to improve AI-generated responses
                  progressively and permanently.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our AI Optimization Process
            </h2>
            <p className="text-[#555] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              A systematic, four-phase approach that moves your brand from invisible to
              cited across every major AI platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-bold text-[#004AAD]/10 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.number}
                </div>
                <h3
                  className="text-lg font-bold text-[#000] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MediaGallery />

      {/* ── Related Services ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] font-semibold text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Explore Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/services/seo" className="block p-6 bg-[#F5F7FA] rounded-2xl border border-[#004AAD]/15 hover:border-[#004AAD]/30 transition-all card-lift">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>SEO Services</h3>
              <p className="text-gray-600" style={{ fontSize: '15px' }}>Data-driven SEO strategies that increase organic traffic and dominate search rankings.</p>
            </Link>
            <Link href="/services/for-businesses" className="block p-6 bg-[#F5F7FA] rounded-2xl border border-[#004AAD]/15 hover:border-[#004AAD]/30 transition-all card-lift">
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Business Reputation Management</h3>
              <p className="text-gray-600" style={{ fontSize: '15px' }}>Protect your company brand, improve star ratings, and turn online trust into measurable revenue.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F7FA] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 ">
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#000] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              AI Optimization FAQs
            </h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <ServiceCTA serviceName="AI Optimization" />
    </>
  )
}
