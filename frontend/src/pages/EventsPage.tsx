import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import {
  CalendarDays,
  Clock,
  MapPin,
  Music,
  Coffee,
  BookOpen,
  MessageCircle,
  Gift,
  Users,
  ArrowRight,
} from "lucide-react";

interface EventStep {
  time: string;
  duration: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const uhclEvent = {
  tag: "JournalXP x UHCL",
  title: "Mid-Semester Mental Reset",
  subtitle: "Clarity Session",
  tagline:
    "Complete one full guided reflection path in a calm, intentional environment, and leave feeling mentally clearer than when you walked in.",
  date: "Coming Soon",
  location: "UHCL Campus, Quiet Space (TBD)",
  duration: "~1 hour – 1 hour 15 mins",
  budget: "$100 budget for snacks, posters & marketing",
  agenda: [
    {
      time: "5:15 PM",
      duration: "15 min",
      title: "Arrive & Settle In",
      description:
        "Soft lofi music, dim lighting, and snacks on the table. No ice breakers, just vibe. Grab a seat, grab a snack, and decompress.",
      icon: <Music className="h-5 w-5" />,
    },
    {
      time: "5:30 PM",
      duration: "10 min",
      title: "What Is JournalXP?",
      description:
        "A quick intro to what JournalXP is, why guided reflections matter, and what you're about to do. No fluff, just the mission.",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      time: "5:40 PM",
      duration: "30 min",
      title: "Guided Reflection",
      description:
        "Everyone picks a reflection path and completes it silently. Create an account if you don't have one, it takes 30 seconds. Show the completion screen and claim your sticker.",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "6:10 PM",
      duration: "10–15 min",
      title: "Optional Sharing",
      description:
        "For anyone who'd like to share what came up during their reflection. Zero pressure, totally optional, fully respected.",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      time: "6:20 PM",
      duration: "5–10 min",
      title: "Wrap Up & Rewards",
      description:
        "Feedback forms, email sign-ups, and a sticker for completing your reflection. We'll also ask: \"Would you use this platform again?\" and collect video testimonials.",
      icon: <Gift className="h-5 w-5" />,
    },
  ] as EventStep[],
  vibe: [
    "Dim lighting",
    "Soft lofi / instrumental music",
    "Snacks & drinks",
    "No weird ice breakers",
    "Silent reflection time",
    "Chill, intentional atmosphere",
  ],
  timeline: [
    {
      weeks: "3 Weeks Before",
      items: [
        "Lock the date",
        "Reserve the space",
        "Finalize reflection path",
        "Design the poster",
      ],
    },
    {
      weeks: "2 Weeks Before",
      items: [
        "Post on Instagram",
        "Share in campus group chats",
        "Ask friends to repost",
        "Put physical flyers up",
      ],
    },
    {
      weeks: "1 Week Before",
      items: [
        "Reminder posts",
        "DM friends personally",
        "Confirm tech setup",
      ],
    },
  ],
  contentGoals: [
    "Short clips of people journaling (without exposing their reflections)",
    "Aesthetic shots of the space",
    "A clip of the founder speaking about the mission",
    "Video testimonials from attendees",
  ],
  partners: [
    "Campus Counseling Center",
    "Wellness Club",
    "Mental Health orgs on campus",
  ],
};

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-indigo-50">
      <SEO
        title="Events - JournalXP"
        description="IRL JournalXP experiences and community meetups. Join us for guided reflection sessions and mental wellness events."
        url="https://journalxp.com/events"
      />

