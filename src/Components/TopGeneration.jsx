import React from 'react'

const TopGeneration = async () => {
    const res = await fetch('https://online-book-borrowing-platform-rust.vercel.app/Data.json')
    const books = await res.json()

    return (
        <section className="py-xl px-8 max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-end mb-xl">
                <div>
                    <h2 className="font-h2 text-h2 text-primary">Top Generation</h2>
                    <p className="font-body-md text-on-surface-variant mt-sm">
                        Explore our most popular books across all categories.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-surface-container rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow border border-outline-variant"
                    >
                        <div className="bg-surface-container-highest rounded-lg h-40 flex items-center justify-center overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-on-surface-variant">menu_book</span>
                        </div>

                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-xs font-label-md text-on-tertiary-container bg-tertiary-container px-2 py-0.5 rounded-full self-start">
                                {book.category}
                            </span>
                            <h3 className="font-label-lg text-on-surface font-semibold leading-snug">
                                {book.title}
                            </h3>
                            <p className="text-sm text-on-surface-variant">by {book.author}</p>
                            <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                                {book.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant">
                            <span className="text-xs text-on-surface-variant">
                                {book.available_quantity} available
                            </span>
                            <button className="text-xs bg-on-tertiary-container text-surface-container-lowest px-3 py-1.5 rounded-lg font-label-md hover:scale-105 transition-transform active:scale-95">
                                Borrow
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopGeneration