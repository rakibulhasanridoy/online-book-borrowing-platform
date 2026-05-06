'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'

  const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', image: '', password: '' })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
      const { data, error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      image: form.image || undefined,
      callbackURL: '/login',
    })
      if (error) {
      if (error.code === 'USER_ALREADY_EXISTS') toast.error('Email already registered.')
      else if (error.code === 'PASSWORD_TOO_SHORT') toast.error('Password must be at least 8 characters.')
      else toast.error(error.message || 'Registration failed.')
    } else {
      toast.success('Account created! Please log in.')
      router.push('/login')
    }
    setLoading(false)
  }

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: 'google', callbackURL: '/' })
  }


  
  const fields = [
    { label: 'Full Name',  name: 'name',type: 'text', placeholder: 'John Doe', required: true  },
    { label: 'Email',  name: 'email',type: 'email', placeholder: 'scholar@archive.org', required: true  },
    { label: 'Photo URL (optional)',  name: 'image',    type: 'url',      placeholder: 'https://example.com/photo.jpg',required: false },
    { label: 'Password',name: 'password', type: 'password', placeholder: '••••••••', required: true  },
  ]

  return (
    <div className="min-h-screen pt-16 overflow-x-hidden"
      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,221,184,0.15) 0%, #f7f9fb 70%)' }}>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 min-h-[calc(100vh-64px)] px-6 py-16 max-w-6xl mx-auto w-full">

          <div className="flex-1 flex flex-col items-start gap-6 max-w-lg">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight" style={{ fontFamily: 'Newsreader, serif', letterSpacing: '-0.02em' }}>
            Join the Archive. Begin Your Journey.
           </h1>
           <p className="text-lg text-slate-500 leading-relaxed max-w-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Thousands of scholars have already made ScholarArchive their intellectual home.
            </p>
            <div className="w-full max-w-[320px] aspect-square rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://i.ibb.co.com/Xf70wLWw/unnamed.png"
              alt="Library" className="w-full h-full object-cover"
            />
          </div>
           </div>
          <div className="w-full max-w-md">
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl p-10 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Newsreader, serif' }}>Create Account</h2>
              <p className="text-slate-500 text-sm mt-1">Join our archive and start your journey.</p>
              </div>

            {/* Form */}
              <form onSubmit={handleRegister} className="flex flex-col gap-4">
              {fields.map(({ label, name, type, placeholder, required }) => (
                <div key={name} className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{label}</label>
                  <input
                    name={name} type={type} required={required}
                    value={form[name]} onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg border-0 outline-none focus:ring-2 focus:ring-teal-300 focus:bg-white transition-all text-sm text-slate-800 placeholder-slate-400"
                  />
                </div>
              ))}
                <button
                type="submit" disabled={loading}
                className="w-full py-3 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60"
                style={{ background: '#006b5f' }}
              >
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
                {loading ? 'Creating account…' : 'Register'}
                </button>
               </form>
               <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">or join with</span>
                <div className="flex-1 h-px bg-slate-200" />
                </div>
               <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 py-2.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-[#006b5f] hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
        </div>
  )
}


export default Register