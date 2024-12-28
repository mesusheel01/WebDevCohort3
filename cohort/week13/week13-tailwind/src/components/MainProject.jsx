import React from 'react'

const MainProject = () => {
  return (
    <div className='flex '>
      <div className='w-0 bg-blue-200 md:w-56 h-screen transition-all delay-200 duration-300'>

        Sidebar
      </div>
        <MainContent />
    </div>
  )
}

const MainContent = ()=>{

    return <div className='w-full  '  >
    <div className='h-40 hidden md:block  bg-black'></div>
    <div className='grid grid-rows-3 items-center  md:grid-cols-11 md:gap-5'>
        <div className='h-56  rounded-xl shadow ml-2  bg-red-200 md:col-span-3 col-span-3 -translate-y-12'></div>
        <div className='h-56 mt-2 rounded-xl shadow
         bg-yellow-200 col-span-2 md:col-span-5 '></div>
        <div className='h-80 mt-2 mr-2 rounded-xl shadow  pr-2 bg-orange-200 col-span-3 '></div>
    </div>
    </div>

}

export default MainProject
