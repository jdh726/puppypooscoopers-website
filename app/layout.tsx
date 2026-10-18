import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://puppypooscoopers.com"),
  alternates: { canonical: "/" },
  icons: { icon: "/assets/official-logo.jpg" },
  title: "Puppy Poo Scoopers LLC | Pet Waste Removal — Nebraska Panhandle",
  description:
    "Reliable, flat-rate pet waste removal serving Alliance, Hemingford, Chadron, Hay Springs, Rushville and Gordon, NE. No contracts, transparent pricing, always on time.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X9DWT74J5Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X9DWT74J5Z');
          `}
        </Script>
      </head>
      <body className="journey-compact">
        {children}
      </body>
    </html>
  )
}
