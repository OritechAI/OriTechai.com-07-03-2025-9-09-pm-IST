import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OritechAI — AI Consulting & Business Audits',
  description: 'AI consulting and business audits to cut costs, automate workflows, and grow revenue. Book your free AI consultation today.',
  keywords: 'AI consulting, AI business audit, AI automation audit, AI strategy consulting, AI implementation, business automation',
  authors: [{ name: 'OritechAI' }],
  creator: 'OritechAI',
  publisher: 'OritechAI',
  metadataBase: new URL('https://oritechai.com'),
  alternates: {
    canonical: 'https://oritechai.com',
  },
  openGraph: {
    title: 'OritechAI — AI Consulting & Business Audits',
    description: 'AI consulting and business audits to cut costs, automate workflows, and grow revenue. Book your free AI consultation today.',
    url: 'https://oritechai.com',
    siteName: 'OritechAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OritechAI - AI Consulting and Business Audits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OritechAI — AI Consulting & Business Audits',
    description: 'AI consulting and business audits to cut costs, automate workflows, and grow revenue. Book your free AI consultation today.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E41E26" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}