      <Header title="Events" />

      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Hero Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_-12px_rgba(109,40,217,0.5)]">
            {/* Deep gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#120727] via-[#1e0a4a] to-[#0d1a5c]" />

            {/* Blur orbs for atmospheric depth */}
            <div className="absolute -top-20 -right-16 w-[420px] h-[420px] rounded-full bg-violet-600/50 blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 w-[380px] h-[380px] rounded-full bg-blue-700/40 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-fuchsia-600/20 blur-[80px] pointer-events-none" />

            {/* Subtle top border glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-14 text-white">
              {/* Top bar: label + logo */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-violet-300/90 border border-violet-400/25 bg-violet-500/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                  JournalXP × UHCL
                </span>
                <div className="text-sm font-bold tracking-tight opacity-60">
                  <span className="text-violet-300">Journal</span>
                  <span className="text-white">XP</span>
                </div>
              </div>

              {/* Partnership line */}
              <p className="text-white/55 text-xs tracking-wide mb-8">
                In partnership with the UHCL Digital Arts Organization
              </p>

              {/* Emotional hook */}
              <p className="text-violet-300/75 text-sm font-medium tracking-wide mb-3">
                Feeling mentally overwhelmed?
              </p>

              {/* Main title */}
              <h1 className="text-5xl md:text-[3.75rem] font-black text-white leading-[1.03] tracking-tight mb-5">
                Mid-Semester<br />Mental Reset
              </h1>

              {/* Subtitle tag */}
              <div className="inline-flex items-center gap-2 mb-7">
                <span className="bg-white/10 text-violet-200 text-sm font-medium px-4 py-1.5 rounded-full border border-white/[0.12] backdrop-blur-sm">
                  ✦ Clarity Session
                </span>
              </div>

              {/* Outcome description */}
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-9">
                Complete one guided reflection path in a calm, intentional space, and leave feeling clearer, lighter, and more grounded than when you walked in.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/[0.08] mb-8" />

              {/* Info chips — 2×2 grid */}
              <div className="grid grid-cols-2 gap-3 max-w-md mb-8">
                <div className="flex items-center gap-2.5 bg-white/[0.07] border border-white/[0.1] rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <CalendarDays className="h-4 w-4 text-violet-300 flex-shrink-0" />
                  <span className="text-sm text-white/85 leading-tight">Pilot session at UHCL</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.07] border border-white/[0.1] rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-violet-300 flex-shrink-0" />
                  <span className="text-sm text-white/85 leading-tight">~60 - 75 minutes</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.07] border border-white/[0.1] rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-violet-300 flex-shrink-0" />
                  <span className="text-sm text-white/85 leading-tight">UHCL Campus Quiet Space (TBD)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.07] border border-white/[0.1] rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <Users className="h-4 w-4 text-violet-300 flex-shrink-0" />
                  <span className="text-sm text-white/85 leading-tight">Open to everyone</span>
                </div>
              </div>

              {/* Trust line */}
              <p className="text-white/30 text-xs tracking-wide mb-8">
                Guided by JournalXP, built to help people reset, reflect, and gain clarity
              </p>

              {/* CTA */}
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScnkuNR8_R-vAN-OnDLPCRvw7ufv1Bj66WtrAkwIiyuKN-ppg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 bg-white text-violet-800 font-semibold text-sm px-7 py-3.5 rounded-full shadow-[0_8px_30px_rgba(109,40,217,0.4)] hover:shadow-[0_12px_40px_rgba(109,40,217,0.55)] hover:bg-violet-50 transition-all duration-200"
              >
                Reserve Your Spot
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </motion.a>
            </div>
          </div>

          {/* Agenda */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Event Flow
            </h2>
            <div className="space-y-4">
              {uhclEvent.agenda.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/70 shadow-[0_4px_20px_rgba(109,40,217,0.07)] hover:bg-white/75 hover:shadow-[0_6px_24px_rgba(109,40,217,0.12)] transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100/80 backdrop-blur-sm border border-violet-200/50 flex items-center justify-center text-violet-600 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">
                        {step.title}
                      </span>
                      <span className="text-xs bg-violet-50 text-violet-600 border border-violet-200 rounded-full px-2 py-0.5">
                        {step.time}
                      </span>
                      <span className="text-xs text-gray-400">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vibe + Timeline in 2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Vibe */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-[0_4px_20px_rgba(109,40,217,0.07)]">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                The Vibe
              </h2>
              <ul className="space-y-3">
                {uhclEvent.vibe.map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-7 h-7 rounded-lg bg-violet-100/80 border border-violet-200/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Goals */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-[0_4px_20px_rgba(109,40,217,0.07)]">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Content Creation Goals
              </h2>
              <ul className="space-y-3">
                {uhclEvent.contentGoals.map((g, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-7 h-7 rounded-lg bg-indigo-100/80 border border-indigo-200/50 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          {/* <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <h2 className="text-lg font-bold text-gray-800 mb-6">
              Promotion Timeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {uhclEvent.timeline.map((phase, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-violet-600 mb-3">
                    {phase.weeks}
                  </p>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-300 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}

          {/* Potential Partners */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/70 shadow-[0_4px_20px_rgba(109,40,217,0.07)]">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Potential Partners
            </h2>
            <div className="flex flex-wrap gap-2">
              {uhclEvent.partners.map((p, i) => (
                <span
                  key={i}
                  className="text-sm bg-violet-50/80 backdrop-blur-sm text-indigo-700 border border-violet-200/60 rounded-full px-4 py-1.5 font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default EventsPage;
