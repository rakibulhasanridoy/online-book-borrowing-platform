'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'

const TopGeneration = () => {
  const [books, setBooks] = useState([])
  const { ref: headingRef, className: headingClass, style: headingStyle } = useAnimateOnScroll('fadeInLeft')
  const { ref: linkRef, className: linkClass, style: linkStyle } = useAnimateOnScroll('fadeInRight')

  useEffect(() => {
    fetch('/Data.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => setBooks(data.slice(0, 4))) // ✅ Only top 4 books
  }, [])

  return (
    <section className="py-xl px-8 max-w-screen-2xl mx-auto">
      <div className="flex justify-between items-end mb-xl">
        <div ref={headingRef} className={headingClass} style={headingStyle}>
          <h2 className="font-h2 text-h2 text-primary">Featured Books</h2>
          <p className="text-on-surface-variant mt-sm">
            Hand-picked by our chief archivists for your intellectual journey.
          </p>
        </div>
        <Link
          ref={linkRef}
          href="/allbooks"
          className={`text-amber-600 text-sm font-medium flex items-center gap-1 hover:underline ${linkClass}`}
          style={linkStyle}
        >
          View All <span className="material-symbols-outlined text-sm">chevron_right</span>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {books.map((book, i) => (
          <SwiperSlide key={book.id}>
            <div
              className="animate__animated animate__fadeIn bg-white rounded-xl overflow-hidden flex flex-col shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${(i % 4) * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                <img src={book.image_url} alt={book.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full mb-2 inline-block self-start">
                  {book.category}
                </span>
                <h3 className="font-semibold text-slate-900 leading-snug mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-xs text-slate-400 mb-4">by {book.author}</p>
                <Link
                  href={`/books/${book.id}`}
                  className="mt-auto text-center w-full py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-[#b57a00] hover:text-white hover:border-[#b57a00] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TopGeneration