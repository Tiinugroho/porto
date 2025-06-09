"use client"

import type React from "react"
import { useEffect, useRef, useState, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export interface AnimatedContentProps {
  children: ReactNode
  distance?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  duration?: number
  ease?: string
  initialOpacity?: number
  animateOpacity?: boolean
  scale?: number
  threshold?: number
  delay?: number
  className?: string
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 1,
  ease = "power2.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    const element = elementRef.current
    if (!element) return

    // Clear any existing ScrollTriggers for this element
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === element) {
        trigger.kill()
      }
    })

    // Calculate initial transform values
    const getInitialTransform = () => {
      const multiplier = reverse ? -1 : 1

      if (direction === "horizontal") {
        return {
          x: distance * multiplier,
          y: 0,
        }
      } else {
        return {
          x: 0,
          y: distance * multiplier,
        }
      }
    }

    const initialTransform = getInitialTransform()

    // Set initial state
    const initialState: any = {
      ...initialTransform,
      scale: scale !== 1 ? scale : undefined,
      force3D: true,
    }

    if (animateOpacity) {
      initialState.opacity = initialOpacity
    }

    gsap.set(element, initialState)

    // Create animation
    const animation = gsap.to(element, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: animateOpacity ? 1 : undefined,
      duration,
      ease,
      delay,
      force3D: true,
    })

    // Create ScrollTrigger
    let scrollTrigger: ScrollTrigger | null = null

    try {
      scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: `top ${100 - threshold * 100}%`,
        end: `bottom ${threshold * 100}%`,
        animation: animation,
        toggleActions: "play none none reverse",
        onToggle: (self) => {
          // Optional: Add any toggle logic here
        },
      })
    } catch (error) {
      console.warn("ScrollTrigger creation failed:", error)
      // Fallback: just play the animation without scroll trigger
      animation.play()
    }

    // Cleanup function
    return () => {
      try {
        if (scrollTrigger) {
          scrollTrigger.kill()
        }
        if (animation) {
          animation.kill()
        }
      } catch (error) {
        console.warn("Animation cleanup failed:", error)
      }
    }
  }, [isMounted, distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, threshold, delay])

  // Don't render anything on server-side
  if (!isMounted) {
    return (
      <div className={className} style={{ opacity: 0 }}>
        {children}
      </div>
    )
  }

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default AnimatedContent
