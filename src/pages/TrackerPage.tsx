import React, { useState } from 'react'
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  MapPin, 
  ShieldCheck, 
  CalendarCheck2, 
  Send, 
  ArrowRight, 
  Building2,
  FileCheck,
  User,
  Phone,
  Mail
} from 'lucide-react'
import { INITIAL_PROJECTS } from '@/data/mockProjects'
import type { ProjectItem } from '@/types'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

export const TrackerPage: React.FC = () => {
  const [searchInput, setSearchInput] = useState('')
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(INITIAL_PROJECTS[0])
  const [commentInput, setCommentInput] = useState('')
  const [commentSuccess, setCommentSuccess] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchInput.trim().toUpperCase()
    if (!query) return

    const match = INITIAL_PROJECTS.find(p => 
      p.trackingNumber.toUpperCase().includes(query) ||
      p.propertyAddress.toUpperCase().includes(query) ||
      p.city.toUpperCase().includes(query)
    )

    if (match) {
      setSelectedProject(match)
    } else {
      alert(`No permit record found for "${searchInput}". Try one of the demo tracking numbers listed below.`)
    }
  }

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentInput.trim()) return
    setCommentSuccess(true)
    setTimeout(() => {
      setCommentInput('')
      setCommentSuccess(false)
    }, 4000)
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
            src={ASSETS.cadTabletInspection}
            alt="Doucette Engineering CAD Inspection and Tracking"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-[0.2em] uppercase text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Client &amp; Contractor Portal</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            Live Permit &amp; Engineering Tracker
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            Track your deep hole soil testing logs, CAD site design progress, and municipal Board of Health hearing schedules in real time.
          </p>

          {/* Search Bar Input */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto w-full flex flex-col sm:flex-row gap-2 pt-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Tracking # (e.g. DE-2026-8841) or Street Address"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-sm border border-white/20 bg-black/40 backdrop-blur-md text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary py-3 px-6 text-xs tracking-wider uppercase font-semibold shrink-0 rounded-sm">
              Search Permit
            </button>
          </form>

          {/* Quick Demo Pickers */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300 pt-1">
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Demo Tracking Numbers:</span>
            {INITIAL_PROJECTS.slice(0, 3).map((proj) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedProject(proj)}
                className={`px-2.5 py-1 rounded-sm font-mono text-[11px] transition-all cursor-pointer ${
                  selectedProject.id === proj.id
                    ? 'bg-primary text-white font-bold'
                    : 'bg-black/40 backdrop-blur-md border border-white/15 text-slate-200 hover:bg-white/15'
                }`}
              >
                {proj.trackingNumber} ({proj.city})
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Tracker Detail Display */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Project Details & Milestones */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Project Main Card */}
              <div className="card-modern rounded-sm bg-white p-6 sm:p-8 space-y-6 shadow-sm border border-slate-200">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono font-black text-lg text-primary">
                        {selectedProject.trackingNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-sm text-xs font-bold bg-primary-light text-primary uppercase border border-primary/20">
                        {selectedProject.currentStatusStage.replace('_', ' ')}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      {selectedProject.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{selectedProject.propertyAddress}, {selectedProject.city}, {selectedProject.state} {selectedProject.zipCode}</span>
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block font-bold">Overall Progress</span>
                    <span className="text-3xl font-black text-primary">{selectedProject.percentComplete}%</span>
                    <span className="text-[11px] text-muted-foreground block mt-0.5">Target: {selectedProject.targetCompletionDate}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-2.5 rounded-full transition-all duration-700" 
                      style={{ width: `${selectedProject.percentComplete}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground mt-1.5 font-medium">
                    <span>Soil Testing</span>
                    <span>CAD Design</span>
                    <span>Town Board of Health</span>
                    <span>Approved &amp; Stamped</span>
                  </div>
                </div>

                {/* Milestone Stepper */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                    Milestones &amp; Field Inspection Logs
                  </h3>

                  <div className="space-y-4">
                    {selectedProject.milestones.map((m, i) => (
                      <div 
                        key={m.id || i}
                        className={`p-4 rounded-sm border transition-all ${
                          m.status === 'completed'
                            ? 'bg-slate-50/70 border-slate-200'
                            : m.status === 'in_progress'
                            ? 'bg-amber-50/50 border-amber-300 ring-1 ring-amber-300/50'
                            : 'bg-white border-slate-100 opacity-60'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              {m.status === 'completed' ? (
                                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow-xs">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                              ) : m.status === 'in_progress' ? (
                                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center animate-pulse">
                                  <Clock className="w-4 h-4" />
                                </div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center font-bold text-xs">
                                  {i + 1}
                                </div>
                              )}
                            </div>

                            <div>
                              <h4 className={`text-sm font-bold ${m.status === 'completed' ? 'text-slate-900' : m.status === 'in_progress' ? 'text-amber-800' : 'text-slate-500'}`}>
                                {m.title}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {m.description}
                              </p>

                              {m.engineerNotes && (
                                <div className="mt-2 p-2.5 rounded-sm bg-white border border-slate-200/80 text-xs text-slate-700">
                                  <span className="font-bold text-slate-900">Engineer Notes ({m.inspector || 'R. Doucette, P.E.'}): </span>
                                  <span>{m.engineerNotes}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <span className="text-[11px] font-mono font-semibold text-slate-500 shrink-0">
                            {m.completedDate || m.estimatedDate || 'Scheduled'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stamped Documents List */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Available Stamped Documents &amp; Submittals
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-sm border border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-primary" />
                        <div>
                          <span className="font-bold text-slate-900 block">Form 11 / 12 Soil Evaluation Log</span>
                          <span className="text-[10px] text-slate-500">Witnessed by Town Agent • 1.4 MB PDF</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => alert('Downloading official Form 11 / Form 12 Soil Log PDF (sample).')}
                        className="p-1.5 rounded-sm text-primary hover:bg-primary-light transition-colors"
                        title="Download Document"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-3.5 rounded-sm border border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <FileCheck className="w-4 h-4 text-primary" />
                        <div>
                          <span className="font-bold text-slate-900 block">PE Stamped CAD Site Plan (Sheet 1)</span>
                          <span className="text-[10px] text-slate-500">Board of Health Submittal • 3.8 MB PDF</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => alert('Downloading PE-Stamped CAD Site Plan Drawing (sample).')}
                        className="p-1.5 rounded-sm text-primary hover:bg-primary-light transition-colors"
                        title="Download Document"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right 4 Cols: Assigned PE, Board of Health, Direct Messaging */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Assigned Engineer Card */}
              <div className="card-modern rounded-sm p-5 bg-white border border-slate-200 space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                  Lead Engineer
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-primary text-white flex items-center justify-center font-black text-lg shadow-sm">
                    RD
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">
                      {selectedProject.assignedEngineer.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground">
                      {selectedProject.assignedEngineer.title}
                    </p>
                    <span className="inline-block mt-0.5 px-2 py-0.2 rounded-sm bg-slate-100 text-[10px] font-mono font-bold text-slate-700">
                      {selectedProject.assignedEngineer.licenseNumber}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs pt-2 border-t border-slate-100">
                  <a 
                    href={`tel:${selectedProject.assignedEngineer.phone.replace(/[^0-9]/g, '')}`} 
                    className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <span>{selectedProject.assignedEngineer.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${selectedProject.assignedEngineer.email}`} 
                    className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    <span>{selectedProject.assignedEngineer.email}</span>
                  </a>
                </div>
              </div>

              {/* Board of Health Permitting Card */}
              <div className="card-modern rounded-sm p-5 bg-white border border-slate-200 space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                  Municipal Board of Health
                </span>

                <div className="p-3 rounded-sm bg-slate-50 border border-slate-100 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Jurisdiction:</span>
                    <strong className="text-slate-900">{selectedProject.boardOfHealth.townName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Town Agent:</span>
                    <strong className="text-slate-900">{selectedProject.boardOfHealth.agentName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Hearing Date:</span>
                    <strong className="text-primary font-bold">{selectedProject.boardOfHealth.hearingDate || 'Pending'}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="px-2 py-0.5 rounded-sm text-[10px] font-bold bg-amber-100 text-amber-800">
                      {selectedProject.boardOfHealth.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inquiry to Engineer Form */}
              <div className="card-modern rounded-sm p-5 bg-white border border-slate-200 space-y-3">
                <h4 className="font-bold text-xs sm:text-sm text-foreground">
                  Ask Engineer About This Project
                </h4>
                <p className="text-[11px] text-muted-foreground">
                  Send a priority message directly to Robert Doucette, P.E. regarding this permit.
                </p>

                {commentSuccess ? (
                  <div className="p-3 rounded-sm bg-primary-light text-primary text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inquiry sent to Robert Doucette, P.E.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSendComment} className="space-y-2">
                    <textarea
                      rows={3}
                      required
                      placeholder="Type your question or request..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-sm border border-input bg-white text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                    />
                    <button type="submit" className="btn-primary w-full py-2 text-xs justify-center rounded-sm tracking-wider uppercase font-semibold">
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
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
