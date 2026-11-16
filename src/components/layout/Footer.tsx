import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  FileCheck2, 
  Award,
  ArrowUpRight,
  HardHat
} from 'lucide-react'

export const Footer: React.FC = () => {
  const towns = [
    'Acton', 'Concord', 'Sudbury', 'Carlisle', 'Littleton', 
    'Westford', 'Boxborough', 'Harvard', 'Groton', 'Chelmsford', 
    'Maynard', 'Stow', 'Bolton', 'Ayer', 'Wayland', 'Lincoln'
  ]

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Credentials Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                <Compass className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  DOUCETTE <span className="text-primary font-black">ENGINEERING</span>
                </span>
                <span className="text-xs font-medium text-slate-400 mt-1">
                  Civil & Environmental Engineering
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing premier civil engineering, Title 5 residential septic design, deep hole soil percolation testing, and municipal Board of Health approvals across Greater Boston, Middlesex, and Worcester counties.
            </p>

            {/* Engineer PE Badge */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Robert Doucette, P.E.</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Commonwealth of Massachusetts Registered Professional Civil Engineer <strong className="text-slate-200">#41908</strong> • Certified Title 5 Soil Evaluator <strong className="text-slate-200">#1102</strong>
              </p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Engineering Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/services#soil-perc" className="hover:text-primary transition-colors flex items-center gap-1">
                  Soil Perc & Deep Hole Testing
                </Link>
              </li>
              <li>
                <Link to="/services#septic-design" className="hover:text-primary transition-colors flex items-center gap-1">
                  Title 5 Septic System Design
                </Link>
              </li>
              <li>
                <Link to="/services#site-dev" className="hover:text-primary transition-colors flex items-center gap-1">
                  Site Grading & Civil Engineering
                </Link>
              </li>
              <li>
                <Link to="/services#septic-repair" className="hover:text-primary transition-colors flex items-center gap-1">
                  Septic Repair & Component Engineering
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="hover:text-primary transition-colors flex items-center gap-1">
                  Commercial Wastewater Systems
                </Link>
              </li>
              <li>
                <Link to="/services#permitting" className="hover:text-primary transition-colors flex items-center gap-1">
                  Board of Health Permitting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Tools & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Online Tools & Hubs</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/tracker" className="hover:text-primary transition-colors flex items-center justify-between">
                  <span>Permit Status Tracker</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/20 text-primary">Live</span>
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-primary transition-colors flex items-center gap-1">
                  Title 5 Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/contractors" className="hover:text-primary transition-colors flex items-center gap-1">
                  Contractor & Builder Portal
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-primary transition-colors flex items-center gap-1">
                  Massachusetts Title 5 Guide
                </Link>
              </li>
              <li>
                <Link to="/guides#faqs" className="hover:text-primary transition-colors flex items-center gap-1">
                  Board of Health FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors flex items-center gap-1">
                  About Robert Doucette, P.E.
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <a 
                href="tel:9783694200" 
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-500">Phone (Direct / Text)</span>
                  <span className="font-bold text-white">(978) 369-4200</span>
                </div>
              </a>

              <a 
                href="mailto:robert@doucetteengineering.com" 
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-500">Official Email</span>
                  <span className="font-medium text-slate-200">robert@doucetteengineering.com</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-200 font-semibold block">Office Hours</span>
                  Mon – Fri: 7:30 AM – 5:30 PM<br/>
                  Weekend Perc Testing by Appointment
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Coverage Areas Row */}
        <div className="py-6 border-b border-slate-900">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Active Municipalities & Health Departments Served:
            </span>
            <span className="text-[11px] text-slate-500">Middlesex, Worcester, Norfolk & Essex Counties</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {towns.map((town) => (
              <span 
                key={town} 
                className="px-2.5 py-1 rounded-md text-[11px] bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:border-slate-700 hover:text-slate-200 transition-colors"
              >
                {town}, MA
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Doucette Engineering, LLC. All rights reserved. Certified Massachusetts Civil Engineers.</p>
          <div className="flex items-center gap-4">
            <Link to="/guides" className="hover:text-slate-300 transition-colors">Title 5 Regulations</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-slate-300 transition-colors">PE Stamp Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Privacy & Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
