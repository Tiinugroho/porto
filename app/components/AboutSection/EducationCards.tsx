"use client"

import type React from "react"
import { useState } from "react"
// Remove this import
// import { ChevronLeft, ChevronRight, Award, BookOpen, Code, Palette } from 'lucide-react'

// Add custom SVG icons
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline
      points="15,18 9,12 15,6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline
      points="9,18 15,12 9,6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline
      points="16,18 22,12 16,6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="8,6 2,12 8,18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BookOpenIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PaletteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13.5" cy="6.5" r=".5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="10.5" r=".5" stroke="currentColor" strokeWidth="2" />
    <circle cx="8.5" cy="7.5" r=".5" stroke="currentColor" strokeWidth="2" />
    <circle cx="6.5" cy="12.5" r=".5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AwardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
    <polyline
      points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

interface EducationCard {
  id: number
  title: string
  subtitle: string
  description: string
  skills: string[]
  icon: React.ReactNode
  color: string
  bgGradient: string
}

// Update the educationCards array to use the new icons:
const educationCards: EducationCard[] = [
  {
    id: 1,
    title: "Sistem Informasi",
    subtitle: "Bachelor's Degree",
    description:
      "Mendalami Konsep Fundamental Computer Science, Algoritma, Struktur Data, dan Pengembangan Software. Fokus pada Pemecahan Masalah Kompleks dan Implementasi Solusi Teknologi.",
    skills: ["Algoritma & Struktur Data", "Database Design", "Software Engineering", "System Analysis", "Web Development", "Laravel", "React", "PHP", "JavaScript", "C++", "MySQL"],
    icon: <CodeIcon />,
    color: "#C6F10E",
    bgGradient: "from-[#C6F10E]/20 to-[#40ffaa]/20",
  },
  {
    id: 2,
    title: "Matematika dan Ilmu Pengetahuan Alam",
    subtitle: "Vocational Education",
    description:
      "Mendalami Fondasi dalam Matematika dan Ilmu Pengetahuan Alam.",
    skills: ["Math","Physics", "Chemistry", "Biology", "Problem Solving", "Analytical Thinking"],
    icon: <AwardIcon />,
    color: "#4ecdc4",
    bgGradient: "from-[#4ecdc4]/20 to-[#44a08d]/20",
  },
]

const EducationCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % educationCards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + educationCards.length) % educationCards.length)
  }

  const currentCard = educationCards[currentIndex]

  return (
    <div className="relative">
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className={`bg-gradient-to-br ${currentCard.bgGradient} backdrop-blur-sm border border-white/10 p-8 min-h-[500px] transition-all duration-500 ease-in-out`}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${currentCard.color}20`, border: `2px solid ${currentCard.color}` }}
            >
              <div style={{ color: currentCard.color }}>{currentCard.icon}</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{currentCard.title}</h3>
              <p className="text-gray-400 font-medium">{currentCard.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">{currentCard.description}</p>

          {/* Skills */}
          <div className="mb-8">
            <h4 className="text-white font-semibold mb-4 text-lg">Key Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {currentCard.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevCard}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 group"
            >
              <div className="group-hover:-translate-x-1 transition-transform duration-200">
                <ChevronLeftIcon />
              </div>
              Previous
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {educationCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 group"
            >
              Next
              <div className="group-hover:translate-x-1 transition-transform duration-200">
                <ChevronRightIcon />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Card Counter */}
      <div className="text-center mt-4">
        <span className="text-gray-400 text-sm">
          {currentIndex + 1} of {educationCards.length} Contents
        </span>
      </div>
    </div>
  )
}

export default EducationCards
