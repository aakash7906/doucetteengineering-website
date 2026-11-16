import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ConsultationModal } from '@/components/consultation/ConsultationModal'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { TrackerPage } from '@/pages/TrackerPage'
import { CalculatorPage } from '@/pages/CalculatorPage'
import { ContractorsPage } from '@/pages/ContractorsPage'
import { GuidesPage } from '@/pages/GuidesPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'

// Automatically scrolls window to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])

  return null
}

const AppContent: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true)
  }

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary-light selection:text-primary-hover">
      <ScrollToTop />
      
      {/* Top Sticky Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Multi-Page Route Content */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/services" 
            element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/tracker" 
            element={<TrackerPage />} 
          />
          <Route 
            path="/calculator" 
            element={<CalculatorPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/contractors" 
            element={<ContractorsPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/guides" 
            element={<GuidesPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenConsultation={handleOpenConsultation} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Comprehensive Engineering Footer */}
      <Footer />

      {/* Quick Consultation & Estimate Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  )
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
