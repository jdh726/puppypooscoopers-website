"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new"
const FB_URL = "https://www.facebook.com/profile.php?id=61583865665138"

const NAV_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <div>
              <div className="font-bold text-purple-700 text-sm sm:text-base leading-tight">
                Puppy Poo Scoopers
              </div>
              <div className="text-xs text-gray-500 leading-tight">LLC · Nebraska Panhandle</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-gray-600 hover:text-purple-700 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
            {/* Facebook icon */}
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:3087608639"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-purple-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (308) 760-8639
            </a>
            <Button
              asChild
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold shadow-sm"
            >
              <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">
                Start Service Today
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-purple-700 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block text-sm text-gray-700 py-2.5 px-3 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-3 mt-2">
              <div className="flex items-center justify-between px-3">
                <a
                  href="tel:3087608639"
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <Phone className="h-4 w-4" />
                  (308) 760-8639
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <Button
                asChild
                className="bg-purple-700 hover:bg-purple-800 text-white w-full font-semibold"
              >
                <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                  Start Service Today
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
