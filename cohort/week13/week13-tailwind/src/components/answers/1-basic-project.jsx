import React from 'react'

const SideBardClass1  = () => {
  return (
    <div className='flex '>
        <div className='bg-red-200 sm:w-56 h-screen  transition-all w-0 ease-in-out delay-20 dtransition delay-300 duration-300 ease-in-outuration-100'>
        {/* duration se kitne duration me transion hoga aur delay se kitne der baad transition start hoga */}
            Sidebar
        </div>
        <div className='bg-green-800 w-full h-screen'>
            Content
        </div>
    </div>
  )
}

export default SideBardClass1
