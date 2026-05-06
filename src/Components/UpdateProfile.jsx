'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import toast from 'react-hot-toast'
import { ArrowLeft, User, ImageIcon, Save, Eye } from 'lucide-react'
export default function UpdateProfile() {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [preview, setPreview] = useState(null)
  const [previewError, setPreviewError] = useState(false)
  const [saving, setSaving] = useState(false)
  const hasInitialized = useRef(false)


  useEffect(() => {
    if (!isPending && !user) {
      router.replace('/login')
    }
  }, [isPending, user, router])
  
  useEffect(() => {
    if (user && !hasInitialized.current) {
      hasInitialized.current = true
      
      setTimeout(() => {
        setName(user.name || '')
        setImageUrl(user.image || '')
        setPreview(user.image || null)
      }, 0)
    }
  }, [user])

  const handlePreview = () => {
    if (!imageUrl.trim()) {
      toast.error('Please enter an image URL first.')
      return
    }
    setPreviewError(false)
     setPreview(imageUrl.trim())
  }



  const handleSubmit = async (e) => {
    e.preventDefault()


    if (!name.trim()) {
      toast.error('Name cannot be empty.')
      return
    }
    setSaving(true)



    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
        image: imageUrl.trim() || undefined,
      })
      if (error) {
        throw new Error(error.message)
      }
       toast.success('Profile updated successfully!')
      router.push('/profile')
    } catch (err) {
       console.error(err)
      toast.error(err?.message || 'Failed to update profile.')
    } finally {
      setSaving(false)
    }
  }



  if (isPending) {
    return (
      <main className="pt-28 pb-16 px-8 max-w-screen-xl mx-auto">
         <div className="flex flex-col items-center gap-4 py-24">
            <div className="w-20 h-20 rounded-full bg-slate-200 animate-pulse" />
          <div className="w-48 h-6 rounded bg-slate-200 animate-pulse" />
        </div>
     </main>
    )
  }
  if (!user) {
    return (
        <div className="pt-28 text-center text-slate-500">
        Redirecting...
      </div>
    )
  }



  const initials = (user.name || user.email || 'U')
    .split(' ')
    .map(w => w?.[0] || '')
    .join('')
    .toUpperCase()
    .slice(0, 2)
  return (
    <main className="pt-28 pb-16 px-4 md:px-8 max-w-screen-xl mx-auto">


      <Link
        href="/profile"
        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Profile
      </Link>

      <div className="max-w-2xl mx-auto">


          <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 font-serif">
            Update Profile
            </h1>
            <p className="text-slate-500 mt-2">
             Modify your public profile details and avatar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 items-start">
          
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              



              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <span className="flex items-center gap-2">
                    <User size={15} className="text-amber-500" />
                    Display Name
                  </span>
                   </label>
                  <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your display name"
                  className="w-full border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400"
                />
              </div>
              <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <span className="flex items-center gap-2">
                    <ImageIcon size={15} className="text-amber-500" />
                    Avatar Image URL
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={e => {
                      setImageUrl(e.target.value)
                      setPreviewError(false)
                    }}
                    placeholder="https://imgBB link"
                    className="flex-1 border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-sm"
                  />

                  <button
                    type="button"
                    onClick={handlePreview}
                    className="flex items-center gap-1.5 px-4 py-3 border rounded-xl text-sm hover:bg-slate-100"
                  >
                    <Eye size={14} />
                    Preview
                  </button>
                </div>
              </div>

            <div className="flex items-center gap-3 pt-2">
                <Link
                 href="/profile"
                  className="px-5 py-2.5 border rounded-xl text-sm hover:bg-slate-50"
                >
                  Cancel
                </Link>
              <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white px-5 py-2.5 rounded-xltext-sm"
                >
                  {saving ? 'Saving...' : (
                    <>
                      <Save size={15} />
                      Update Information
                    </>
                  )}
                </button>
                  </div>
            </form>
             </div>




          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center gap-4">
            <p className="text-xs font-bold uppercase text-slate-400">
              Preview
            </p>

            {preview && !previewError ? (
              <img
                src={preview}
                alt="Avatar preview"
                onError={() => setPreviewError(true)}
                className="w-28 h-28 rounded-full object-cover border-4 shadow-lg"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-700 text-3xl font-bold">
                  {initials}
                </span>
                </div>
            )}
            {previewError && (
              <p className="text-xs text-red-500 text-center">
                Could not load image.
              </p>
            )}
              <div className="text-center">
              <p className="font-semibold text-sm">
                {name || user.name || 'Your Name'}
                </p>
              <p className="text-xs text-slate-400">
                {user.email}
              </p>
              </div>
             </div>
        </div>
     </div>
  </main>
  )
}