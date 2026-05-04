'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import toast from 'react-hot-toast'
import 'animate.css'

const BookDetails = ({ id }) => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  const router = useRouter()
  const [book, setBook] = useState(null)
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    if (!isPending && !user) router.push('/login')
  }, [user, isPending, router])

  useEffect(() => {
    fetch('/Data.json')
      .then(r => r.json())
      .then(data => {
        setAllBooks(data)
        setBook(data.find(b => String(b.id) === String(id)) || null)
      })
  }, [id])

  if (isPending) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
    </div>
  )
  if (!user) return null
  if (!book) return <div className="min-h-screen flex items-center justify-center text-slate-400">Book not found.</div>

  const handleBorrow = () => {
    toast.success(`"${book.title}" borrowed successfully! 🎉`)
  }

  const similar = allBooks.filter(b => b.category === book.category && b.id !== book.id).slice(0, 4)

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/allbooks" className="hover:text-amber-600">Catalog</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-500">{book.category}</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-800 font-medium">{book.title}</span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 animate__animated animate__fadeIn">
          {/* Book Cover */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <img src={book.image_url} alt={book.title}
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]" />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">{book.title}</h1>
            <p className="text-amber-600 text-xl font-medium mb-6">{book.author}</p>

            <div className="flex gap-8 mb-8 border-b border-slate-100 pb-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Available</p>
                <p className="font-bold text-slate-800">{book.available_quantity} copies left</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Category</p>
                <p className="font-bold text-slate-800">{book.category}</p>
              </div>
            </div>

            <h3 className="text-lg font-serif font-bold text-slate-900 mb-3">About the Book</h3>
            <p className="text-slate-600 leading-relaxed mb-8">{book.description}</p>

            <div className="flex gap-4 flex-wrap">
              <button onClick={handleBorrow}
                className="flex items-center gap-2 bg-[#b57a00] hover:bg-[#966500] text-white px-8 py-3 rounded-xl font-medium transition-all active:scale-95">
                <span className="material-symbols-outlined text-sm">book</span>
                Borrow This Book
              </button>
              <button className="flex items-center gap-2 border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">bookmark</span>
                Save for Later
              </button>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        {similar.length > 0 && (
          <div className="animate__animated animate__fadeInUp">
            <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">Recommendations</p>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900">Similar Scholarly Works</h2>
              <Link href="/allbooks" className="text-amber-600 text-sm font-medium flex items-center gap-1 hover:underline">
                View Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map(b => (
                <Link href={`/books/${b.id}`} key={b.id} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3 bg-slate-100">
                    <img src={b.image_url} alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h4 className="font-medium text-slate-800 text-sm leading-tight">{b.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{b.author}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookDetails