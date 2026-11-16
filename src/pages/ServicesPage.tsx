import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  Compass, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  FileText, 
  Shovel, 
  DraftingCompass, 
  Wrench, 
  Building2, 
  ChevronRight,
  Download,
  AlertCircle,
  Phone
} from 'lucide-react'
import { SERVICES_CATALOG } from '@/data/services'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

interface ServicesPageProps {
  onOpenConsultation: () => void
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<string>('soil-perc-test')

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '')
      const found = SERVICES_CATALOG.find(s => s.id === hash || s.id.includes(hash))
      if (found) {
        setActiveTab(found.id)
      }
    }
  }, [location.hash])

  const currentService = SERVICES_CATALOG.find(s => s.id === activeTab) || SERVICES_CATALOG[0]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* ====================================================================
          TOP HERO BANNER (Matching Pacific Crest High-Impact Visual Layout)
          ==================================================================== */}
      <section className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center items-center overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-8 text-white border-b border-border">
        {/* Background Project Image with High-Visibility Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroDrone}
            alt="Doucette Engineering Civil and Septic Design"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-[0.2em] uppercase text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Massachusetts Civil &amp; Title 5 Disciplines</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            From Start To Finish
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            From preliminary test pits to municipal Board of Health hearing defense and final as-built sign-offs, we deliver stamped engineering plans with zero bureaucratic delays.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-sm bg-primary text-white font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Stamped Proposal</span>
            </button>
            <a
              href="tel:9783694200"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-sm border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white/15 text-xs font-semibold tracking-wider uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>(978) 369-4200</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services Navigation Tabs */}
      <section className="border-b border-border sticky top-14 sm:top-16 z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {SERVICES_CATALOG.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === s.id
                    ? 'bg-primary text-white shadow-xs font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{s.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service In-Depth View */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-sm text-[11px] font-bold bg-primary-light text-primary border border-primary/20">
                    {currentService.badge || 'Licensed Engineering'}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Turnaround: <strong>{currentService.typicalTimeline}</strong>
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-foreground tracking-tight">
                  {currentService.title}
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Official Engineering Deliverables Stamped by Robert Doucette, P.E.:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who Needs This Section */}
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  Who Needs This Service:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.whoNeedsThis.map((target, idx) => (
                    <div key={idx} className="p-3.5 rounded-sm border border-slate-100 bg-white shadow-2xs flex items-center gap-3 text-xs text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span>{target}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Step-by-Step Methodology */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-foreground">
                  Our Massachusetts Title 5 Engineering Process:
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      step: '01',
                      title: 'Municipal Records & GIS Research',
                      desc: 'We pull original town septic permits, evaluate GIS contour layers, identify nearby public/private wells, and establish property line setback constraints.'
                    },
                    {
                      step: '02',
                      title: 'On-Site Field Testing & Perc Logging',
                      desc: 'Robert Doucette, P.E. witnesses backhoe test pit excavations alongside your local Board of Health agent. We log soil textural analysis and identify seasonal high groundwater marks.'
                    },
                    {
                      step: '03',
                      title: 'CAD Hydraulic Modeling & Plan Drafting',
                      desc: 'Complete cross-sections, pipe profiles, reserve area calculations, and component sizing according to Title 5 310 CMR 15.000 and local town bylaws.'
                    },
                    {
                      step: '04',
                      title: 'Board of Health Permitting & As-Built Sign-Off',
                      desc: 'We submit the stamped package, attend municipal hearings to defend your plan, and perform final construction inspections before issuance of the Certificate of Compliance.'
                    }
                  ].map((proc, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-sm bg-slate-50 border border-slate-100 text-xs">
                      <span className="font-mono font-black text-primary text-base shrink-0">{proc.step}</span>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{proc.title}</h4>
                        <p className="text-muted-foreground mt-0.5 leading-relaxed">{proc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Pricing & Instant Booking Card */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="card-modern rounded-sm border-2 border-primary/30 p-6 space-y-6 shadow-lg bg-white sticky top-28">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold block">
                    Engineering Fee
                  </span>
                  <div className="text-3xl font-black text-foreground mt-1">
                    ${currentService.priceStartingAt.toLocaleString()}
                    <span className="text-xs font-normal text-muted-foreground ml-1">starting flat fee</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Includes direct PE representation &amp; initial Board of Health review filing.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm bg-primary-light text-slate-800 text-xs space-y-1.5 border border-primary/20">
                  <div className="font-bold flex items-center gap-1.5 text-primary">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Stamped By Licensed PE</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Robert Doucette, P.E. • Massachusetts Civil PE License #41908
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Typical Timeline:</span>
                    <strong className="text-foreground">{currentService.typicalTimeline}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Town Coordination:</span>
                    <strong className="text-foreground">Full Representation</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Payment Schedule:</span>
                    <strong className="text-foreground">50% Deposit / 50% Submittal</strong>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="btn-primary w-full py-3 justify-center text-xs tracking-wider uppercase font-semibold shadow-md rounded-sm"
                  >
                    <span>Request Stamped Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:9783694200"
                    className="btn-outline w-full py-2.5 justify-center text-xs tracking-wider uppercase font-semibold text-slate-700 rounded-sm"
                  >
                    Call Engineer (978) 369-4200
                  </a>
                </div>

                <div className="p-3 rounded-sm bg-slate-50 text-[11px] text-muted-foreground text-center">
                  ⚡ Have an urgent closing? Ask about our 3-day emergency perc testing option.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
