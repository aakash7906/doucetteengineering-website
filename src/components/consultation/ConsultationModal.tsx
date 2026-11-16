import React, { useState } from 'react'
import { 
  X, 
  CheckCircle2, 
  Send, 
  Calendar, 
  FileText, 
  Phone, 
  MapPin, 
  User, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/button'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'septic-design'
}) => {
  const [role, setRole] = useState<'homeowner' | 'contractor' | 'realtor'>('homeowner')
  const [service, setService] = useState(initialService)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [town, setTown] = useState('Acton')
  const [notes, setNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Fire confetti celebratory effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        })
      } catch {
        // safe fallback
      }
    }, 600)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setName('')
    setEmail('')
    setPhone('')
    setAddress('')
    setNotes('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-border bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-foreground">
                Request Engineering Consultation
              </h3>
              <p className="text-[11px] text-muted-foreground">
                Direct review by Robert Doucette, P.E. • No obligation estimate
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-primary-light text-primary rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-foreground">Request Received!</h4>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you, <strong>{name || 'Valued Client'}</strong>. Robert Doucette, P.E. will review your property records for <strong>{town || 'Middlesex County'}, MA</strong> and contact you within 2 to 4 business hours.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Selected Service:</span>
                  <span className="font-bold text-foreground capitalize">{service.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Estimated Response:</span>
                  <span className="font-semibold text-primary">Same Business Day</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Direct Inquiry Reference:</span>
                  <span className="font-mono font-bold text-foreground">DE-REQ-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <Button onClick={handleReset} className="btn-primary">
                  Done & Close
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Role Toggle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  I am a:
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
                      className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
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

              {/* Service Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Requested Engineering Service:
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="soil-perc-test">Soil Perc & Deep Hole Testing ($1,250)</option>
                  <option value="septic-design">Title 5 Residential Septic Design ($2,400+)</option>
                  <option value="septic-repair">Component Repair / D-Box Engineering ($950+)</option>
                  <option value="site-development">Site Development & Grading ($3,200+)</option>
                  <option value="commercial-septic">Commercial / Multi-Family Wastewater</option>
                  <option value="urgent-closing">Emergency Perc Test for Real Estate Closing</option>
                </select>
              </div>

              {/* Property Address & Town */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 142 Highland Road"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
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
                    className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
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
                    className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
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
                    className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Details / Target Closing Date:
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about the property (e.g. bedroom count, failed inspection, urgent closing date, tight lot, etc.)."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-lg border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 justify-center text-sm shadow-md"
                >
                  {isSubmitting ? (
                    <span>Submitting to Robert Doucette, P.E....</span>
                  ) : (
                    <>
                      <span>Submit for Free Property Review</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
                <p className="text-[11px] text-center text-muted-foreground mt-2">
                  🔒 We never share your contact information. Direct review by Massachusetts Registered PE.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  )
}
