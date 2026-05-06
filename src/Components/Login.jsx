'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'
import { Mail, Lock, ArrowRight, Library } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await authClient.signIn.email({ email, password, callbackURL: '/' })
    if (error) {
      toast.error(error.message || 'Invalid email or password.')
    } else {
      toast.success('Welcome back!')
      router.push('/')
      router.refresh()
    }
    setLoading(false)
  }

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: 'google', callbackURL: '/' })
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 pt-24 pb-12">
      
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/5 rounded-full blur-[100px]"></div>
      </div>
      <div className="w-full max-w-[440px] relative z-10">
          <div className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12">         
          <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 text-teal-700 rounded-2xl mb-6 shadow-sm border border-teal-100/50">
              <Library size={32} />
           </div>
             <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 text-sm">Continue your scholarly journey</p>
             </div>
                <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                    <input
                  type="email"
                  placeholder="scholar@archive.org"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white transition-all text-slate-900 shadow-sm placeholder:text-slate-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
        </div>
            </div>
                 <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Password</label>
                    <Link href="#" className="text-xs text-teal-700 hover:text-teal-800 font-bold">Forgot?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white transition-all text-slate-900 shadow-sm placeholder:text-slate-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
                 </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-70 shadow-xl shadow-slate-900/10 mt-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
                <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
               </div>
               <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 tracking-widest">
              <span className="bg-white px-4">Social Access</span>
            </div>
          </div>
             <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-4 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>
          <p className="mt-10 text-center text-slate-500 text-sm font-medium">
            New to ScholarArchive?{' '}
            <Link href="/register" className="text-teal-700 font-bold hover:underline decoration-2 underline-offset-4">Create Account</Link>
          </p>
        </div>
         </div>
       </div>
  )
}
export default Login
