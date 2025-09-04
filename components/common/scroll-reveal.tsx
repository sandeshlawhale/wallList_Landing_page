"use client"
import { useEffect, useRef, type PropsWithChildren } from "react"

type ScrollRevealProps = PropsWithChildren<{
  delay?: number
  className?: string
}>

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              el.style.transition = "opacity 700ms ease, transform 700ms ease"
              el.style.opacity = "1"
              el.style.transform = "translateY(0)"
            })
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 },
    )
    el.style.opacity = "0"
    el.style.transform = "translateY(12px)"
    const timer = setTimeout(() => {
      obs.observe(el)
    }, delay)
    return () => {
      clearTimeout(timer)
      obs.disconnect()
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
