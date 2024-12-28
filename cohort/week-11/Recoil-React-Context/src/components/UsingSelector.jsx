import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, EvenSelector } from '../store/atoms/counter'



const UsingSelector = () => {
  return (
    <div>
    <RecoilRoot>
        <Buttons/>
        <Counter />
        <IsEven />
        </RecoilRoot>
    </div>
  )
}

function Buttons() {
    const setCount = useSetRecoilState(counterAtom)

    return <div>
        <button onClick={()=> setCount(c =>c+1)}>increase</button>
        <button onClick={()=> setCount(c =>c-1)}>decrease</button>
    </div>
}

function Counter() {
    const count = useRecoilValue(counterAtom)
    return <div>
        {count}
    </div>
}
function IsEven() {
    const even = useRecoilValue(EvenSelector)
    return <div>
        {even}
    </div>
}
export default UsingSelector
