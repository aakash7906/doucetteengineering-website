import React, { useState } from 'react'
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Download, 
  FileSpreadsheet, 
  Building2, 
  Home, 
  Waves, 
  ShieldCheck,
  RotateCcw,
  Phone,
  FileText
} from 'lucide-react'
import { ASSETS } from '@/data/assets'
import { Button } from '@/components/ui/button'

interface CalculatorPageProps {
  onOpenConsultation: () => void
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenConsultation }) => {
  const [bedrooms, setBedrooms] = useState<number>(4)
  const [soilType, setSoilType] = useState<'standard' | 'high_groundwater' | 'tight_clay' | 'ledge'>('standard')
  const [systemType, setSystemType] = useState<'gravity' | 'pump' | 'alternative'>('gravity')
  const [lotDifficulty, setLotDifficulty] = useState<'easy' | 'moderate' | 'difficult'>('moderate')
  const [needsPercTest, setNeedsPercTest] = useState<boolean>(true)

  // Title 5 Calculation Logic
  const flowGPD = bedrooms * 110 // Massachusetts Title 5 standard: 110 gallons per day per bedroom

  // Engineering Base
  let engineeringCost = 2800
  if (needsPercTest) engineeringCost += 1250
  if (soilType === 'high_groundwater' || soilType === 'ledge') engineeringCost += 400
  if (systemType === 'alternative') engineeringCost += 600

  // Construction Estimate Low & High
  let constructionMin = 18000 + (bedrooms - 3) * 2200
  let constructionMax = 23000 + (bedrooms - 3) * 2800

  if (soilType === 'high_groundwater') {
    constructionMin += 3500 // Requires raised mounded sand bed
    constructionMax += 5500
  } else if (soilType === 'ledge') {
    constructionMin += 4500 // Rock excavation / hoe-ramming
    constructionMax += 8000
  } else if (soilType === 'tight_clay') {
    constructionMin += 2500
    constructionMax += 4000
  }

  if (systemType === 'pump') {
    constructionMin += 3000 // Concrete pump chamber + effluent pump + floats + electrical conduit
    constructionMax += 4500
  } else if (systemType === 'alternative') {
    constructionMin += 5000 // Advanced treatment modules
    constructionMax += 8500
  }

  if (lotDifficulty === 'difficult') {
    constructionMin += 3000 // Tight access, retaining walls, heavy landscaping
    constructionMax += 5000
  }

  const totalMin = engineeringCost + constructionMin
  const totalMax = engineeringCost + constructionMax

  // Massachusetts Tax Credit (Credit 54): 40% of eligible expenses, capped at $6,000
  const taxCredit = Math.min(6000, Math.round(totalMin * 0.40))
  const netMin = totalMin - taxCredit
  const netMax = totalMax - taxCredit

  const handleReset = () => {
    setBedrooms(4)
    setSoilType('standard')
    setSystemType('gravity')
    setLotDifficulty('moderate')
    setNeedsPercTest(true)
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
            src={ASSETS.suburbanProperty}
            alt="Doucette Engineering Title 5 Cost Calculation Site"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-5">
          

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white tracking-tight drop-shadow-md">
            Title 5 Septic Cost Estimator
          </h1>

          <div className="w-16 h-0.5 bg-primary mx-auto" />

          

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 h-10 px-5 rounded-sm bg-primary text-white font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all shadow-md cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Firm Engineering Quote</span>
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

      {/* Main Calculator Interactive Grid */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Calculator Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="card-modern rounded-sm bg-white p-6 sm:p-8 space-y-6 border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Property Parameters &amp; Site Conditions
                  </h2>
                  <button 
                    onClick={handleReset}
                    className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Defaults
                  </button>
                </div>

                {/* 1. Bedrooms */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                    <label>Bedroom Count (Determines Title 5 Daily Flow):</label>
                    <span className="text-primary font-mono text-sm">{bedrooms} Bedrooms ({flowGPD} Gallons/Day)</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`py-2 sm:py-2.5 px-1 rounded-sm font-bold text-[11px] sm:text-sm border transition-all cursor-pointer ${
                          bedrooms === num
                            ? 'bg-primary text-white border-primary shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {num} {num === 6 ? '6+' : ''} Bed
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Perc Test Requirement */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700 block">
                    Do you need official Soil Perc &amp; Deep Hole Testing?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setNeedsPercTest(true)}
                      className={`p-3 rounded-sm text-left border text-xs transition-all cursor-pointer ${
                        needsPercTest
                          ? 'border-primary bg-primary-light/50 font-bold text-slate-900 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block font-bold">Yes, Need Perc Testing</span>
                      <span className="text-[11px] text-slate-500 font-normal">Includes backhoe test pit &amp; Form 11/12</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setNeedsPercTest(false)}
                      className={`p-3 rounded-sm text-left border text-xs transition-all cursor-pointer ${
                        !needsPercTest
                          ? 'border-primary bg-primary-light/50 font-bold text-slate-900 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="block font-bold">No, Already Passed</span>
                      <span className="text-[11px] text-slate-500 font-normal">Valid Form 11 on file with Town BOH</span>
                    </button>
                  </div>
                </div>

                {/* 3. Soil & Water Table Conditions */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700 block">
                    Soil Texture &amp; Seasonal High Groundwater:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'standard', label: 'Standard Sandy Gravel', desc: 'Good drainage, deep water table (>4ft below leaching)' },
                      { id: 'high_groundwater', label: 'High Seasonal Groundwater', desc: 'Water table within 2-4ft of surface; requires raised mound' },
                      { id: 'tight_clay', label: 'Tight Glacial Till / Clay', desc: 'Slow percolation rate (>30 min/inch); requires larger leaching bed' },
                      { id: 'ledge', label: 'Ledge / Shallow Bedrock', desc: 'Rock ledge within 4ft; requires rock breaking or fill' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSoilType(item.id as any)}
                        className={`p-3 rounded-sm text-left border text-xs transition-all cursor-pointer ${
                          soilType === item.id
                            ? 'border-primary bg-primary-light/50 font-bold text-slate-900'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="block font-bold text-slate-900">{item.label}</span>
                        <span className="text-[11px] text-slate-500 font-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. System Hydraulic Delivery */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700 block">
                    System Delivery Type:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'gravity', label: 'Gravity Flow', desc: 'Lowest cost, no pumps' },
                      { id: 'pump', label: 'Pressure Dosed', desc: 'Pump chamber required' },
                      { id: 'alternative', label: 'I/A Technology', desc: 'Presby / Fast / Nitrogen' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSystemType(item.id as any)}
                        className={`p-3 rounded-sm text-left border text-xs transition-all cursor-pointer ${
                          systemType === item.id
                            ? 'border-primary bg-primary-light/50 font-bold text-slate-900'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="block font-bold text-slate-900">{item.label}</span>
                        <span className="text-[11px] text-slate-500 font-normal">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Lot Accessibility */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="text-xs font-bold text-slate-700 block">
                    Site Accessibility &amp; Landscape Complexity:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'easy', label: 'Open Lawn' },
                      { id: 'moderate', label: 'Standard Yard' },
                      { id: 'difficult', label: 'Steep / Tight Access' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setLotDifficulty(item.id as any)}
                        className={`py-2 px-3 rounded-sm text-xs font-semibold border transition-all text-center cursor-pointer ${
                          lotDifficulty === item.id
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Right 5 Columns: Itemized Estimate Breakdown & Tax Credit */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              
              <div className="card-modern rounded-sm bg-white p-6 sm:p-7 border-2 border-slate-200 shadow-xl space-y-5">
                
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                    Estimated Project Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
                  </div>
                  <span className="text-xs text-muted-foreground block mt-0.5">
                    Total Turnkey Cost (Engineering + Construction)
                  </span>
                </div>

                {/* Itemized Line Items */}
                <div className="space-y-2.5 text-xs text-slate-700 pt-3 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Engineering &amp; Permitting (Doucette P.E.):</span>
                    <span className="font-bold font-mono text-slate-900">${engineeringCost.toLocaleString()}</span>
                  </div>
                  {needsPercTest && (
                    <div className="flex justify-between pl-3 text-[11px] text-slate-500">
                      <span>• Soil Perc Test &amp; Form 11/12</span>
                      <span className="font-mono">$1,250</span>
                    </div>
                  )}
                  <div className="flex justify-between pl-3 text-[11px] text-slate-500">
                    <span>• CAD Design &amp; BOH Hearing</span>
                    <span className="font-mono">${(engineeringCost - (needsPercTest ? 1250 : 0)).toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between pt-1">
                    <span className="text-slate-500">Estimated Contractor Construction:</span>
                    <span className="font-bold font-mono text-slate-900">
                      ${constructionMin.toLocaleString()} – ${constructionMax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pl-3 text-[11px] text-slate-500">
                    <span>• 1,500-Gal Concrete Tank &amp; D-Box</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between pl-3 text-[11px] text-slate-500">
                    <span>• Leaching Field / Title 5 Sand / Crushed Stone</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between pl-3 text-[11px] text-slate-500">
                    <span>• Machine Excavation &amp; Loam Restoration</span>
                    <span>Included</span>
                  </div>
                </div>

                {/* Massachusetts Tax Credit Box */}
                <div className="p-4 rounded-sm bg-primary-light border border-primary/20 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span className="flex items-center gap-1.5 text-primary">
                      <Sparkles className="w-4 h-4" />
                      MA Title 5 Tax Credit (Credit 54):
                    </span>
                    <span className="text-sm font-black text-primary font-mono">-${taxCredit.toLocaleString()}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Homeowners receive a 40% Massachusetts state income tax credit on Title 5 repair and design expenses (capped at $6,000 maximum credit).
                  </p>
                </div>

                {/* Net Out of Pocket */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-500 block">Net After MA Tax Credit</span>
                    <span className="text-xl sm:text-2xl font-black text-primary font-mono">
                      ${netMin.toLocaleString()} – ${netMax.toLocaleString()}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-sm text-[11px] font-bold bg-slate-100 text-slate-700">
                    Estimated Net
                  </span>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="btn-primary w-full py-3.5 justify-center text-xs tracking-wider uppercase font-semibold shadow-md rounded-sm"
                  >
                    <span>Request Stamped Engineering Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:9783694200"
                    className="btn-outline w-full py-2.5 justify-center text-xs tracking-wider uppercase font-semibold text-slate-700 rounded-sm"
                  >
                    Discuss With Robert Doucette, P.E.
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
