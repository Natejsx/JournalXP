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
  DollarSign,
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
    "Complete one full guided reflection path in a calm, intentional environment — and leave feeling mentally clearer than when you walked in.",
  date: "Coming Soon",
  location: "UHCL Campus — Quiet Space (TBD)",
  duration: "~1 hour – 1 hour 15 mins",
  budget: "$100 budget for snacks, posters & marketing",
  agenda: [
    {
      time: "5:15 PM",
      duration: "15 min",
      title: "Arrive & Settle In",
      description:
        "Soft lofi music, dim lighting, and snacks on the table. No ice breakers — just vibe. Grab a seat, grab a snack, and decompress.",
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
        "Everyone picks a reflection path and completes it silently. Create an account if you don't have one — it takes 30 seconds. Show the completion screen and claim your sticker.",
      icon: <Coffee className="h-5 w-5" />,
    },
    {
      time: "6:10 PM",
      duration: "10–15 min",
      title: "Optional Sharing",
      description:
        "For anyone who'd like to share what came up during their reflection. Zero pressure — totally optional, fully respected.",
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

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Hero Card */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white shadow-2xl p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)]" />
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-4">
                {uhclEvent.tag}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {uhclEvent.title}
              </h1>
              <p className="text-violet-200 text-xl font-medium mb-6">
                {uhclEvent.subtitle}
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                {uhclEvent.tagline}
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/15 rounded-lg px-4 py-2 text-sm">
                  <CalendarDays className="h-4 w-4 text-violet-200" />
                  <span>{uhclEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-lg px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 text-violet-200" />
                  <span>{uhclEvent.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-lg px-4 py-2 text-sm">
                  <MapPin className="h-4 w-4 text-violet-200" />
                  <span>{uhclEvent.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/15 rounded-lg px-4 py-2 text-sm">
                  <DollarSign className="h-4 w-4 text-violet-200" />
                  <span>{uhclEvent.budget}</span>
                </div>
              </div>
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
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-violet-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
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
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                The Vibe
              </h2>
              <ul className="space-y-2">
                {uhclEvent.vibe.map((v, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Goals */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Content Creation Goals
              </h2>
              <ul className="space-y-2">
                {uhclEvent.contentGoals.map((g, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
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
          </div>

          {/* Potential Partners */}
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-6 border border-indigo-100">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Potential Partners
            </h2>
            <div className="flex flex-wrap gap-2">
              {uhclEvent.partners.map((p, i) => (
                <span
                  key={i}
                  className="text-sm bg-white text-indigo-700 border border-indigo-200 rounded-full px-4 py-1.5 font-medium"
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
