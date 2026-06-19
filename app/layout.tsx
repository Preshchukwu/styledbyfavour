import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { schema } from '@/lib/schema'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Styled by Favour | Luxury Braider Nashville, TN',
  description:
    "Nashville's premier luxury hair braiding specialist. Knotless braids, Fulani braids, cornrows & more. Precision. Passion. Perfection. Book now.",
  keywords: [
    'luxury braider Nashville',
    'Nashville braiding specialist',
    'knotless braids Nashville',
    'Fulani braids Nashville Tennessee',
    'best braider Nashville TN',
    'protective styles Nashville',
    'natural hair Nashville',
    'cornrows Nashville TN',
    'crochet braids Nashville Tennessee',
  ],
  openGraph: {
    title: 'Styled by Favour | Luxury Braider Nashville, TN',
    description: 'Premium hair braiding in Nashville, Tennessee. Knotless braids, Fulani braids, cornrows & more. Book your appointment today.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Styled by Favour | Luxury Braider Nashville, TN',
    description: 'Premium hair braiding in Nashville, Tennessee.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://styledbyfavour.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
