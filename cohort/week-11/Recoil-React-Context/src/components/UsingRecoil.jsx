import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'



const UsingRecoil = () => {
  return (
    <RecoilRoot>
        <Counter />
   </RecoilRoot>
  )
}

function Counter(){
    const count = useRecoilValue(counterAtom)
    return <div>
        {count}
        <Increase />
        <Decrease />
    </div>
}

function Decrease(){
    const setCount = useSetRecoilState(counterAtom)
    return <div>
        <button onClick={()=> setCount(count =>count-1)}>Decrease</button>
    </div>
}
function Increase(){
    const setCount = useSetRecoilState(counterAtom)
    return <div>
        <button onClick={()=>setCount(count=> count+1)}>Increase</button>
    </div>
}


export default UsingRecoil
