'use client'
import axios from "axios"

const page = () => {
  return (
    <div>
        <input type="text "/>
        <input type="text "/>
        <button onClick={()=>{
            axios.post("http://localhost:3000/api/signin",{
                username:'Susheel',
                password: "234sdf"
            })
        }}  >Signin</button>
    </div>
  )
}
export default page
