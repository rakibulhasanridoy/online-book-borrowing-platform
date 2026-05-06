'use client'
import React from 'react'
import { useAnimateOnScroll } from '@/lib/useAnimateOnScroll'


const authors = [
  {
    name: 'David Miller',
    works: '12 Works',
    src: 'https://i.ibb.co.com/dsQxGs79/handsome-bearded-guy-posing-against-white-wall.jpg',
  },

  {
    name: 'Ayesha Rahman',
    works: '8 Works',
    src: 'https://i.ibb.co.com/TDG1Mk84/charming-girl-stands-corridor.jpg',
  },
  {
    name: 'Dr. Arif Chowdhury',
    works: '25 Works',
    src: 'https://i.ibb.co.com/CsJLn8N8/young-bearded-man-with-striped-shirt.jpg',
  },
  {
    name: 'Nusrat Jahan',
    works: '5 Works',
    src: 'https://i.ibb.co.com/KxGn9J2X/portrait-attractive-stylish-smiling-woman-walking-city-street-pink-coat-floral-dress.jpg',
  },

  {
    name: 'Tanvir Hasan',
    works: '19 Works',
    src: 'https://i.ibb.co.com/23GrxxhL/people-smiling-men-handsome-cheerful.jpg',
  },
]

 const AuthorCard = ({ name, works, src, delay }) => {
  const { ref, className, style } = useAnimateOnScroll('zoomIn', { delay, threshold: 0.1 })
  return (
     <div
      ref={ref}
      className={`flex flex-col items-center text-center group cursor-pointer ${className}`}
      style={style}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-on-tertiary-container transition-all group-hover:scale-105 duration-300">
        <img className="w-full h-full object-cover" src={src} alt={name} />
      </div>
       <span className="font-label-md mt-md text-primary">{name}</span>
      <span className="font-caption text-on-surface-variant">{works}</span>
    </div>
  )
}
 const Authors = () => {
  const { ref: titleRef, className: titleClass, style: titleStyle } = useAnimateOnScroll('fadeInUp')
  return (
     <div>
      <section className="py-xl px-8 max-w-screen-2xl mx-auto">
        <h2
          ref={titleRef}
          className={`font-h2 text-h2 text-primary mb-xl text-center ${titleClass}`}
          style={titleStyle}
        >
          Revered Authors
        </h2>
        <div className="flex flex-wrap justify-center gap-xl">
          {authors.map((author, i) => (
            <AuthorCard key={author.name} {...author} delay={i * 120} />
          ))}
        </div>
        </section>
    </div>
  )
}
export default Authors