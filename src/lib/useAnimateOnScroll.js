'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Hook that triggers an Animate.css animation when the element scrolls into view.
 * @param {string} animation - Animate.css animation name e.g. 'fadeInUp'
 * @param {object} options  - IntersectionObserver options + optional delay (ms)
 */
export function useAnimateOnScroll(animation = 'fadeInUp', { threshold = 0.15, delay = 0 } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const style = {
    opacity: visible ? undefined : 0,
    animationDelay: delay ? `${delay}ms` : undefined,
    animationFillMode: 'both',
  }

  const className = visible
    ? `animate__animated animate__${animation}`
    : ''

  return { ref, className, style }
}