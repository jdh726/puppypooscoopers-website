import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Nav } from "@/components/nav"
import { FaqSection } from "@/components/faq-section"
import { SignupSection } from "@/components/signup-section"
import {
  Shield,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
  Zap,
  Calendar,
  Users,
} from "lucide-react"

const FB_URL = "https://www.facebook.com/profile.php?id=61583865665138"
const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/89caed53-1357-40e4-9d03-0deee8e08c06/public/requests/2742297/new"
const LOGO_JOSH =
  "https://cdn.galaxy.ai/user_3AIsMdCv1zW7S9LbpdI9SHpkXd2/a1fcab8705d84f809b6e7d9164056ac6.jpg"
const PHOTO_JOSH_DOGS_1 =
  "https://cdn.galaxy.ai/user_3AIsMdCv1zW7S9LbpdI9SHpkXd2/347fb0480f9448e2bf7cacac775e2056.webp"
const PHOTO_JOSH_DOGS_2 =
  "https://cdn.galaxy.ai/user_3AIsMdCv1zW7S9LbpdI9SHpkXd2/931744ffc8954be9b56d67c2bf06461d.webp"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ══════════════════ PROMO BAR ══════════════════ */}
      <div className="bg-amber-400 py-2.5 px-4 text-center">
        <p className="text-gray-900 font-bold text-sm sm:text-base">
          🎉 Limited Time:{" "}
          <span className="line-through text-gray-600 font-normal">$39 startup fee</span>{" "}
          <span className="text-green-800">WAIVED</span>
          {" "}+{" "}
          <span className="text-green-800 font-extrabold">First Cleaning is FREE!</span>
          {" "}·{" "}
          <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-extrabold">
            Sign Up Today →
          </a>
        </p>
      </div>

      <Nav />

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-6 text-sm px-3 py-1">
                🐾 Nebraska Panhandle&apos;s Pet Waste Pros
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                We&apos;re out scooping poo{" "}
                <span className="text-purple-700">so you don&apos;t have to.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Professional, scheduled pet waste removal for dog owners across Nebraska&apos;s
                Panhandle. Flat-rate pricing. No contracts. We show up on time, every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-base px-8 shadow-lg shadow-purple-200"
                >
                  <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">
                    Start Service Today <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold text-base px-8"
                >
                  <Link href="#pricing">See Pricing</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                {["No contracts", "Flat-rate pricing", "Locally owned", "Fully insured"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[420px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-purple-100 bg-gradient-to-br from-purple-100 via-blue-50 to-amber-50">
              <Image
                src={LOGO_JOSH}
                alt="Josh, owner of Puppy Poo Scoopers LLC, with his Great Dane and Schnauzer — Puppy Poo Scoopers LLC logo"
                fill
                className="object-contain p-6 lg:p-8"
                priority
              />
              {/* Review overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="flex flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-800">
                    &ldquo;I can recommend him with confidence.&rdquo; &mdash; Ralph H.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TRUST BAR ══════════════════ */}
      <section className="bg-purple-700 py-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-5 lg:gap-12">
            <span className="flex items-center gap-2 text-white text-sm font-medium">
              <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
              5.0 Google Rating
            </span>
            <span className="flex items-center gap-2 text-white text-sm font-medium">
              <Shield className="h-4 w-4 text-white" />
              Fully Insured
            </span>
            <span className="flex items-center gap-2 text-white text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-300" />
              Sanitized Tools Every Visit
            </span>
            <span className="flex items-center gap-2 text-white text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-300" />
              Gates Always Secured
            </span>
            <span className="flex items-center gap-2 text-white text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-300" />
              Flat-Rate Pricing
            </span>
          </div>
        </div>
      </section>


      {/* ══════════════════ BENEFITS ══════════════════ */}
      <section id="benefits" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">
              Why It Matters
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              More than just a clean yard
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Regular pet waste removal isn&apos;t just about appearances — it protects your family,
              your pets, and your lawn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: "🦠",
                title: "Protects Your Family's Health",
                desc: "Dog waste carries harmful bacteria and parasites — E. coli, roundworms, salmonella — that can linger in soil for years and get tracked indoors. Regular removal eliminates the risk at the source.",
              },
              {
                emoji: "🌿",
                title: "Saves Your Lawn",
                desc: "Pet waste is highly acidic and kills grass, leaving brown patches and bare spots. Keeping up with it consistently gives your lawn a fighting chance to stay green all season.",
              },
              {
                emoji: "👨‍👩‍👧",
                title: "Your Yard, Actually Usable",
                desc: "Kids, guests, summer cookouts — a clean yard means you can use your outdoor space without worry. Stop avoiding your own backyard and start enjoying it.",
              },
              {
                emoji: "🐕",
                title: "Better for Your Dogs Too",
                desc: "Dogs can re-ingest parasites from their own waste or pick up infections from an unclean yard. A clean yard is a healthier environment for the furry family members too.",
              },
              {
                emoji: "❄️",
                title: "No More Spring Surprises",
                desc: "Nebraska winters are rough. Waste that builds up under snow all winter makes spring cleanup a nightmare. Regular service all year means no shocking thaw-out in April.",
              },
              {
                emoji: "⏰",
                title: "Get Your Weekends Back",
                desc: "You have better things to do than scoop poop every weekend. Hand it off to us and spend that time actually playing with your dogs — that&apos;s what weekends are for.",
              },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-purple-50 rounded-2xl p-6 border border-purple-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PRICING ══════════════════ */}
      <section id="pricing" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">
              Transparent Pricing
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Know exactly what you&apos;re paying.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              No quotes. No surprises. Flat-rate pricing for a standard city lot.
            </p>
            <div className="inline-flex items-center gap-2 mt-5 bg-green-50 border-2 border-green-400 text-green-800 font-bold px-5 py-2.5 rounded-full text-sm shadow-sm">
              🎉 Right now: <span className="line-through text-gray-400 font-normal">$39 startup fee</span>&nbsp;WAIVED + First Cleaning FREE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
            {/* WEEKLY — Featured */}
            <div className="relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  ⭐ MOST POPULAR
                </span>
              </div>
              <div className="rounded-2xl border-2 border-purple-600 shadow-xl overflow-hidden flex flex-col">
                <div className="bg-purple-700 p-7 text-white">
                  <h3 className="text-xl font-bold">Weekly</h3>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="text-5xl font-extrabold">$76</span>
                    <span className="text-purple-200 mb-2 text-lg">/mo</span>
                  </div>
                  <p className="text-purple-200 text-sm mt-1">$19/visit · 4 visits/month</p>
                </div>
                <div className="bg-white p-6 flex flex-col">
                  <ul className="space-y-3 mb-5">
                    {[
                      "4 cleanings per month",
                      "5th cleaning FREE if needed",
                      "Up to 6 dogs included",
                      "Standard city lot size",
                      "Tools sanitized every visit",
                      "Gate secured before leaving",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                    <p className="text-xs font-bold text-amber-700 mb-0.5 uppercase tracking-wide">
                      + Add Deodorizer Treatment
                    </p>
                    <p className="text-lg font-extrabold text-amber-800">$99/month total</p>
                    <p className="text-xs text-amber-600 mt-0.5">
                      Bi-weekly professional enzyme application
                    </p>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-5"
                  >
                    <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">Sign Up for Weekly →</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* BI-WEEKLY */}
            <div className="rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gray-100 p-7">
                <h3 className="text-xl font-bold text-gray-900">Bi-Weekly</h3>
                <div className="flex items-end gap-1 mt-3">
                  <span className="text-5xl font-extrabold text-gray-900">$54</span>
                  <span className="text-gray-500 mb-2 text-lg">/mo</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">$27/visit · 2 visits/month</p>
              </div>
              <div className="bg-white p-6 flex flex-col">
                <ul className="space-y-3 mb-5">
                  {[
                    "2 cleanings per month",
                    "3rd cleaning FREE if needed",
                    "Up to 4 dogs included",
                    "Standard city lot size",
                    "Tools sanitized every visit",
                    "Gate secured before leaving",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                  <p className="text-xs font-bold text-amber-700 mb-0.5 uppercase tracking-wide">
                    + Add Deodorizer Treatment
                  </p>
                  <p className="text-lg font-extrabold text-amber-800">$77/month total</p>
                  <p className="text-xs text-amber-600 mt-0.5">
                    Bi-weekly professional enzyme application
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-5"
                >
                  <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">Sign Up for Bi-Weekly →</a>
                </Button>
              </div>
            </div>

            {/* ONE-TIME */}
            <div className="rounded-2xl border-2 border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-gray-100 p-7">
                <h3 className="text-xl font-bold text-gray-900">One-Time Cleanup</h3>
                <div className="flex items-end gap-1 mt-3">
                  <span className="text-5xl font-extrabold text-gray-900">$89</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">Single thorough cleanup visit</p>
              </div>
              <div className="bg-white p-6 flex flex-col">
                <ul className="space-y-3 mb-5">
                  {[
                    "Complete yard deep-clean",
                    "Standard city lot size",
                    "Perfect for spring cleanups",
                    "Great before parties or events",
                    "Tools sanitized every visit",
                    "Gate secured before leaving",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="h-[84px] mb-5" />
                <Button
                  asChild
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-5"
                >
                  <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">Schedule One-Time →</a>
                </Button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            All pricing based on a standard city lot size. Larger yard or more dogs?{" "}
            <a href="tel:3087608639" className="text-purple-700 underline font-medium">
              Call (308) 760-8639
            </a>{" "}
            for a custom quote.
          </p>
        </div>
      </section>


      {/* ══════════════════ DEODORIZER SPOTLIGHT ══════════════════ */}
      <section id="deodorizer" className="py-16 lg:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-xl bg-white p-6 flex items-center justify-center">
                <Image
                  src="https://cdn.galaxy.ai/user_3AIsMdCv1zW7S9LbpdI9SHpkXd2/b1b2190594ed49588f87bd4af54716bf.jpg"
                  alt="Bioda Probiotic Enzyme Odor Eliminator — used by Puppy Poo Scoopers"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-5">
                🌿 Our Deodorizer Treatment
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                We use{" "}
                <span className="text-green-700">Bioda Probiotic Enzyme Odor Eliminator</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in being fully transparent about every product we use in your yard.
                The deodorizer add-on uses Bioda&apos;s professional-strength probiotic enzyme
                formula — applied bi-weekly to tackle odors at the source, not just mask them.
              </p>

              {/* Key Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                {[
                  {
                    icon: "🔬",
                    title: "Probiotic Enzyme Formula",
                    desc: "Breaks down organic pet waste at a molecular level — permanently eliminates odor, not just covers it up.",
                  },
                  {
                    icon: "⏱️",
                    title: "Active Up to 21 Days",
                    desc: "Probiotics keep working long after application, keeping your yard fresher between visits.",
                  },
                  {
                    icon: "🐾",
                    title: "Pet & Family Safe",
                    desc: "No harsh chemicals or harmful residues. Safe for your dogs, kids, and lawn.",
                  },
                  {
                    icon: "🇺🇸",
                    title: "Made in the USA",
                    desc: "Professional-strength formula trusted by pet owners and services nationwide.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl">{icon}</span>
                      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border-2 border-green-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-0.5">Add Deodorizer to Your Plan</p>
                  <p className="text-xs text-gray-500">Bi-weekly enzyme application, applied on your scooping day</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-extrabold text-green-700">+$23<span className="text-sm font-normal text-gray-500">/mo</span></p>
                  <Button asChild size="sm" className="mt-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs">
                    <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">Add to My Plan →</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ HOW IT WORKS ══════════════════ */}
      <section className="py-16 lg:py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              Getting started takes 2 minutes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                icon: CheckCircle,
                title: "Pick Your Plan",
                desc: "Choose weekly, bi-weekly, or one-time — with or without the deodorizer add-on. Prices are right here on this page, no guessing.",
              },
              {
                step: "2",
                icon: Phone,
                title: "We Confirm & Schedule",
                desc: "After you submit the form, we'll reach out within 24 hours to confirm your address, service, and lock in your first visit.",
              },
              {
                step: "3",
                icon: Star,
                title: "Enjoy a Clean Yard",
                desc: "We show up on schedule, do a thorough job, sanitize our tools, and secure your gate. No mess, no stress.",
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-extrabold shadow-md">
                    {step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold px-10 py-5 shadow-lg shadow-purple-200 text-base"
            >
              <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY CHOOSE US ══════════════════ */}
      <section id="services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              We&apos;re not rushing through your yard.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlike a rushed crew or a neighbor kid, every single visit gets our full attention.
              No shortcuts. Ever.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Quality Work, Not Rushed",
                desc: "We take our time with every yard. If something's missed, we fix it — no questions asked.",
              },
              {
                icon: Calendar,
                title: "Regular & Reliable",
                desc: "You'll always know when we're coming. We show up on schedule, consistently.",
              },
              {
                icon: Shield,
                title: "Fully Insured",
                desc: "Your home and pets are in safe hands. We carry full liability insurance on every visit.",
              },
              {
                icon: Users,
                title: "Sanitized Tools",
                desc: "All equipment is sanitized between every yard. No exceptions, no cross-contamination.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ SERVICE AREAS ══════════════════ */}
      <section id="areas" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">
              Where We Serve
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Serving the Nebraska Panhandle
            </h2>
            <p className="text-gray-600">
              Proudly serving dog owners across the region — with more areas being added.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { city: "Alliance, NE", status: "open" },
              { city: "Hemingford, NE", status: "open" },
              { city: "Chadron, NE", status: "open" },
              { city: "Hay Springs, NE", status: "limited" },
              { city: "Rushville, NE", status: "limited" },
              { city: "Gordon, NE", status: "limited" },
            ].map(({ city, status }) => (
              <div
                key={city}
                className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                  status === "open"
                    ? "border-green-200 bg-green-50"
                    : "border-amber-200 bg-amber-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin
                    className={`h-5 w-5 flex-shrink-0 ${
                      status === "open" ? "text-green-600" : "text-amber-600"
                    }`}
                  />
                  <span className="font-semibold text-gray-900">{city}</span>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    status === "open"
                      ? "bg-green-200 text-green-800"
                      : "bg-amber-200 text-amber-800"
                  }`}
                >
                  {status === "open" ? "✓ Open" : "⚠ Limited"}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              ⚠ Limited availability areas may have a waitlist. Don&apos;t miss your spot —
            </p>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md text-sm"
            >
              Sign Up Now to Reserve Your Spot
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ REVIEWS ══════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-4">
              Reviews
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
              What our customers say
            </h2>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">5.0 on Google</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 sm:p-10">
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-800 text-xl leading-relaxed mb-7 italic">
                  &ldquo;Josh does a very good job. He is also very courteous. All you have to do
                  is let him know if he needs to do more and he gets the job done. I can recommend
                  him with confidence.&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-purple-200 rounded-full flex items-center justify-center font-extrabold text-purple-700 text-lg">
                      R
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Ralph Hanson</p>
                      <p className="text-sm text-gray-500">Google Review · 3 months ago</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full border border-blue-200">
                    Google Review
                  </span>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-sm text-gray-500 mt-5">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 underline font-medium"
              >
                See all reviews on Google →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-100 via-blue-50 to-amber-50">
              <Image
                src={LOGO_JOSH}
                alt="Josh, owner of Puppy Poo Scoopers LLC, with his Great Dane and Schnauzer"
                fill
                className="object-contain p-8"
              />
            </div>
            <div>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 mb-5">
                About
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
                Meet Josh — Your Local Scooper
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  I started Puppy Poo Scoopers LLC because I know firsthand what it&apos;s like to
                  have dogs and a yard that needs real attention. As a dog owner myself — yes, that&apos;s
                  my Great Dane and Schnauzer! — I wanted to offer a service I&apos;d actually use:
                  reliable, thorough, and fairly priced.
                </p>
                <p>
                  I&apos;m not rushing from yard to yard. Every visit gets my full attention. I
                  sanitize my tools between every single yard, take my time to make sure every
                  corner is cleaned properly, and I always close the gate behind me.
                </p>
                <p>
                  Locally owned and operated in Hemingford, Nebraska — I live here, I serve here,
                  and I take real pride in my community.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold shadow-md"
                >
                  <a href={JOBBER_URL} target="_blank" rel="noopener noreferrer">Start Service Today</a>
                </Button>
                <a
                  href="tel:3087608639"
                  className="inline-flex items-center gap-2 border-2 border-purple-300 text-purple-700 hover:bg-purple-100 font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (308) 760-8639
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <FaqSection />

      {/* ══════════════════ SIGNUP ══════════════════ */}
      <SignupSection />

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="bg-gray-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🐾</span>
                <div>
                  <div className="font-bold text-white text-base">Puppy Poo Scoopers LLC</div>
                  <div className="text-xs text-gray-400">Nebraska Panhandle</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional pet waste removal for dog owners across Nebraska&apos;s Panhandle.
                Locally owned, fully insured, and always on time.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Pricing", href: "#pricing" },
                  { label: "Deodorizer", href: "#deodorizer" },
                  { label: "Services", href: "#services" },
                  { label: "Service Areas", href: "#areas" },
                  { label: "About Josh", href: "#about" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Sign Up Today", href: JOBBER_URL },
                  // opens Jobber
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-3.5">
                <a
                  href="tel:3087608639"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  (308) 760-8639
                </a>
                <a
                  href="mailto:admin@puppypooscoopers.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  admin@puppypooscoopers.com
                </a>
                <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  Hemingford, NE · Serving the Panhandle
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=61583865665138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Puppy Poo Scoopers LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
