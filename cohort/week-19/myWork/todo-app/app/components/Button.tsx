"use client"
import { useRouter } from 'next/navigation'

const Button = (props) => {
    const {title, routeTo} = props
    const router = useRouter()
  return (
    <div>
        <button onClick={()=>router.push(routeTo)} className='border font-mono  p-2 rounded-xl hover:shadow-lg hover:shadow-gray-400 transition-all duration-300'>
            {title}
        </button>
    </div>
  )
}

export default Button
