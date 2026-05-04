'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

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
        <Link href="/" className="text-2xl font-bold font-serif text-slate-900">ScholarArchive</Link>

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
            <input className="bg-slate-100 border-none rounded-full px-4 py-1.5 text-sm w-52 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
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
    </header>
  )
}

export default Navbar