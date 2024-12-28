import React from 'react'
import MainApp from './components/MainApp'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <div>
    <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  )
}

export default App
