'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'
import { Menu, X } from 'lucide-react'
const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/' },
    { label: 'All Books', href: '/allbooks' },
    { label: 'My Profile', href: '/profile' },
  ]

  const handleLogout = async () => {
    await authClient.signOut()
    toast.success('Logged out successfully!')
    router.push('/')
    router.refresh()
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="flex justify-between items-center h-16 px-8 max-w-screen-2xl mx-auto">

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link href="/" className="text-2xl font-bold font-serif text-slate-900">
            ScholarArchive
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ label, href }) => (
            <Link key={href} href={href}
              className={pathname === href
                ? 'text-amber-600 font-semibold border-b-2 border-amber-600 font-label-md'
                : 'text-slate-600 hover:text-slate-900 transition-colors font-label-md'}>
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <input
              className="bg-slate-100 border-none rounded-full px-4 py-1.5 text-sm w-52 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
              placeholder="Search archives..." type="text" />
          </div>

          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-3">
              {user.image && (
                <img src={user.image} alt="avatar"
                  className="w-8 h-8 rounded-full border-2 border-amber-400 object-cover" />
              )}
              <span className="text-sm font-medium text-slate-700 hidden lg:block">
                {user.name || user.email?.split('@')[0]}
              </span>
              <button onClick={handleLogout}
                className="bg-[#b57a00] hover:bg-[#966500] text-white px-5 py-2 rounded-xl text-sm font-medium transition-all active:scale-95">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login"
              className="bg-[#b57a00] hover:bg-[#966500] text-white px-5 py-2 rounded-xl text-sm font-medium transition-all active:scale-95">
              Login
            </Link>
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg px-6 py-4 flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-amber-50 text-amber-600 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}





export default Navbar