import React from 'react'
import Button from './components/Button'


const page = () => {
  return (
    <div className='flex flex-col translate-y-60 justify-center gap-10 items-center  font-mono'>
    <div>
        <p className='text-xl'>Welcome to Todo application with next js <br/> created by love from Susheel Rai💗💗</p>
        <p className='text-md'>Just Signup and trat tracking your activities</p>
      </div>
      <div className='flex gap-5'>
        <Button title={"Signup"} routeTo={"/signup"} />
        <Button title={"Signin"} routeTo={'/signin'} />
      </div>
    </div>
  )
}

export default page
