import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ArrowRight, 
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

export const ContactPage: React.FC = () => {
  const location = useLocation()
  const [role, setRole] = useState<'homeowner' | 'contractor' | 'realtor'>('homeowner')
  const [service, setService] = useState('septic-design')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [propertyAddress, setPropertyAddress] = useState('')
  const [town, setTown] = useState('Acton')
  const [notes, setNotes] = useState('')
  const [isEmergency, setIsEmergency] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const roleParam = params.get('role')
    if (roleParam === 'contractor' || roleParam === 'homeowner' || roleParam === 'realtor') {
      setRole(roleParam as any)
    }
  }, [location.search])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        })
      } catch {
        // safe fallback
      }
    }, 600)
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
            src={ASSETS.heroDrone}
            alt="Doucette Engineering Contact and Consultation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-[0.2em] uppercase text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Direct Review by Robert Doucette, P.E.</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            Request an Engineering Consultation
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            Have a question about a failed Title 5 inspection, percolation test schedule, or building permit? Speak directly with Robert Doucette, P.E.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9783694200"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-sm bg-primary text-white font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Direct: (978) 369-4200</span>
            </a>
            <a
              href="mailto:robert@doucetteengineering.com"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-sm border border-white/30 bg-black/30 backdrop-blur-md text-white hover:bg-white/15 text-xs font-semibold tracking-wider uppercase"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>robert@doucetteengineering.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 Cols: Direct Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="card-modern rounded-sm bg-white p-6 sm:p-7 space-y-6 border border-slate-200">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Fast response guaranteed. All inquiries reviewed directly by licensed civil engineer.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <a 
                    href="tel:9783694200"
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-sm bg-primary text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground block font-bold">Direct Engineer Phone / Text</span>
                      <span className="font-extrabold text-foreground group-hover:text-primary text-base">(978) 369-4200</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:robert@doucetteengineering.com"
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-sm bg-primary text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground block font-bold">Official Email Submittals</span>
                      <span className="font-semibold text-foreground group-hover:text-primary break-all">robert@doucetteengineering.com</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-sm bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-sm bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground block font-bold">Office &amp; Field Hours</span>
                      <span className="font-semibold text-foreground">Monday – Friday: 7:30 AM – 5:30 PM</span>
                      <p className="text-[11px] text-muted-foreground mt-0.5">Emergency perc testing &amp; weekend hearings by request.</p>
                    </div>
                  </div>
                </div>

                {/* PE License Details Box */}
                <div className="p-4 rounded-sm bg-primary-light border border-primary/20 text-xs space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-primary">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Registered Professional Engineer</span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-normal">
                    Robert Doucette, P.E. • Massachusetts Civil PE #41908 • Title 5 Soil Evaluator #1102
                  </p>
                </div>

              </div>

            </div>

            {/* Right 7 Cols: Detailed Consultation Form */}
            <div className="lg:col-span-7">
              <div className="card-modern rounded-sm bg-white p-6 sm:p-8 border-2 border-slate-200 shadow-lg space-y-6">
                
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground tracking-tight">
                    Request a Free Property Review &amp; Stamped Quote
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Provide your property address and Robert Doucette, P.E. will pull town septic files and GIS maps before calling you back.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-extrabold text-foreground">
                      Inquiry Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                      Thank you, <strong>{name}</strong>. Robert Doucette, P.E. has received your property details for <strong>{propertyAddress}, {town}, MA</strong> and will contact you directly within 2 to 4 business hours.
                    </p>

                    <div className="pt-2">
                      <Button
                        onClick={() => {
                          setSubmitted(false)
                          setName('')
                          setEmail('')
                          setPhone('')
                          setPropertyAddress('')
                          setNotes('')
                        }}
                        className="btn-primary rounded-sm tracking-wider uppercase font-semibold"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    
                    {/* Role selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        I am contacting as a:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'homeowner', label: 'Homeowner' },
                          { id: 'contractor', label: 'Builder / Installer' },
                          { id: 'realtor', label: 'Real Estate Agent' }
                        ].map((r) => (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => setRole(r.id as any)}
                            className={`py-2 px-3 rounded-sm text-xs font-semibold tracking-wider uppercase border transition-all text-center cursor-pointer ${
                              role === r.id
                                ? 'bg-primary text-white border-primary shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {r.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Service selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Engineering Service Needed:
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option value="septic-design">Title 5 / Residential Septic Design ($2,400+)</option>
                        <option value="soil-perc-test">Soil Perc &amp; Deep Hole Testing ($1,250)</option>
                        <option value="septic-repair">Component Repair / D-Box Engineering ($950+)</option>
                        <option value="site-development">Site Development &amp; Civil Engineering ($3,200+)</option>
                        <option value="commercial-septic">Commercial Wastewater &amp; Nitrogen Reduction</option>
                      </select>
                    </div>

                    {/* Property Address & Town */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Property Street Address:
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 142 Highland Road"
                          value={propertyAddress}
                          onChange={(e) => setPropertyAddress(e.target.value)}
                          className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Massachusetts Town:
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acton, Concord, Sudbury"
                          value={town}
                          onChange={(e) => setTown(e.target.value)}
                          className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Full Name:
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address:
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(978) 555-0100"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Project Details / Notes:
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please include bedroom count, target closing date, or description of failed inspection components..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full text-xs sm:text-sm p-2.5 rounded-sm border border-input text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                      />
                    </div>

                    {/* Emergency Checkbox */}
                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="emergency"
                        checked={isEmergency}
                        onChange={(e) => setIsEmergency(e.target.checked)}
                        className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300"
                      />
                      <label htmlFor="emergency" className="text-xs text-slate-700 font-semibold cursor-pointer">
                        Urgent Real Estate Closing (need perc test or repair letter within 3-5 days)
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-3.5 text-xs sm:text-sm tracking-wider uppercase font-semibold justify-center shadow-md rounded-sm"
                      >
                        {loading ? (
                          <span>Submitting to Robert Doucette, P.E....</span>
                        ) : (
                          <>
                            <span>Submit Request for Free Property Review</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                      <p className="text-[11px] text-center text-muted-foreground mt-2">
                        🔒 Confidential. Direct review by Massachusetts Registered Professional Engineer.
                      </p>
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
