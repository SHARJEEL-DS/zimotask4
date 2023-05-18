import Link from 'next/link'
import React from 'react'

function But() {
  return (
    <div >
        <button
              type="submit"
              className="lg:flex items-center justify-center hidden h-[120px] m-10 w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase "
            >
               <Link href="/NN">CONTINUE</Link>
            
            </button>
    </div>
  )
}

export default But
