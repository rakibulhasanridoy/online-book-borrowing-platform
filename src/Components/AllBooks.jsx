'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CATEGORIES = ['All', 'Story', 'Tech', 'Science']

const AllBooks = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch('/Data.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(setBooks)
  }, [])
  const filtered = books.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory
    return matchesSearch && matchesCategory
  })


  return (
    <main className="flex-grow pt-32 pb-16 px-8 max-w-screen-2xl mx-auto w-full">
       <header className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Universal Library Catalog</h1>
      <p className="text-slate-500 mb-10">
          Search through centuries of digital wisdom across sciences, history, and the arts.
        </p>
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
           <input
            className="w-full pl-12 pr-32 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400/20 outline-none transition-all shadow-sm"
            placeholder="Search by title or author..."
            type="text" value={search}
            onChange={e => setSearch(e.target.value)}
          />
         <div className="absolute inset-y-2 right-2">
            <button className="bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-all active:scale-95">
              Search
            </button>
          </div>
          </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
        <aside>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-amber-600">filter_list</span>
              Filters
            </h3>



               <section className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Categories</h4>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat
                         ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}>
                    {cat === 'All' ? ' All Books' :
                     cat === 'Story' ? ' Story & Narrative' :
                     cat === 'Tech' ? ' Tech & Engineering' :
                     ' Physical Sciences'}
                      {activeCategory === cat && (
                      <span className="float-right text-amber-500">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </aside>



        <div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-800">{filtered.length}</span> of {books.length} books
              {activeCategory !== 'All' && (
                <span className="ml-2 bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  {activeCategory}
                </span>
              )}
            </p>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <span className="material-symbols-outlined text-6xl block mb-4">search_off</span>
              <p className="text-lg">No books found for &quot;{search || activeCategory}&quot;</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All') }}
                className="mt-4 text-amber-600 hover:underline text-sm">Clear filters</button>
            </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((book) => (
                <div key={book.id}
                  className="bg-white rounded-xl overflow-hidden flex flex-col shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-slate-100">
                  <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                    <img src={book.image_url} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full mb-2 inline-block self-start">
                      {book.category}
                    </span>
                    <h3 className="font-semibold text-slate-900 leading-snug mb-1 line-clamp-2">{book.title}</h3>
                    <p className="text-xs text-slate-400 mb-4">{book.author}</p>
                    <Link href={`/books/${book.id}`}
                      className="mt-auto text-center w-full py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-[#b57a00] hover:text-white hover:border-[#b57a00] transition-colors">
                      Details
                      </Link>
                  </div>
                </div>
              ))}
              </div>
          )}
        </div>
      </div>
      </main>
  )
}
export default AllBooks