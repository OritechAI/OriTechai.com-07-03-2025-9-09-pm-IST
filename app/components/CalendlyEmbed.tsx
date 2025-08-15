'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Calendly: any
  }
}

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full">
      {/* Calendly iframe embed */}
      <div className="calendly-inline-widget min-h-[700px] rounded-xl overflow-hidden bg-pure-white">
        <iframe
          src="https://calendly.com/selenica3/30min?embed_domain=localhost&embed_type=Inline"
          width="100%"
          height="700"
          frameBorder="0"
          title="Schedule a meeting with OritechAI"
          className="rounded-xl"
        />
      </div>
      
      {/* Backup link */}
      <div className="text-center mt-6">
        <p className="text-pure-white mb-4">Having trouble with the calendar?</p>
        <a
          href="https://calendly.com/selenica3/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open in Calendly
        </a>
      </div>
    </div>
  )
}