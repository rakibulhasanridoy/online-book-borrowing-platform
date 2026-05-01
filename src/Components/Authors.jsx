import React from 'react'

const Authors = () => {
  return (
    <div>
        <section className="py-xl px-8 max-w-screen-2xl mx-auto">
      <h2 className="font-h2 text-h2 text-primary mb-xl text-center">Revered Authors</h2>
      <div className="flex flex-wrap justify-center gap-xl">
        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-on-tertiary-container transition-all">
            <img className="w-full h-full object-cover"
              data-alt="A dignified portrait of a male author in his late 50s, wearing a tweed jacket and reading glasses. He is standing in a study with a soft-focus background of leather-bound books. The lighting is Rembrandt-style, classNameic and warm. The aesthetic is scholarly and professional, reflecting the prestige of a celebrated intellectual."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgKA1T79u84pts9EVc7Yssxs0BzdJQA_nN3LW4hlwf9d_-WYArXYIN8OLzzkELM9oA9JmKcRCOLVzsmkfX8OMRBq_QD_JhQ7_xkcN6-AGoKTFiIGn27WXzkc25BH5Dbhk7cpAVJHXYQiDFEpkqosB1MpvCTshSkdlimfjlGcjqR4WIhbAnfwFL0hpAxwiH2TQiulvhlaSoixLXmqCas1mFx9OFNKku3wBOzKYub3MXzzB0GIvfYBDqMPRh7GSMgdhI_mx7xuF4Xuv8" />
          </div>
          <span className="font-label-md mt-md text-primary">Julian Vance</span>
          <span className="font-caption text-on-surface-variant">12 Works</span>
        </div>
        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-on-tertiary-container transition-all">
            <img className="w-full h-full object-cover"
              data-alt="A professional portrait of a female author with a warm smile, wearing a minimalist silk blouse. The background is a clean, bright studio with soft, even lighting that creates a welcoming and accessible mood. The color palette is neutral and airy, emphasizing clarity and contemporary intellectualism."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBt6fb-25MbY8_9EE-45G8O6-_PUqXt7tX_wLHV7nXi7_xYzQklRHuYAlN-Xdydh27aqMHqDDw3bFMy9LGxEdo0rPyE0SeZjPBuV0OCYAHbbxwtQcEeT6VFPDj0FW_6veAinWD-LW3D8jpNb3RwKlFpu-NCxkEtCI-CZbzUeCcCM-IcsA42OfqIxbLhwvyv6ZUfNNKsbApoLZI6Rd-FHQlfjZ6MGBI92KNVBLYdehJZo6SU7YAASNh0ilIVyZwK9708z5J1ma2BSSS" />
          </div>
          <span className="font-label-md mt-md text-primary">Sarah K. Miller</span>
          <span className="font-caption text-on-surface-variant">8 Works</span>
        </div>
        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-on-tertiary-container transition-all">
            <img className="w-full h-full object-cover"
              data-alt="A high-contrast black and white portrait of an elderly male author with deep character lines and a thoughtful expression. The lighting is dramatic, coming from the side to emphasize texture. The image conveys a sense of wisdom, history, and profound literary experience, fitting the archival theme perfectly."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Ml28UaEKfiLZB_ueccem1uoZNNFrsIM7jq-F4-WfB1Lkt3rBwxECvEbveo781Ew94HAidWUofiDB9Tb2doFqY0hDlYP_kZJynnx3fOwH3049RSSD7zi6EvYJdFQQgQKjAWHSmASWFzgdJ3Y1s7hJiNy1lDPGN2isOKGbGoFBSemqtqWFrO9i0Bh9MteC21pAJqnz59bGGGYtSmPYsOJjgUPzkSH8i8unVQ03fyrHlgVF1DbYMZshYAZZbNiR_5cwIEhOOQ2eTOQ7" />
          </div>
          <span className="font-label-md mt-md text-primary">Dr. Robert Chen</span>
          <span className="font-caption text-on-surface-variant">25 Works</span>
        </div>
        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-on-tertiary-container transition-all">
            <img className="w-full h-full object-cover"
              data-alt="A vibrant and modern portrait of a young female author with curly hair and a colorful scarf. The setting is an outdoor garden with natural, dappled sunlight filtering through leaves. The mood is fresh, creative, and energetic, bringing a contemporary perspective to the archive's scholarly atmosphere."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnBsl5_peY4-Z1dPgLaDeDle_b8TxFjBt_5Ctd3lzrXvFn85i1Fo_fTwOvxPo6zHq22QY_AycRhDGdyHeWNSW3KQSty7mOgJ_My4Vv7sDEKa4L6epzxzl00MYOZNjYLMihOoM52hUzCx2O9lI6mcrHK2LLkxWEaAJEht2pMVBKPnnMN73BsdY2lVATBfA-EQegv3qsnIeVW74aYwQx0Bv3t69gc2FRujZNWTsPO_6Gkr9k94Nnnn48EP_jQBYXY4JVD7LrXkU6nLkN" />
          </div>
          <span className="font-label-md mt-md text-primary">Maya Angelou II</span>
          <span className="font-caption text-on-surface-variant">5 Works</span>
        </div>
        <div className="flex flex-col items-center text-center group cursor-pointer">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-on-tertiary-container transition-all">
            <img className="w-full h-full object-cover"
              data-alt="A portrait of a male author in a casual denim shirt, leaning against a large window with city views in the background. The lighting is bright and natural, creating a relaxed yet focused mood. The aesthetic is urban and modern, representing the archive's connection to current global narratives."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSrumnHgNbSn0PxnMwPAx_WsCCURvnftk8XV2HZCpPRhFcZIzVSFjqJWSzYWlezJTUe-PbyCRCFq8gyfRWINEr_0wSoAp0KQkwlDMRbYZOEqN2BHqLc4UW5d0sk0lemUM3M-aItoNoql-Vpk7sDuQbKr0O36STILY1oe_c2nY2gT7SSLaMBCM8oRS9a_6AJyAPzUazrjv61gr1rxo7ZOpou09IWHubwiYau3FA-R7tFEJIqGIyIvMwCmA8clqqgkmZuERzWHrH8dS5" />
          </div>
          <span className="font-label-md mt-md text-primary">Thomas Wright</span>
          <span className="font-caption text-on-surface-variant">19 Works</span>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Authors