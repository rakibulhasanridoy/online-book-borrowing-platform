import React from 'react'
import { Drama, ClipboardClock, BookOpenCheck  } from 'lucide-react';
const Membership = () => {
  return (
    <div>
      
<section className="bg-surface-container py-xl">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="text-center mb-xl">
          <h2 className="font-h2 text-h2 text-primary">Elevated Membership</h2>
          <p className="font-body-lg text-on-surface-variant mt-sm">Join the inner circle of literary connoisseurs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div
            className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div
              className="w-12 h-12 bg-on-tertiary-container/10 rounded-full flex items-center justify-center mb-lg group-hover:bg-on-tertiary-container transition-colors">
              <BookOpenCheck />
            </div>
            <h3 className="font-h3 text-h3 mb-md">Early Access</h3>
            <p className="font-body-md text-on-surface-variant">Be the first to borrow new arrivals and rare digital
              restorations 48 hours before the general public.</p>
          </div>
          <div
            className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div
              className="w-12 h-12 bg-on-tertiary-container/10 rounded-full flex items-center justify-center mb-lg group-hover:bg-on-tertiary-container transition-colors">
              <ClipboardClock />
            </div>
            <h3 className="font-h3 text-h3 mb-md">Zero Late Fees</h3>
            <p className="font-body-md text-on-surface-variant">Read at your own pace. Members enjoy unlimited renewal
              periods on all standard collection items.</p>
          </div>
          <div
            className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div
  className="w-12 h-12 bg-[#F8F1E7] rounded-full flex items-center justify-center mb-lg group-hover:bg-[#B67B1B] transition-colors">
  <Drama />
</div>
            <h3 className="font-h3 text-h3 mb-md">Exclusive Events</h3>
            <p className="font-body-md text-on-surface-variant">Invitations to virtual author signings, deep-dive
              workshops, and intellectual salons twice a month.</p>
          </div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Membership