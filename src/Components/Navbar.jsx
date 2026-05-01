import React from 'react'

const Navbar = () => {
  return (
    
    <div>
      
<header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-900/5">
<nav className="flex justify-between items-center h-16 px-8 max-w-screen-2xl mx-auto">
<div className="text-2xl font-bold font-serif text-slate-900 dark:text-slate-50 font-h2">ScholarArchive</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-600 font-label-md" href="#">Home</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-label-md" href="#">All Books</a>
<a className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-label-md" href="#">My Profile</a>
</div>
<div className="flex items-center space-x-4">
<div className="relative hidden lg:block">
<input className="bg-surface-container-low border-none rounded-full px-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-on-tertiary-container/20" placeholder="Search archives..." type="text"/>
</div>
<div className="flex items-center space-x-2">
 
  
  <button className="flex items-center justify-center bg-[#b57a00] hover:bg-[#966500] text-white px-8 py-3 rounded-xl transition-all active:scale-95 duration-200">
  <span className="font-label-md">Logout</span>
</button>
</div>
</div>
</nav>
</header>

<section className="relative h-[819px] flex items-center justify-center overflow-hidden bg-surface-container-lowest">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 scale-105" data-alt="A grand, high-ceilinged classNameical library filled with towering mahogany bookshelves and soft, warm sunlight filtering through large arched windows. The atmosphere is quiet and scholarly, with dust motes dancing in the light. The color palette features deep browns, warm ambers, and soft slate grays, creating a serene and premium intellectual environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD56gaHqAR46mDdY8AfmSz87Ud4zmFpb5wdRohMVymEuhHXFN0V_jL1-1-jmxrcwgxyHtMReJkM9gQNJDhXhkYeAfJwGMJAHV3Vl1pRS9Q54PEcIhKWAY7VPZ5kcYIUzy6pRyP-zxPifHHtrM_1w9izFF630IoCyLnuI6G7_ev45-9CSaqav2eNpkOPoSkX06f6YlIsYRhnSing3b11rb5KZ6qZKMN0A-I0XaH-kw_MD4kS_sKzi50GDkMWSIecA4-cdTGqe36MUlM2"/>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<h1 className="font-h1 text-h1 mb-lg text-primary">Find Your Next Read</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">
                    Explore a curated collection of timeless classNameics and modern masterpieces. Your personal digital archive for scholarly pursuits and literary leisure.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-md">
<button className="bg-on-tertiary-container text-surface-container-lowest px-xl py-md rounded-lg font-label-md shadow-lg shadow-on-tertiary-container/20 hover:scale-105 transition-transform active:scale-95">
                        Browse Now
                    </button>
<button className="border border-outline-variant text-on-surface px-xl py-md rounded-lg font-label-md hover:bg-surface-container transition-colors">
                        Learn More
                    </button>
</div>
</div>
</section>

    </div>
  )
}

export default Navbar