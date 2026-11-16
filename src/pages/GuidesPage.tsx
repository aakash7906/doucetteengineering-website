import React, { useState } from 'react'
import { 
  BookOpen, 
  Search, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  ShieldCheck, 
  DollarSign,
  Phone
} from 'lucide-react'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

interface GuidesPageProps {
  onOpenConsultation: () => void
}

export const GuidesPage: React.FC<GuidesPageProps> = ({ onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  const articles = [
    {
      id: 'failed-title-5',
      badge: 'Urgent Guide',
      title: 'What to Do If Your Septic System Fails a Title 5 Inspection',
      summary: 'A step-by-step roadmap for Massachusetts homeowners preparing to sell. Learn the difference between an outright failure and a conditional pass.',
      readTime: '5 min read',
      details: [
        'Understand Conditional Pass: Often caused by a cracked distribution box or crushed baffle, which can be repaired for under $1,500 rather than full replacement.',
        'Escrow Agreements: How to close your real estate transaction on time with 1.5x escrow holdbacks while engineering is underway.',
        'Town Permitting Timeline: Why filing early with Robert Doucette, P.E. prevents closing delays.'
      ]
    },
    {
      id: 'form-11-12',
      badge: 'Testing Protocol',
      title: 'Understanding Form 11 & Form 12 Soil Evaluation & Perc Testing',
      summary: 'Everything you need to know about Massachusetts deep hole test pits, soil horizon logging, and percolation rate certifications.',
      readTime: '6 min read',
      details: [
        'Deep Hole Pits: An excavator digs 8 to 10 feet deep to identify soil layers (A, B, C horizons) and restrictive layers.',
        'Seasonal High Groundwater: How soil redoximorphic features (mottling) determine the legal water table elevation.',
        'Percolation Rate: Timing the drop of water in minutes per inch (standard passing rate is faster than 60 min/inch).'
      ]
    },
    {
      id: 'tax-credit-54',
      badge: 'Financial Relief',
      title: 'Massachusetts Schedule SC Septic Tax Credit (Credit 54)',
      summary: 'How to claim up to $6,000 in direct tax credits from the Massachusetts Department of Revenue for septic replacement and design.',
      readTime: '4 min read',
      details: [
        '40% Credit: Covers up to 40% of eligible design, soil testing, and construction costs up to $15,000 total expenditure.',
        'Spread Over 3 Years: Claim up to $2,000 per year against your Massachusetts state income tax return.',
        'Betterment Loans: How to combine state tax credits with municipal 0% to 2% Clean Water Trust betterment financing.'
      ]
    },
    {
      id: 'repair-vs-replace',
      badge: 'Cost Savings',
      title: 'Repair vs. Replacement: When Can You Avoid a Full System Build?',
      summary: 'Explore Title 5 component repairs, effluent filter retrofits, and tight-tank conversions that comply with municipal health bylaws.',
      readTime: '5 min read',
      details: [
        'Distribution Box Failures: Uneven hydraulic distribution causing localized breakout can often be corrected with speed levelers and a new box.',
        'Pump Chamber Retrofits: Upgrading failed effluent pumps without disturbing the existing leaching field.',
        'Local Board of Health Hearings: How Robert Doucette, P.E. defends component repair petitions.'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Can soil percolation testing be performed during the winter in Massachusetts?',
      a: 'Yes, percolation testing can be conducted year-round provided the frost layer in the ground can be penetrated by the backhoe and water does not freeze immediately in the test pipe. However, spring testing is popular because high groundwater can be measured directly.'
    },
    {
      q: 'How long is an official Title 5 septic design plan valid in Massachusetts?',
      a: 'Under 310 CMR 15.000, a septic construction permit issued by a local Board of Health is valid for three (3) years from the date of issuance, with possible extensions granted by the Board upon written request.'
    },
    {
      q: 'What is the required setback distance between a septic system and a drinking water well?',
      a: 'In Massachusetts, Title 5 mandates a minimum 100-foot separation distance between a private drinking water well and a Soil Absorption System (SAS / leaching field), and 50 feet between a well and a septic tank. Many towns have stricter local bylaws (e.g. 150 feet).'
    },
    {
      q: 'What happens during a local Board of Health hearing?',
      a: 'Robert Doucette, P.E. presents the stamped CAD drawings, soil logs, and hydraulic calculations to the Board of Health members and the town health agent. If any local variances are required (such as setback reductions on tight lots), Robert provides engineering justification to secure unanimous approval.'
    },
    {
      q: 'Do I need to be present at the property during the perc test?',
      a: 'No, homeowner presence is not required. Robert Doucette, P.E. coordinates directly with the town health agent and backhoe excavator operator on site, takes all official measurements, and emails you the results on the same day.'
    }
  ]

  const filteredArticles = articles.filter(a => 
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.summary.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      
      {/* ====================================================================
          TOP HERO BANNER (Pacific Crest Reference Style)
          ==================================================================== */}
      <section className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center items-center overflow-hidden pt-20 sm:pt-24 pb-14 sm:pb-16 px-4 sm:px-8 text-white border-b border-border">
        {/* Background Project Image with High-Visibility Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroDrone}
            alt="Massachusetts Title 5 Guidelines and Soil Testing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-[0.2em] uppercase text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Massachusetts Title 5 Knowledge Base</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            Regulations, Guides &amp; Tax Credits
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            Clear, engineer-verified guidance on 310 CMR 15.000 compliance, Form 11 soil testing, Board of Health hearings, and state tax credits.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto w-full pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5" />
            <input
              type="text"
              placeholder="Search guides (e.g. tax credit, failed inspection, perc test)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-sm border border-white/20 bg-black/40 backdrop-blur-md text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              Essential Title 5 Educational Guides
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              Written by Robert Doucette, P.E. to empower homeowners and contractors with straight facts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((art) => (
              <div key={art.id} className="card-modern rounded-sm bg-white p-6 sm:p-7 space-y-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-sm text-[11px] font-bold bg-primary-light text-primary border border-primary/20">
                    {art.badge}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium">{art.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {art.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {art.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="text-xs font-bold tracking-wider uppercase text-primary hover:text-primary-hover flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Request Engineering Advice on This Topic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tax Credit Callout Banner */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-sm bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-2.5 py-0.5 rounded-sm text-xs font-bold bg-primary text-white tracking-wider uppercase inline-block">
                Tax Savings Alert
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Claim Up to $6,000 With Massachusetts Title 5 Credit 54
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                We provide all required engineering invoices and Form 11 certifications formatted for your CPA and Massachusetts Department of Revenue Schedule SC filing.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-primary py-3 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold whitespace-nowrap shrink-0 shadow-lg rounded-sm"
            >
              <span>Get Eligible Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              Title 5 Permitting Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              Direct technical answers to common questions asked by homeowners and builders.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div 
                  key={idx}
                  className="rounded-sm border border-slate-200 bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-foreground hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

    </div>
  )
}
