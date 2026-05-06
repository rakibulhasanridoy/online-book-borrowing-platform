'use client'
import React from 'react'
import Link from 'next/link'
import 'animate.css'



export const Banner = () => {
  return (
    <div>
      <section className="relative h-[819px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-60 scale-105" src="https://i.ibb.co.com/Xf70wLWw/unnamed.png" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">


          <h1
            className="font-h1 text-h1 mb-lg text-white animate__animated animate__fadeInDown"
            style={{ animationDuration: '0.9s', animationFillMode: 'both' }}
          >
            Find Your Next Read
          </h1>



          <p
            className="font-body-lg text-body-lg text-white/80 mb-xl max-w-2xl mx-auto animate__animated animate__fadeIn"
            style={{ animationDuration: '1s', animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            Explore a curated collection of timeless classics and modern masterpieces.
            Your personal digital archive for scholarly pursuits and literary leisure.
          </p>

            <div
            className="flex flex-col sm:flex-row items-center justify-center gap-md animate__animated animate__fadeInUp"
            style={{ animationDuration: '0.8s', animationDelay: '0.55s', animationFillMode: 'both' }}
          >
            <Link href="/allbooks" className="bg-on-tertiary-container text-surface-container-lowest px-xl py-md rounded-lg font-label-md shadow-lg shadow-on-tertiary-container/20 hover:scale-105 transition-transform active:scale-95">
  Browse Now
  </Link>
<Link href="https://www.allbookstores.com/" className="border border-outline-variant text-white px-xl py-md rounded-lg font-label-md hover:bg-surface-container/20 transition-colors">
              Learn More
              </Link>
          </div>
        </div>   
      </section>
      <section className="bg-on-tertiary-container py-4 overflow-hidden">
      <div className="marquee-track space-x-12 whitespace-nowrap">
        <span className="text-surface-container-lowest font-label-md flex items-center gap-2 uppercase tracking-widest">
          New Arrivals: The Silent Forest by Ayesha Rahman <span className="material-symbols-outlined text-xs"></span> JavaScript Essentials by David Miller <span className="material-symbols-outlined text-xs"></span>The Stars Above Us by Nusrat Jahan<span className="material-symbols-outlined text-xs"></span>Hidden Truth by Tanvir Hasan<span className="material-symbols-outlined text-xs"></span>Special
          Discount on Memberships<span className="material-symbols-outlined text-xs"></span>Rare Manuscripts<span className="material-symbols-outlined text-xs"></span>
        </span>
       <span className="text-surface-container-lowest font-label-md flex items-center gap-2 uppercase tracking-widest">
          New Arrivals: The Silent Forest by Ayesha Rahman <span className="material-symbols-outlined text-xs"></span> JavaScript Essentials by David Miller <span className="material-symbols-outlined text-xs"></span>The Stars Above Us by Nusrat Jahan<span className="material-symbols-outlined text-xs"></span>Hidden Truth by Tanvir Hasan<span className="material-symbols-outlined text-xs"></span>Special
          Discount on Memberships<span className="material-symbols-outlined text-xs"></span>Rare Manuscripts<span className="material-symbols-outlined text-xs"></span>
        </span>
         <span className="text-surface-container-lowest font-label-md flex items-center gap-2 uppercase tracking-widest">
          New Arrivals: The Silent Forest by Ayesha Rahman <span className="material-symbols-outlined text-xs"></span> JavaScript Essentials by David Miller <span className="material-symbols-outlined text-xs"></span>The Stars Above Us by Nusrat Jahan<span className="material-symbols-outlined text-xs"></span>Hidden Truth by Tanvir Hasan<span className="material-symbols-outlined text-xs"></span>Special
          Discount on Memberships<span className="material-symbols-outlined text-xs"></span>Rare Manuscripts<span className="material-symbols-outlined text-xs"></span>
        </span>
      </div>
    </section>
      <main className="bg-background text-on-background font-body-md flex flex-col">
      </main>
    </div>
  )
}