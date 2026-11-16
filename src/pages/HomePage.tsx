import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Search, 
  Calculator, 
  HardHat, 
  Clock, 
  FileCheck, 
  Users, 
  MapPin, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  FileSpreadsheet, 
  Layers, 
  ExternalLink,
  Star,
  Sparkles,
  Building2,
  CalendarCheck2,
  FileText
} from 'lucide-react'
import { SERVICES_CATALOG } from '@/data/services'
import { INITIAL_PROJECTS } from '@/data/mockProjects'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

interface HomePageProps {
  onOpenConsultation: () => void
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)
  const [searchTrackingInput, setSearchTrackingInput] = useState('')
  const [activeSearchProject, setActiveSearchProject] = useState(INITIAL_PROJECTS[0])
  const [activeScene, setActiveScene] = useState(0)

  const scenes = [
    {
      name: 'Residential Landscape',
      image: ASSETS.heroDrone,
      label: 'Aerial Site Inspection',
      caption: 'High-precision residential drone mapping & Title 5 site layout in Middlesex County',
    },
    {
      name: 'Soil Perc Testing',
      image: ASSETS.contractorSite,
      label: 'Field Excavation',
      caption: 'Deep hole test pit evaluation & witnessed percolation rates with town health agent',
    },
    {
      name: 'Suburban Development',
      image: ASSETS.suburbanProperty,
      label: 'Civil Grading & Drainage',
      caption: 'Grading plans, cut-and-fill analysis & MassDEP stormwater management',
    },
    {
      name: 'CAD Site Design',
      image: ASSETS.cadTabletInspection,
      label: 'PE Stamped Plans',
      caption: 'PE-stamped CAD profiles, hydraulic pipe sizing & Board of Health filings',
    },
  ]

  const handleSearchTracking = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchTrackingInput.trim().toUpperCase()
    const found = INITIAL_PROJECTS.find(p => 
      p.trackingNumber.toUpperCase().includes(query) ||
      p.propertyAddress.toUpperCase().includes(query) ||
      p.city.toUpperCase().includes(query)
    )
    if (found) {
      setActiveSearchProject(found)
    } else {
      alert(`No active project found matching "${searchTrackingInput}". Try our sample demo: DE-2026-8841`)
    }
  }

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_CATALOG
    : SERVICES_CATALOG.filter(s => s.id === selectedCategory)

  const faqs = [
    {
      q: 'What is Title 5 and why do I need a Registered Professional Engineer (P.E.)?',
      a: 'Title 5 (310 CMR 15.000) is the Massachusetts environmental code regulating on-site subsurface wastewater disposal systems. Whenever a septic system fails an inspection, a home is remodeled with added bedrooms, or new construction occurs, a Massachusetts Registered Professional Engineer (P.E.) or Registered Sanitarian must perform soil percolation testing, calculate hydraulic loading, draft CAD site plans, and submit stamped design documents to the local Board of Health for approval.'
    },
    {
      q: 'How fast can Robert Doucette, P.E. schedule my soil percolation test?',
      a: 'We offer expedited 3 to 7 business day percolation test scheduling. We coordinate directly with your town\'s Board of Health agent and an excavator operator to perform deep hole test pits, identify seasonal high groundwater elevations, and record official Form 11/12 perc rates without delay.'
    },
    {
      q: 'What should I do if my home failed a Title 5 inspection during a sale?',
      a: 'Don\'t panic. A conditional pass or failure does not have to derail your closing. We provide rapid evaluation to determine whether an economical component repair (such as a distribution box or pump chamber retrofit) will satisfy the town, or we can fast-track complete replacement engineering and escrow documentation.'
    },
    {
      q: 'Does Massachusetts offer tax credits or financial assistance for septic replacement?',
      a: 'Yes. Massachusetts homeowners are eligible for Title 5 Septic Tax Credits (Schedule SC / Credit 54), which provide up to $6,000 in state tax credits (40% of eligible repair and design costs up to $15,000). Many municipalities also offer low-interest betterment loans through the Mass Clean Water Trust.'
    },
    {
      q: 'Which Massachusetts towns and municipalities do you serve?',
      a: 'We regularly engineer and permit septic systems across Middlesex, Worcester, Norfolk, and Essex counties, including Acton, Concord, Sudbury, Carlisle, Littleton, Westford, Boxborough, Harvard, Groton, Chelmsford, Maynard, Stow, Bolton, Ayer, Wayland, and Lincoln.'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ====================================================================
          FULL-SCREEN CINEMATIC HERO SECTION
          ==================================================================== */}
      <section className="relative min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] flex flex-col justify-between overflow-hidden text-white pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-8 border-b border-border">
        
        {/* Full-Screen Background Image Showcase with Crossfade */}
        <div className="absolute inset-0 z-0">
          {scenes.map((scene, idx) => (
            <img
              key={scene.name}
              src={scene.image}
              alt={scene.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                activeScene === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          ))}
          {/* Uniform dark overlays - equal, crystal-clear image visibility on both left and right sides */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        {/* Main Centered Content (Balanced Left & Right Image Exposure) */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center my-auto py-10 sm:py-16 space-y-6 sm:space-y-7">

          {/* Main Headline (Architectural Serif & Clean Contrast) */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.12] drop-shadow-md">
            Title 5 Septic Design &amp; <br className="hidden sm:inline" />
            <span className="font-light italic text-slate-200">Civil Engineering Solutions.</span>
          </h1>

        
          {/* Action Buttons - Reference Style Solid & Glass Combination */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 h-11 px-6 rounded-sm bg-primary text-white font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md cursor-pointer hover:scale-[1.02]"
            >
              <span>Request a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/tracker"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-sm border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/50 transition-all text-xs font-semibold tracking-wider uppercase cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-primary" />
              <span>Track Live Permit</span>
            </Link>

            <a
              href="tel:9783694200"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-sm border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white/10 transition-colors text-xs font-semibold tracking-wider uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>(978) 369-4200</span>
            </a>
          </div>

        </div>

        {/* Bottom Row: Key Credentials & Scene Switcher */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-t border-white/10 pt-4">

            {/* Interactive Scene Selector & Active Scene Caption */}
            <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
              <div className="flex items-center gap-1.5 p-1 rounded-sm bg-black/40 backdrop-blur-md border border-white/15">
                {scenes.map((scene, idx) => (
                  <button
                    key={scene.name}
                    type="button"
                    onClick={() => setActiveScene(idx)}
                    className={`px-2.5 py-1 text-[10px] font-sans font-semibold tracking-wider uppercase transition-all rounded-xs cursor-pointer ${
                      activeScene === idx
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                   {scene.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>


      {/* ====================================================================
          SERVICES CATALOG WITH CATEGORY FILTER PILLS
          ==================================================================== */}
      <section className="section-wrap bg-slate-50/50 border-b border-border-subtle" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="badge-pill mx-auto">Civil & Environmental Disciplines</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              End-to-End Civil Engineering &amp; Wastewater Solutions
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm sm:text-base text-muted-foreground pt-1">
              From the initial backhoe test pit to municipal Board of Health hearing approval and final as-built sign-offs, we provide clear timelines, fixed pricing, and professional PE stamps.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'soil-perc-test', label: 'Soil Perc & Deep Hole' },
              { id: 'septic-design', label: 'Title 5 Septic Design' },
              { id: 'site-development', label: 'Site Grading & Civil' },
              { id: 'septic-repair', label: 'Repairs & Retrofits' },
              { id: 'commercial-septic', label: 'Commercial Systems' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-secondary text-secondary-foreground shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div 
                key={service.id} 
                className="feature-card flex flex-col justify-between rounded-sm"
              >
                <div>
                  {/* Top Meta: Badge & Starting Price */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {service.badge ? (
                      <span className="px-2.5 py-1 rounded-sm text-[11px] font-bold bg-primary-light text-primary border border-primary/20">
                        {service.badge}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-sm text-[11px] font-medium bg-slate-100 text-slate-600">
                        Licensed Engineering
                      </span>
                    )}

                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">Starts at</span>
                      <span className="text-lg font-black text-slate-900">${service.priceStartingAt.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Typical Timeline */}
                  <div className="flex items-center gap-2 p-2.5 rounded-sm bg-slate-50 border border-slate-100 mb-5 text-xs text-slate-700">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>Typical Approval: <strong>{service.typicalTimeline}</strong></span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Engineering Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="btn-primary flex-1 py-2 text-xs justify-center rounded-sm tracking-wider uppercase font-semibold"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    to={`/services#${service.id}`}
                    className="btn-outline py-2 px-3 text-xs rounded-sm tracking-wider uppercase"
                    title="View Full Details"
                  >
                    Details
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-primary hover:text-primary-hover hover:underline"
            >
              <span>Explore all specifications, sample CAD drawings &amp; Board of Health filing packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* ====================================================================
          LIVE PERMIT & PROJECT TRACKER SHOWCASE
          ==================================================================== */}
      <section className="section-wrap bg-white border-b border-border-subtle" id="tracker-demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-5">
              <span className="badge-pill">Transparency &amp; Accountability</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
                Track Every Stage of Your Septic Approval in Real Time
              </h2>
              <div className="w-16 h-0.5 bg-primary" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Homeowners, contractors, and realtors never have to wonder where their permit stands. Enter your project number to see soil testing logs, CAD drafting progress, and Board of Health hearing schedules.
              </p>

              {/* Quick Search Form */}
              <form onSubmit={handleSearchTracking} className="flex items-center gap-2 max-w-md pt-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Enter Tracking # (e.g. DE-2026-8841)"
                    value={searchTrackingInput}
                    onChange={(e) => setSearchTrackingInput(e.target.value)}
                    className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-sm border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn-primary py-2.5 text-xs shrink-0 rounded-sm tracking-wider uppercase">
                  Lookup
                </button>
              </form>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Demo tracking IDs:</span>
                <button 
                  onClick={() => setActiveSearchProject(INITIAL_PROJECTS[0])}
                  className="font-mono text-primary font-bold hover:underline"
                >
                  DE-2026-8841
                </button>
                <span>•</span>
                <button 
                  onClick={() => setActiveSearchProject(INITIAL_PROJECTS[1] || INITIAL_PROJECTS[0])}
                  className="font-mono text-primary font-bold hover:underline"
                >
                  DE-2026-9042
                </button>
              </div>

              <div className="pt-2">
                <Link to="/tracker" className="btn-outline text-xs rounded-sm tracking-wider uppercase">
                  Open Full Screen Tracking Portal
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Right Live Tracker Interactive Widget */}
            <div className="lg:col-span-7">
              <div className="card-modern border-2 border-slate-200/90 shadow-xl overflow-hidden bg-white p-0 rounded-sm">
                
                {/* Header of Tracker */}
                <div className="p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-sm sm:text-base text-primary-light">
                        {activeSearchProject.trackingNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-primary text-white uppercase">
                        {activeSearchProject.currentStatusStage.replace('_', ' ')}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-white mt-1">
                      {activeSearchProject.title}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {activeSearchProject.propertyAddress}, {activeSearchProject.city}, MA
                    </p>
                  </div>

                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Overall Progress</span>
                    <span className="text-xl font-black text-primary">{activeSearchProject.percentComplete}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-2">
                  <div 
                    className="bg-primary h-2 transition-all duration-500" 
                    style={{ width: `${activeSearchProject.percentComplete}%` }} 
                  />
                </div>

                {/* Milestones Stepper List */}
                <div className="p-5 space-y-4 max-h-[300px] overflow-y-auto">
                  {activeSearchProject.milestones.map((m, idx) => (
                    <div key={m.id || idx} className="flex items-start gap-3 text-xs">
                      <div className="mt-0.5">
                        {m.status === 'completed' ? (
                          <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        ) : m.status === 'in_progress' ? (
                          <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center animate-pulse">
                            <Clock className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
                            <span className="text-[10px] font-bold">{idx + 1}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold ${m.status === 'completed' ? 'text-slate-900' : m.status === 'in_progress' ? 'text-amber-700 font-extrabold' : 'text-slate-500'}`}>
                            {m.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {m.completedDate || m.estimatedDate || 'Scheduled'}
                          </span>
                        </div>
                        <p className="text-slate-600 text-[11px] mt-0.5 leading-normal">
                          {m.description}
                        </p>
                        {m.engineerNotes && (
                          <div className="mt-1 p-2 rounded-sm bg-slate-50 border border-slate-100 text-[10px] text-slate-700 italic">
                            <strong>PE Note:</strong> "{m.engineerNotes}"
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Assigned PE & Board of Health Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-slate-700">
                      Assigned PE: <strong>{activeSearchProject.assignedEngineer.name}</strong> ({activeSearchProject.assignedEngineer.licenseNumber})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarCheck2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-slate-700">
                      BOH Review: <strong>{activeSearchProject.boardOfHealth.hearingDate || 'Pending Agenda'}</strong>
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ====================================================================
          COST CALCULATOR TEASER
          ==================================================================== */}
      <section className="section-wrap bg-slate-50/60 border-b border-border-subtle" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-sm bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-sm text-xs font-bold bg-primary text-white tracking-wider uppercase inline-block">
                  Massachusetts Title 5 Cost Estimator
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                  Calculate Your Title 5 Septic Design &amp; Installation Costs
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Estimate engineering fees, perc testing costs, municipal town filing charges, and contractor construction ranges based on bedroom count and lot constraints.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                  <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                    <span className="text-primary font-bold block text-sm">3-4 Bedrooms</span>
                    <span>Most Common ($22k - $27k typical total)</span>
                  </div>
                  <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                    <span className="text-primary font-bold block text-sm">Perc Testing</span>
                    <span>$1,250 fixed flat rate</span>
                  </div>
                  <div className="p-3 rounded-sm bg-white/5 border border-white/10">
                    <span className="text-primary font-bold block text-sm">Tax Credit</span>
                    <span>Save up to $6,000 (Credit 54)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    to="/calculator"
                    className="btn-primary py-3.5 px-6 text-xs font-bold tracking-wider uppercase shadow-lg rounded-sm"
                  >
                    <span>Launch Interactive Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="px-5 py-3.5 rounded-sm border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Get Custom Firm Quote
                  </button>
                </div>
              </div>

              {/* Graphic Mockup / Stats Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-sm bg-white/10 backdrop-blur-md border border-white/15 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Sample 4-Bed Replacement</span>
                    <span className="text-xs font-bold text-primary">Acton / Concord, MA</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Soil Perc &amp; Deep Hole Test:</span>
                      <span className="font-bold text-white font-mono">$1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Complete CAD Septic Design:</span>
                      <span className="font-bold text-white font-mono">$2,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Estimated Construction:</span>
                      <span className="font-bold text-white font-mono">$22,000 - $26,000</span>
                    </div>
                    <div className="flex justify-between text-primary font-semibold pt-1 border-t border-white/10">
                      <span>MA State Tax Credit (40%):</span>
                      <span className="font-mono">-$6,000</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-sm bg-primary/20 border border-primary/30 text-[11px] text-primary-light flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <span>Calculations include PE stamped plans &amp; BOH hearings</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ====================================================================
          CLIENT REVIEWS & TESTIMONIALS
          ==================================================================== */}
      <section className="section-wrap bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="badge-pill mx-auto">Homeowner &amp; Contractor Feedback</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              What Massachusetts Property Owners Say
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              Real results from clients who navigated failed Title 5 inspections, high water tables, and urgent real estate closings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Robert saved our home sale in Concord. The initial inspection failed with high groundwater, and another engineer quoted us $40,000 for a proprietary sand filter. Robert engineered a gravity-assisted design that the Concord Board of Health approved on the first pass, saving us over $14,000.",
                author: "Sarah & David M.",
                role: "Homeowners",
                town: "Concord, MA",
                service: "Title 5 Septic Replacement"
              },
              {
                quote: "As an excavation contractor, I've worked with dozens of engineers. Robert Doucette is by far the most responsive. He shows up on time for test pits, doesn't over-engineer things, and his CAD site plans are actually buildable in the field without headaches.",
                author: "Mark S., Apex Earthworks",
                role: "Licensed Septic Installer",
                town: "Acton, MA",
                service: "Soil Perc Testing & CAD Plans"
              },
              {
                quote: "We were building a new accessory dwelling unit (ADU) in Sudbury with tight lot setbacks. Robert handled the Board of Health variance hearing flawlessly. Stamped plans were ready in two weeks and our building permit sailed through without delays.",
                author: "Jonathan P.",
                role: "Custom Builder",
                town: "Sudbury, MA",
                service: "ADU Septic Expansion"
              }
            ].map((review, idx) => (
              <div key={idx} className="card-modern rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-foreground block">{review.author}</span>
                    <span className="text-[11px] text-muted-foreground">{review.role} • {review.town}</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-sm bg-slate-100 text-slate-700">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ====================================================================
          FAQ ACCORDION SECTION
          ==================================================================== */}
      <section className="section-wrap bg-slate-50/50 border-b border-border-subtle" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="badge-pill mx-auto">Knowledge &amp; Answers</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              Clear answers regarding Massachusetts 310 CMR 15.000 regulations, perc testing seasons, and permitting procedures.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx
              return (
                <div 
                  key={idx}
                  className="rounded-sm border border-slate-200 bg-white overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* ====================================================================
          FINAL CALL-TO-ACTION CONVERSION BANNER
          ==================================================================== */}
      <section className="section-wrap bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-sm bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="px-3 py-1 rounded-sm text-xs font-bold bg-primary text-white tracking-wider uppercase inline-block">
                Start With a Free Engineering Review
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Ready to Clear Your Property for Construction or Sale?
              </h2>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-light">
                Contact Robert Doucette, P.E. today. We look up your town property records, assess your site constraints, and provide a clear, flat-fee engineering proposal within hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="btn-primary w-full sm:w-auto py-3.5 px-8 text-xs sm:text-sm tracking-wider uppercase font-semibold shadow-lg rounded-sm"
                >
                  <span>Request Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:9783694200"
                  className="btn-outline bg-white/10 text-white border-white/20 hover:bg-white/20 w-full sm:w-auto py-3.5 px-6 text-xs sm:text-sm tracking-wider uppercase font-semibold flex items-center justify-center gap-2 rounded-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call (978) 369-4200</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
