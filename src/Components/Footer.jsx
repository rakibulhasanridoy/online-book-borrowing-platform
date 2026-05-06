import React from 'react'
import Link from 'next/link'
const Footer = () => {
 
 
 
 
  return (
    <div>
          <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 mt-auto border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 max-w-screen-2xl mx-auto">
                            <div className="space-y-4">
                            <div className="font-serif font-bold text-slate-900 dark:text-slate-50 text-h3">ScholarArchive</div>
                            <p className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400">© 2030 ScholarArchive. Preserving Knowledge Digitally.</p>
                            <div className="flex space-x-4">
                            <span><a className="material-symbols-outlined text-slate-400 hover:text-amber-600 cursor-pointer" href="https://www.google.com/">public</a></span>
                            <span><a className="material-symbols-outlined text-slate-400 hover:text-amber-600 cursor-pointer" href="https://www.google.com/">share</a></span>
                            <span><a className="material-symbols-outlined text-slate-400 hover:text-amber-600 cursor-pointer" href="https://www.google.com/">alternate_email</a></span>
                            </div>
                            </div>
                    <div className="space-y-4">
                    <h4 className="font-label-md text-primary">Navigation</h4>
                    <ul className="space-y-2">
                    <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="#">Home</a></li>
                    <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/allbooks">All Books</a></li>
                    <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="/login">Membership</a></li>
                    </ul>
                    </div>
                <div className="space-y-4">
                <h4 className="font-label-md text-primary">Support</h4>
                <ul className="space-y-2">
                <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://www.facebook.com/rakibulhasan.ridoy.144/">Contact Us</a></li>
                <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://www.allbookstores.com/privacy">Privacy Policy</a></li>
                <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://policies.google.com/terms?hl=en#toc-about">Terms</a></li>
                </ul>
                </div>
              <div className="space-y-4">
              <h4 className="font-label-md text-primary">Community</h4>
              <ul className="space-y-2">
              <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://www.facebook.com/rakibulhasan.ridoy.144/">Facebook</a></li>
              <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://www.instagram.com/rakibul_h_ridoy/?hl=en">Instagram</a></li>
              <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="https://x.com/">Twitter</a></li>
              </ul>
              </div>
            </div>
          </footer>

              </div>
            )
          }

          export default Footer