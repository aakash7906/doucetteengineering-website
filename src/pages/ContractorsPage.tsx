import React, { useState } from 'react'
import { 
  HardHat, 
  CheckCircle2, 
  Clock, 
  FileCheck2, 
  ArrowRight, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileText, 
  Sparkles,
  Layers,
  Wrench,
  Download
} from 'lucide-react'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

interface ContractorsPageProps {
  onOpenConsultation: () => void
}

export const ContractorsPage: React.FC<ContractorsPageProps> = ({ onOpenConsultation }) => {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [installerLicense, setInstallerLicense] = useState('')
  const [primaryContact, setPrimaryContact] = useState('')
  const [phone, setPhone] = useState('')
  const [townsCovered, setTownsCovered] = useState('')

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPartnerSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      
      {/* ====================================================================
          TOP HERO BANNER (Pacific Crest Reference Style)
          ==================================================================== */}
      <section className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center items-center overflow-hidden pt-20 sm:pt-24 pb-14 sm:pb-16 px-4 sm:px-8 text-white border-b border-border">
        {/* Background Project Image with High-Visibility Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.contractorSite}
            alt="Licensed Septic Contractor & Excavator On Site"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-5">

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            The Contractor's Engineering Partner
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          {/* <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            We know your machines can't sit idle waiting on delayed plans or unresponsive engineers. Robert Doucette, P.E. provides rapid test pit scheduling, buildable CAD drawings, and immediate construction sign-offs.
          </p> */}

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-sm bg-primary text-white font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md cursor-pointer"
            >
              <HardHat className="w-3.5 h-3.5" />
              <span>Book Priority Perc Test</span>
            </button>
            <a
              href="tel:9783694200"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-sm border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white/15 text-xs font-semibold tracking-wider uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>Direct Line: (978) 369-4200</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Contractors Choose Doucette Engineering */}
      <section className="py-12 sm:py-16 bg-white border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="badge-pill mx-auto">Field-First Engineering</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground tracking-tight">
              Engineered for the Field, Not Just the Drawing Board
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              We design septic systems that respect excavator workflow, existing grade constraints, and budget realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'On-Time Perc Attendance',
                desc: 'We never keep your backhoe operator standing around burning fuel. Robert Doucette, P.E. arrives promptly and coordinates directly with the local town agent.'
              },
              {
                icon: FileCheck2,
                title: '48-Hour Plan Revisions',
                desc: 'Hit unexpected ledge or groundwater in the field? We issue immediate PE field sketches and Board of Health modification filings within 48 hours.'
              },
              {
                icon: ShieldCheck,
                title: 'Rapid As-Built Sign-Off',
                desc: 'Same-day or next-day site visits for elevation shoots and stone coverage inspections so your Certificate of Compliance (COC) is never held up.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="card-modern rounded-sm p-6 space-y-3 border border-slate-200">
                  <div className="w-10 h-10 rounded-sm bg-primary-light text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* Contractor Partner Directory & Fast-Track Registration */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="badge-pill">Partner Network</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
                Join Our Massachusetts Preferred Installer Network
              </h2>
              <div className="w-16 h-0.5 bg-primary" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                We frequently refer homeowners seeking certified Title 5 installers, machine excavators, and repair specialists in Acton, Concord, Sudbury, Carlisle, and surrounding towns.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct homeowner bid referrals across Middlesex &amp; Worcester counties</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Free PDF and CAD drawing exports for your machine operators</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct PE cell phone access for urgent field consultation</span>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-foreground block">Robert Doucette, P.E. Direct Cell:</span>
                  <a href="tel:9783694200" className="text-primary font-bold hover:underline">
                    (978) 369-4200 ext 12
                  </a>
                </div>
              </div>

              {/* Machinery & Field Excavation Showcase */}
              <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-sm aspect-[16/9] group">
                <img
                  src={ASSETS.excavatorCompact}
                  alt="Compact Mini Excavator on Residential Site"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <div className="text-white text-xs">
                    <span className="font-bold block">Deep Hole &amp; Test Pit Equipment Support</span>
                    <span className="text-[11px] text-slate-300">Fast machine mobilization with Massachusetts licensed operators</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-6">
              <div className="card-modern rounded-sm bg-white p-6 sm:p-8 border-2 border-slate-200 shadow-lg space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-base text-foreground">
                    Contractor &amp; Installer Registration
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Connect directly with Doucette Engineering for bidding and priority perc testing.
                  </p>
                </div>

                {partnerSubmitted ? (
                  <div className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-base text-foreground">Registration Submitted!</h4>
                    <p className="text-xs text-muted-foreground">
                      Thank you, <strong>{primaryContact || companyName}</strong>. Robert Doucette, P.E. will verify your installer license and reach out to welcome you to our trade network.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Company Name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Northeast Excavation Corp"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Primary Contact:</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={primaryContact}
                          onChange={(e) => setPrimaryContact(e.target.value)}
                          className="w-full p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Installer License #:</label>
                        <input
                          type="text"
                          placeholder="Town / State License"
                          value={installerLicense}
                          onChange={(e) => setInstallerLicense(e.target.value)}
                          className="w-full p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Direct Phone:</label>
                        <input
                          type="tel"
                          required
                          placeholder="(978) 555-0199"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Primary Towns Served:</label>
                        <input
                          type="text"
                          placeholder="e.g. Acton, Concord, Westford"
                          value={townsCovered}
                          onChange={(e) => setTownsCovered(e.target.value)}
                          className="w-full p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button type="submit" className="btn-primary w-full py-2.5 text-xs justify-center shadow-md rounded-sm tracking-wider uppercase font-semibold">
                        <span>Register Contractor Account</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
