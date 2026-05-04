'use client'
import React from 'react'
import { Drama, ClipboardClock, BookOpenCheck } from 'lucide-react'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

const MemberCard = ({ icon: Icon, title, description, delay, iconBg, iconHoverBg }) => {
  const { ref, className, style } = useAnimateOnScroll('fadeInUp', { delay })
  return (
    <div
      ref={ref}
      className={`bg-white p-xl rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group ${className}`}
      style={style}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-lg transition-colors group-hover:bg-on-tertiary-container"
        style={{ background: iconBg }}
      >
        <Icon />
      </div>
      <h3 className="font-h3 text-h3 mb-md">{title}</h3>
      <p className="font-body-md text-on-surface-variant">{description}</p>
    </div>
  )
}

const Membership = () => {
  const { ref: headingRef, className: headingClass, style: headingStyle } = useAnimateOnScroll('fadeInDown')

  const cards = [
    {
      icon: BookOpenCheck,
      title: 'Early Access',
      description: 'Be the first to borrow new arrivals and rare digital restorations 48 hours before the general public.',
      delay: 0,
      iconBg: 'rgba(0,107,95,0.1)',
    },
    {
      icon: ClipboardClock,
      title: 'Zero Late Fees',
      description: 'Read at your own pace. Members enjoy unlimited renewal periods on all standard collection items.',
      delay: 150,
      iconBg: 'rgba(0,107,95,0.1)',
    },
    {
      icon: Drama,
      title: 'Exclusive Events',
      description: 'Invitations to virtual author signings, deep-dive workshops, and intellectual salons twice a month.',
      delay: 300,
      iconBg: '#F8F1E7',
    },
  ]

  return (
    <div>
      <section className="bg-surface-container py-xl">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div
            ref={headingRef}
            className={`text-center mb-xl ${headingClass}`}
            style={headingStyle}
          >
            <h2 className="font-h2 text-h2 text-primary">Elevated Membership</h2>
            <p className="font-body-lg text-on-surface-variant mt-sm">Join the inner circle of literary connoisseurs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {cards.map((card) => (
              <MemberCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Membership