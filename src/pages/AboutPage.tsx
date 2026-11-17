import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Building2, 
  FileCheck2, 
  Compass, 
  Layers,
  GraduationCap
} from 'lucide-react'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

interface AboutPageProps {
  onOpenConsultation: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const credentials = [
    {
      title: 'Registered Professional Engineer (P.E.)',
      issuer: 'Commonwealth of Massachusetts Board of Registration of Professional Engineers',
      number: 'Civil License #41908',
      desc: 'Authorized to engineer, calculate, stamp, and certify civil and environmental site infrastructure throughout Massachusetts.'
    },
    {
      title: 'Certified Title 5 Soil Evaluator',
      issuer: 'Massachusetts Department of Environmental Protection (MassDEP)',
      number: 'Certification #1102',
      desc: 'Certified to perform deep hole test pit evaluations, soil horizon classifications, and witnessed percolation testing.'
    },
    {
      title: 'Title 5 System Inspector',
      issuer: 'Massachusetts Department of Environmental Protection (MassDEP)',
      number: 'Active Certification',
      desc: 'Qualified to inspect existing subsurface disposal systems for real estate transactions and municipal compliance.'
    }
  ]

  const towns = [
    'Acton', 'Concord', 'Sudbury', 'Carlisle', 'Littleton', 
    'Westford', 'Boxborough', 'Harvard', 'Groton', 'Chelmsford', 
    'Maynard', 'Stow', 'Bolton', 'Ayer', 'Wayland', 'Lincoln', 
    'Bedford', 'Marlborough', 'Hopkinton', 'Hudson'
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      
      {/* ====================================================================
          TOP HERO BANNER (Pacific Crest Reference Style)
          ==================================================================== */}
      <section className="relative min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center items-center overflow-hidden pt-20 sm:pt-24 pb-14 sm:pb-16 px-4 sm:px-8 text-white border-b border-border">
        {/* Background Project Image with High-Visibility Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.engineerFieldInspection}
            alt="Robert Doucette, P.E. Field Inspection and Civil Engineering"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-5">
          

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            Engineering Excellence Rooted in Local Communities
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            Doucette Engineering was founded on a simple principle: homeowners and builders deserve direct access to a licensed Professional Engineer who personally visits their land and stands behind every plan.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-sm bg-primary text-white font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Consult With Robert Doucette, P.E.</span>
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

      {/* Main Profile Showcase */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Engineer Image & Stamp Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-sm overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
                <img
                  src={ASSETS.engineerPortrait}
                  alt="Robert Doucette, P.E. - Massachusetts Civil Engineer"
                  className="w-full h-[440px] object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 inset-x-4 p-4 rounded-sm bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                  <div className="font-extrabold text-base flex items-center justify-between">
                    <span>Robert Doucette, P.E.</span>
                    <span className="px-2 py-0.5 rounded-sm bg-primary text-white text-[10px] font-black">
                      MA PE #41908
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Principal Civil &amp; Environmental Engineer • Title 5 Soil Evaluator #1102
                  </p>
                </div>
              </div>
            </div>

            {/* Engineer Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-pill">The Founder</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
                Meet Robert Doucette, P.E.
              </h2>
              <div className="w-16 h-0.5 bg-primary" />
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                With over two decades of specialized civil engineering experience across Eastern and Central Massachusetts, <strong>Robert Doucette, P.E.</strong> has successfully permitted and inspected over 1,200 septic and site development projects.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Prior to founding Doucette Engineering, Robert managed extensive environmental remediation and municipal wastewater infrastructure initiatives. Recognizing that homeowners facing failed Title 5 inspections were often overwhelmed by bureaucratic delays and predatory contractor pricing, he built Doucette Engineering to offer direct, transparent, and cost-effective engineering solutions.
              </p>

              <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-900 block text-sm">
                  Our Engineering Philosophy:
                </span>
                <p className="text-slate-600 leading-relaxed italic">
                  "We never specify expensive proprietary systems when a clean, reliable gravity or distribution box repair will satisfy code. Our goal is to protect public health and the environment while respecting the property owner's wallet."
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="btn-primary py-3 px-6 text-xs tracking-wider uppercase font-semibold shadow-md rounded-sm"
                >
                  <span>Consult Directly with Robert</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:9783694200"
                  className="btn-outline py-3 px-5 text-xs tracking-wider uppercase font-semibold text-slate-700 rounded-sm"
                >
                  Call (978) 369-4200
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Official Licenses & Certifications */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="badge-pill mx-auto">Verified Licensure</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              State Registrations &amp; Professional Credentials
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              Fully insured with Professional Errors &amp; Omissions Liability coverage for civil engineering practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((cred, idx) => (
              <div key={idx} className="card-modern rounded-sm bg-white p-6 space-y-3 border border-slate-200">
                <div className="w-10 h-10 rounded-sm bg-primary-light text-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{cred.title}</h3>
                <span className="font-mono text-xs font-bold text-primary block">{cred.number}</span>
                <p className="text-[11px] text-slate-500 font-medium">{cred.issuer}</p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {cred.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Municipalities Served */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="badge-pill mx-auto">Regional Coverage</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground tracking-tight">
              Active Towns &amp; Boards of Health Served
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
            <p className="text-sm text-muted-foreground pt-1">
              We maintain active working familiarity with the specific local health regulations and agents in each of these Massachusetts municipalities:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {towns.map((town) => (
              <span
                key={town}
                className="px-3.5 py-1.5 rounded-sm text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {town}, MA
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-muted-foreground">
              Don't see your town? We serve all municipalities across Middlesex, Worcester, Norfolk, and Essex counties.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
