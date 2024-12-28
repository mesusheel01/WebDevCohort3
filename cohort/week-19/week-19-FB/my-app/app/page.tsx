import Link from "next/link";


export default function home() {
  return (
    <div className="text-lg w-screen h-screen flex flex-col items-center justify-center">
        <div>
            Todo Application
        </div>
        <br/>
        <div className="flex gap-2">
            <Link className="border p-2 rounded-xl  border-purple-800 hover:shadow-lg hover:shadow-gray-400" href='/auth/signin'>Signin</Link>
            <Link className="border p-2 rounded-xl border-purple-800 hover:shadow-lg hover:shadow-gray-400" href='/auth/signup'>Signup</Link>
        </div>
    </div>
  )
}
