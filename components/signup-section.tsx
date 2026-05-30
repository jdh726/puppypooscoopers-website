import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Clock, Shield } from "lucide-react"

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new"

export function SignupSection() {
  return (
    <section id="signup" className="py-16 lg:py-24 bg-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <Badge className="bg-purple-500 text-white hover:bg-purple-500 mb-6 text-sm px-4 py-1.5">
          🐾 Ready to Get Started?
        </Badge>

        {/* Headline */}
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
          We&apos;re out scooping poo<br className="hidden sm:block" />{" "}
          <span className="text-amber-300">so you don&apos;t have to.</span>
        </h2>

        <p className="text-purple-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Click below to fill out our quick request form — it takes less than 2 minutes.
          We&apos;ll reach out within 24 hours to confirm your schedule and get your first
          visit booked.
        </p>

        {/* Trust row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {[
            { icon: CheckCircle, text: "No contracts" },
            { icon: Shield, text: "Fully insured" },
            { icon: Clock, text: "Response within 24 hrs" },
            { icon: Star, text: "5.0 Google rating" },
          ].map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 text-purple-200 text-sm font-medium">
              <Icon className="h-4 w-4 text-amber-300" />
              {text}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={JOBBER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-purple-900 transition-all duration-200 hover:scale-105"
        >
          Start Service Today
          <ArrowRight className="h-5 w-5" />
        </a>

        <p className="text-purple-300 text-sm mt-5">
          Opens our secure request form — powered by Jobber
        </p>
      </div>
    </section>
  )
}
