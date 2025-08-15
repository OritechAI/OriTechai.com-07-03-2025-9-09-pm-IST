import VideoBackground from './components/VideoBackground'
import Navigation from './components/Navigation'
import CalendlyEmbed from './components/CalendlyEmbed'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="section min-h-screen flex items-center justify-center text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <h1 className="heading-xl">
            AI Consulting & Audits to Transform Your Business
          </h1>
          <p className="content-text max-w-4xl mx-auto mb-10">
            We audit your processes, uncover automation wins, and implement AI that cuts costs, boosts efficiency, and grows revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#booking')}
              className="btn-primary"
            >
              Book Your Free AI Audit
            </button>
            <button
              onClick={() => scrollToSection('#case-study')}
              className="btn-secondary"
            >
              See a 30% cost-cut case study
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <p className="content-text mb-8">
            Hidden inefficiencies waste time and money across your business. Our AI audits pinpoint exactly where automation delivers the biggest wins first, turning your biggest pain points into competitive advantages.
          </p>
          <button
            onClick={() => scrollToSection('#booking')}
            className="btn-primary"
          >
            Book a Free Audit Call
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg">Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-albanian-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="heading-md">AI Process Audits</h3>
              <p className="text-pure-white">
                Pinpoint exactly what to automate first. Get clear ROI projections and implementation roadmaps.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-albanian-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-md">AI Strategy Consulting</h3>
              <p className="text-pure-white">
                Clear roadmap: tools, timeline, ROI. Custom strategies that fit your business, not templates.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-albanian-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-pure-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-md">Implementation & Training</h3>
              <p className="text-pure-white">
                We build, integrate, and enable your team. Full support until you see measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why OritechAI */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg">Why OritechAI</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-accent text-pure-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="heading-md">Proven Results</h3>
              <p className="text-pure-white">
                Clients see up to 30% cost reduction in 90 days.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-accent text-pure-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-md">Industry Experience</h3>
              <p className="text-pure-white">
                Service businesses, agencies, retail, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gold-accent text-pure-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-md">End-to-End</h3>
              <p className="text-pure-white">
                Audit → Plan → Implement → Optimize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg">Our Process</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1', title: 'Audit', description: 'Deep dive into your workflows and pain points' },
              { number: '2', title: 'Plan', description: 'Prioritized roadmap with clear ROI projections' },
              { number: '3', title: 'Implement', description: 'Build and integrate AI solutions seamlessly' },
              { number: '4', title: 'Optimize', description: 'Monitor, refine, and maximize your results' },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-albanian-red text-pure-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="heading-md">{step.title}</h3>
                <p className="text-pure-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg">Case Study: 30% Cost Cut in 90 Days</h2>
          </div>
          
          <div className="card text-center">
            <p className="content-text mb-12">
              A 15-person marketing agency automated their reporting, lead response, and client communication systems.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gold-accent mb-2">8h → 2m</div>
                <p className="text-pure-white">Lead response time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-accent mb-2">10h/wk → 0</div>
                <p className="text-pure-white">Manual reporting</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold-accent mb-2">+18%</div>
                <p className="text-pure-white">Close rate increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <p className="text-pure-white text-lg mb-4 italic">
                "OritechAI identified automation opportunities we never knew existed. The ROI was immediate and substantial."
              </p>
              <p className="text-gold-accent font-semibold">Sarah Johnson, Operations Director</p>
            </div>

            <div className="card">
              <p className="text-pure-white text-lg mb-4 italic">
                "Their audit saved us 25 hours per week and increased our revenue by 22% in just 3 months."
              </p>
              <p className="text-gold-accent font-semibold">Michael Chen, Agency Owner</p>
            </div>

            <div className="card md:col-span-2">
              <p className="text-pure-white text-lg mb-4 italic">
                "Finally, AI consulting that delivers real results, not just buzzwords. Our efficiency gains have been game-changing."
              </p>
              <p className="text-gold-accent font-semibold">Lisa Rodriguez, CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg">Book Your Free 30-Minute AI Audit Call</h2>
            <p className="content-text">
              Pick a time — we'll identify your top 3 automation wins.
            </p>
          </div>
          
          <CalendlyEmbed />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pure-black bg-opacity-95 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-pure-white mb-4">
                Ori<span className="text-albanian-red">Tech</span>AI
              </h3>
              <p className="text-pure-white mb-4">
                AI consulting and business audits that deliver measurable results.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pure-white mb-4">Contact</h4>
              <p className="text-pure-white">info@oritechai.com</p>
              <p className="text-pure-white">+1 (407) 406-9101</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pure-white mb-4">Services</h4>
              <ul className="space-y-2 text-pure-white">
                <li>AI Process Audits</li>
                <li>AI Strategy Consulting</li>
                <li>Implementation & Training</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-pure-white">
              © 2025 OritechAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}