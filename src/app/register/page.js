'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'


export default function RegisterPage() {
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
   { label: 'Full Name',            name: 'name',     type: 'text',     placeholder: 'John Doe',                     required: true  },
    { label: 'Email',                name: 'email',    type: 'email',    placeholder: 'scholar@archive.org',           required: true  },
    { label: 'Photo URL (optional)', name: 'image',    type: 'url',      placeholder: 'https://example.com/photo.jpg', required: false },
{ label: 'Password',             name: 'password', type: 'password', placeholder: '••••••••',                     required: true  },
  ]
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '64px',
      background: 'radial-gradient(circle at 50% 50%, rgba(255,221,184,0.15) 0%, #f7f9fb 70%)',
    }}>
 <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',
        minHeight: 'calc(100vh - 64px)',
        padding: '4rem 2rem',
        maxWidth: '72rem',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}>

        {/* Left panel */}
        <div style={{
          flex: '1 1 320px',
          maxWidth: '480px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#0f172a',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            fontFamily: 'Newsreader, serif',
            margin: 0,
           }}>
            Join the Archive. Begin Your Journey.
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            lineHeight: 1.6,
            fontFamily: 'Manrope, sans-serif',
            margin: 0,
            maxWidth: '20rem',
         }}>
            Thousands of scholars have already made ScholarArchive their intellectual home.
          </p>
          <div style={{
            width: '100%',
            maxWidth: '320px',
            aspectRatio: '1',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          }}>
            <img
              src="https://i.ibb.co.com/Xf70wLWw/unnamed.png"
              alt="Library"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>



        <div style={{ flex: '1 1 320px', maxWidth: '440px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid #e2e8f0',
            borderRadius: '1rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.875rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                Create Account
           </h2>
              <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem', marginBottom: 0 }}>
                Join our archive and start your journey.
              </p>
              </div>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {fields.map(({ label, name, type, placeholder, required }) => (
                  <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <label style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: 'Manrope, sans-serif',
                  }}>
                    {label}
                </label>
                  <input
                    name={name}
                    type={type}
                    required={required}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={{
                      width: '100%',
                      padding: '0.625rem 1rem',
                      background: '#f1f5f9',
                      border: 'none',
                      borderRadius: '0.5rem',
                      outline: 'none',
                      fontSize: '0.875rem',
                      color: '#1e293b',
                      fontFamily: 'Manrope, sans-serif',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}



              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: '#006b5f',
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.6 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Manrope, sans-serif',
                  transition: 'opacity 0.2s',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '1rem', fontVariationSettings: "'FILL' 1" }}>person_add</span>
                {loading ? 'Creating account\u2026' : 'Register'}
              </button>
            </form>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
              <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                or join with
              </span>
              <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            </div>



            <button
              onClick={handleGoogle}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '0.625rem',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                background: '#fff',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#334155',
                cursor: 'pointer',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
                 <svg style={{ width: '1.25rem', height: '1.25rem' }} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
              Already have an account?{' '}
              <Link href="/login" style={{ fontWeight: 600, color: '#006b5f', textDecoration: 'none' }}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}