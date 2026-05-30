import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Puppy Poo Scoopers LLC | Pet Waste Removal — Nebraska Panhandle",
  description:
    "Reliable, flat-rate pet waste removal serving Alliance, Hemingford, Chadron, Hay Springs, Rushville and Gordon, NE. No contracts, transparent pricing, always on time.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
