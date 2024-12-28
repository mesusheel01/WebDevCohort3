import React from 'react'
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Class11NeetCoaching from './Class11NeetCoaching'
import Class12NeetCoaching from './Class12NeetCoaching'
import Class11JeeCoaching from './Class11JeeCoaching'
import ErrorPage from './ErrorPage'
import Class12JeeCoaching from './Class12JeeCoaching'
// for the navigation their is a bad way where you can use anchor tag to direct to another route but it makes every page to reload
// same way we have <link></link> tag but you cannot use the link tag outside the browser router


const Main = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Layout />} >
                <Route path='/neet/online-coaching-class-11' element={<Class11NeetCoaching />} />
                <Route path='/neet/online-coaching-class-12' element={<Class12NeetCoaching />} />

                <Route path='/jee/online-coaching-class-11' element={<Class11JeeCoaching />} />
                <Route path='/jee/online-coaching-class-12' element={<Class12JeeCoaching />} />

                <Route path='*' element={<ErrorPage />} />
            </Route>
            </Routes>

        </BrowserRouter>
    </div>
  )
}

function Layout() {
    const navigate = useNavigate()
    return <div>
    <div style={{
        display:'flex',
        height:'5vh',
        justifyContent:'center',
        backgroundColor:'black'
    }} >
        <button onClick={()=> navigate('/neet/online-coaching-class-11')}>neet 11</button>
        <button onClick={()=> navigate('/neet/online-coaching-class-12')}>neet 12</button>
        <button onClick={()=> navigate('/jee/online-coaching-class-11')}>jee 11</button>
        <button onClick={()=> navigate('/jee/online-coaching-class-12')}>neet 12</button>
        </div>
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'85vh'
        }}>
            <Outlet />
        </div>
        <footer style={{
            // height: '23rem',
            display:"flex",
            flexDirection:'row',
            alignItems:'flex-end',
            justifyContent:'center',
            backgroundColor:'gray'
        }}  >This is footer <br/> copyright@2024</footer>
    </div>
}


//



export default Main
