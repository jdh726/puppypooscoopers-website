"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    q: "How much does service cost?",
    a: "We have fully transparent, flat-rate pricing — no quotes needed! Weekly service is $76/month (4 visits, 5th visit free). Bi-weekly is $54/month (2 visits, 3rd free). A one-time cleanup is $89. Add our professional deodorizer treatment for just $23/month more (applied bi-weekly).",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "Absolutely not! Our recurring plans are completely flexible — start or stop service anytime. We believe you should keep using us because you love the service, not because you're locked in.",
  },
  {
    q: "How often will you clean my yard?",
    a: "We offer weekly (4 cleanings/month) and bi-weekly (2 cleanings/month) recurring plans, plus one-time cleanups. If a month has a 5th week on a weekly plan, that extra visit is on us. Same deal with a 3rd visit on bi-weekly plans.",
  },
  {
    q: "Are your tools sanitized between yards?",
    a: "Yes, always. We sanitize all equipment after every single yard visit to prevent cross-contamination. We take the health and safety of your yard and pets seriously — no exceptions, no shortcuts.",
  },
  {
    q: "Will you always secure my gate?",
    a: "Yes — this is non-negotiable. We will always make sure your gate is securely closed before leaving. Keeping your pets safely inside is a top priority on every single visit.",
  },
  {
    q: "Are you insured?",
    a: "Yes! Puppy Poo Scoopers LLC is fully insured. Your home and yard are in safe hands. You can have total peace of mind knowing a licensed, insured professional is handling your yard.",
  },
  {
    q: "What areas do you serve?",
    a: "We're open and accepting new clients in Alliance, Hemingford, and Chadron, NE. We also serve Hay Springs, Rushville, and Gordon, NE — but those areas currently have limited availability. Sign up early to hold your spot!",
  },
  {
    q: "What deodorizer do you use?",
    a: "We use a professional-grade pet waste enzyme deodorizer that is safe for pets and children. The add-on is applied bi-weekly for the best results, keeping your yard fresh between regular cleanings.",
  },
  {
    q: "How do I get started?",
    a: "Just fill out the sign-up form on this page or give us a call or text at (308) 760-8639. We'll confirm your service area, go over your needs, and get you on the schedule — usually within a day or two!",
  },
]

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">FAQ</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to know before signing up. Still have questions?{" "}
            <a href="tel:3087608639" className="text-purple-700 underline font-medium">
              Give us a call.
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-purple-500 flex-shrink-0 transition-transform duration-200",
                    openIdx === idx && "rotate-180"
                  )}
                />
              </button>
              {openIdx === idx && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Ready to get started?</p>
          <Link
            href="#signup"
            className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md"
          >
            Sign Up Today 🐾
          </Link>
        </div>
      </div>
    </section>
  )
}
