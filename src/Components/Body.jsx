'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BookOpen, Users, Library, Star } from 'lucide-react'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'


const stats = [
  { icon: BookOpen, value: '12,000+', label: 'Books in Collection', delay: 0 },
  { icon: Users,    value: '8,400+',  label: 'Active Scholars',     delay: 150 },
  { icon: Library,  value: '340+',    label: 'Rare Manuscripts',    delay: 300 },
  { icon: Star,     value: '4.9',     label: 'Average Rating',      delay: 450 },
]
const StatCard = ({ icon: Icon, value, label, delay }) => {
  const { ref, className, style } = useAnimateOnScroll('flipInX', { delay, threshold: 0.2 })
   return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-xl bg-white rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-shadow ${className}`}
      style={style}
    >
      <div className="w-14 h-14 rounded-full bg-on-tertiary-container/10 flex items-center justify-center mb-md group-hover:bg-on-tertiary-container/20 transition-colors">
        <Icon size={26} className="text-on-tertiary-container" strokeWidth={1.5} />
      </div>
        <span className="font-h2 text-h2 text-primary font-bold">{value}</span>
      <span className="font-body-md text-on-surface-variant mt-xs">{label}</span>
    </div>
  )
}
const howItWorks = [
  { step: '01', title: 'Browse the Catalog',  desc: 'Search by title, author, or category to discover your next great read.', anim: 'fadeInLeft'  },
   { step: '02', title: 'Borrow Instantly',    desc: 'Click borrow to claim your copy. No queues, no waiting — just reading.', anim: 'fadeInUp'   },
  { step: '03', title: 'Read & Return',       desc: 'Enjoy your book digitally, then return it with a single click when done.',  anim: 'fadeInRight' },
]

const HowStep = ({ step, title, desc, anim, delay }) => {
  const { ref, className, style } = useAnimateOnScroll(anim, { delay, threshold: 0.15 })
      return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center px-lg ${className}`}
      style={style}
    >
      <span
        className="text-6xl font-bold mb-md select-none"
        style={{ fontFamily: 'Newsreader, serif', color: 'rgba(0,107,95,0.12)', lineHeight: 1 }}
      >
        {step}
         </span>
      <h3 className="font-h3 text-h3 text-primary mb-sm">{title}</h3>
      <p className="font-body-md text-on-surface-variant max-w-xs">{desc}</p>
     </div>
  )
}



const Body = () => {
  const { ref: statsHeadingRef, className: statsHeadingClass, style: statsHeadingStyle } = useAnimateOnScroll('fadeInDown')
  const { ref: howHeadingRef, className: howHeadingClass, style: howHeadingStyle } = useAnimateOnScroll('fadeInDown')
  return (
    <div>
     

      <section className="py-xl px-8 max-w-screen-2xl mx-auto">
        <div
          ref={statsHeadingRef}
          className={`text-center mb-xl ${statsHeadingClass}`}
          style={statsHeadingStyle}
        >
          <h2 className="font-h2 text-h2 text-primary">The Archive by the Numbers</h2>
          <p className="font-body-lg text-on-surface-variant mt-sm">
            A community of curious minds and the books that inspire them.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>



      <div className="mx-8 border-t border-slate-100" />
    </div>
  )
}
export default Body