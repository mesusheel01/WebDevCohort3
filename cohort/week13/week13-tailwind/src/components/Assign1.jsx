import React, { useState } from 'react'

const Assign1 = () => {
    const [changed, setChanged] = useState(false)
  return (
    <div className='flex flex-col items-center justify-center '>
        <div className='grid grid-rows-2 gap-10 mt-10' >
            <h1 className='ml-3 text-white' ><span className='text-buttonHover'>Webinar</span>.gg</h1>
            <h2 className='text-white'>Verify Your Age</h2>
        </div>
        <div className='grid grid-rows-2 gap-2 ' >
            <p className='text-[10px] text-para mt-10'>Please confirm your birth year. This data will not be stored.</p>
            <input  onChange={(e)=>setChanged(true)} className='rounded-lg border-[1px] bg-inputBg border-gray-500 mb-5 pl-5 text-[10px]' type='text' placeholder='Enter the text.. '/>
            <button className={`border border-1 rounded-lg  p-[3px] ${changed?"bg-buttonHover":"bg-buttonColor"} text-white`}>Continue</button>
        </div>
    </div>
  )
}

export default Assign1
