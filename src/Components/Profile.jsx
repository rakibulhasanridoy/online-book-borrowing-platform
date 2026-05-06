'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import {
  User, Mail, Calendar, Library, BookOpen,
  BookMarked, Star, Pencil, ShieldCheck
} from 'lucide-react'
const StatBadge = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
    <div className="flex items-center gap-3 text-slate-600">
      <Icon size={16} className="text-slate-400" />
     <span className="text-sm">{label}</span>
   </div>
    <span className={`font-bold text-sm ${color}`}>{value}</span>
  </div>
)
const InfoRow = ({ label, value }) => (
  <div className="flex flex-col gap-0.5">
   <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">{label}</span>
     <span className="text-slate-800 font-medium">{value}</span>
    </div>
)




export default function Profile() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  useEffect(() => {
    if (!isPending && !user) {
      router.replace('/login')
    }
  }, [isPending, user, router])


  if (isPending) {
    return (
        <main className="pt-28 pb-16 px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center gap-4 py-24">
           <div className="w-20 h-20 rounded-full bg-slate-200 animate-pulse" />
          <div className="w-48 h-6 rounded bg-slate-200 animate-pulse" />
        <div className="w-32 h-4 rounded bg-slate-200 animate-pulse" />
        </div>
        </main>
    )
  }


  if (!user) return null
   const joinDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Member'
   const avatarUrl = user.image || null
  const initials = (user.name || user.email || 'U')
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)



  return (
    <main className="pt-28 pb-16 px-4 md:px-8 max-w-screen-xl mx-auto">
    
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
          <div className="relative shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg ring-2 ring-amber-400"
            />
          ) : (
              <div className="w-24 h-24 rounded-full bg-amber-100 border-4 border-white shadow-lg ring-2 ring-amber-400 flex items-center justify-center">
              <span className="text-amber-700 text-2xl font-bold font-serif">{initials}</span>
              </div>
          )}
            <span className="absolute bottom-1 right-1 bg-amber-500 rounded-full p-1 shadow">
            <ShieldCheck size={12} className="text-white" />
          </span>
           </div>
          <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900 font-serif">{user.name || 'Scholar'}</h1>
          <p className="text-slate-500 mt-1">{user.email}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
              Active Member
              </span>
            <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
              Full Archive Access
            </span>
          </div>
        </div>
        <div className="md:ml-auto mt-2 md:mt-0">
          <Link
            href="/profile/update"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all active:scale-95 shadow-sm"
          >
            <Pencil size={15} />
            Update Information
             </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-800">Personal Information</h2>
            <Link
              href="/profile/update"
              className="flex items-center gap-1.5 text-amber-600 text-sm font-medium hover:underline"
            >
              <Pencil size={14} />
              Update Information
            </Link>
          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoRow label="Full Name" value={user.name || '—'} />
             <InfoRow label="Email Address" value={user.email} />
            <InfoRow label="Member Since" value={joinDate} />
            <InfoRow label="Library Access" value="Full Archive Access" />
          </div>
        </div>

        
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">Account Details</h2>
           <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <User size={16} className="text-amber-500" />
              <div>
                <p className="text-xs text-slate-400">Display Name</p>
                <p className="text-sm font-medium text-slate-800">{user.name || 'Not set'}</p>
              </div>
               </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Mail size={16} className="text-amber-500" />
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-sm font-medium text-slate-800">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Calendar size={16} className="text-amber-500" />
              <div>
                <p className="text-xs text-slate-400">Joined</p>
                <p className="text-sm font-medium text-slate-800">{joinDate}</p>
              </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <Library size={16} className="text-amber-500" />
              <div>
                <p className="text-xs text-slate-400">Access Level</p>
                <p className="text-sm font-medium text-slate-800">Full Archive</p>
              </div>
          </div>
           </div>
           </div>



         <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">Recent Reads</h2>
          <div className="flex flex-col gap-3">
            {[
              { title: 'The Ethics of AI', author: 'M. Sterling', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=80&h=110&fit=crop' },
                { title: 'Linguistic Relativity', author: 'Dr. J. Aris', img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=80&h=110&fit=crop' },
              { title: 'Quantum Wonders', author: 'Dr. Arif Chowdhury', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=80&h=110&fit=crop' },
              ].map(book => (
              <div key={book.title} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <img src={book.img} alt={book.title} className="w-12 h-16 rounded-lg object-cover shadow-sm" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{book.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{book.author}</p>
                </div>
                </div>
            ))}
          </div>
          </div>
        </div>
      </main>
  )
}