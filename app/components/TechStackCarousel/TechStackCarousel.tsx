"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaLaravel, FaPhp, FaJs, FaReact, FaDatabase } from "react-icons/fa"
import type { JSX } from "react/jsx-runtime"

interface TechStackItem {
  name: string
  icon: JSX.Element
  color: string
}

interface TechStackCarouselProps {
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

const techStack: TechStackItem[] = [
  { name: "Laravel", icon: <FaLaravel className="text-red-500" />, color: "#FF2D20" },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" />, color: "#777BB4" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, color: "#F7DF1E" },
  { name: "MySQL", icon: <FaDatabase className="text-blue-700" />, color: "#4479A1" },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" />, color: "#61DAFB" },
]

export default function TechStackCarousel({
  speed = 20,
  direction = "left",
  pauseOnHover = false,
}: TechStackCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.1 })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  // Create enough duplicates to ensure seamless looping
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack, ...techStack, ...techStack, ...techStack]

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-[#1D2733] to-[#19222D]"
    >
      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-[#19222D]/50 backdrop-blur-sm z-0" />

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 z-10 relative">
        <motion.h2
          className="text-3xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack yang digunakan
        </motion.h2>
        <motion.div
          className="h-1 w-24 bg-[#C6F10E] mx-auto mt-2"
          initial={{ width: 0 }}
          animate={inView ? { width: 96 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Carousel */}
      <div className="relative z-10">
        {/* Fade mask kiri dan kanan */}
        <div className="absolute top-0 left-0 w-16 h-full z-20 bg-gradient-to-r from-[#19222D] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 h-full z-20 bg-gradient-to-l from-[#19222D] to-transparent pointer-events-none" />

        {/* Carousel content */}
        <div
          className={`flex gap-8 py-4 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
          style={{
            animation: `scroll-${direction} ${(techStack.length * 128 + techStack.length * 32) / speed}s linear infinite`,
            width: "fit-content",
          }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] flex-shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl p-3 mb-2 border border-white/20 shadow-lg hover:shadow-[#C6F10E]/20 transition-all duration-300 hover:border-[#C6F10E]/50">
                <div className="text-3xl">{tech.icon}</div>
              </div>
              <span className="text-sm font-medium text-white/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe CSS */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-120px * ${techStack.length} - ${techStack.length * 32}px));
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-120px * ${techStack.length} - ${techStack.length * 32}px));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
