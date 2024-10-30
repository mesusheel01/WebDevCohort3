// ----------Routing code--------------------

// import React, { Suspense } from 'react';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// const Dashboard = React.lazy(() => import('./components/Dashboard'));
// const Landing = React.lazy(() => import('./components/Landing'));

// const App = () => {



//     return (
//     <>
//       <Navbar />
//       <BrowserRouter>
//         <UseNavigation />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </>
//   );
// };

// const UseNavigation = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <button onClick={() => navigate("/")}>Landing Page</button>
//       <button onClick={() => navigate("/dashboard")}>Dashboard Page</button>
//     </div>
//   );
// };

// export default App;


//------------------Prop drilling-------------------
// The problem with passing props
// - Passing propos is a great way to explicitly pipe data through your ui tree to the components that use it.
// - But passing props can become verbose and inconveninet when you need to pass some prop deeply thorugh the tree, or if many components need the same prop. The nearrest common ancestor could be far removed from the componetnts that need datta, and lifting state up that high can lead to a situation called "prop drilling"
import React, { useState } from 'react'

const App = () => {
    const [count ,setCount] = useState(0)
  return (
    <div>
        <Count count={count} setCount={setCount} />

    </div>
  )
}

function  Count({count, setCount}) {
    return <div>
        <h1>{count}</h1>
        <Buttons count={count} setCount={setCount} />
    </div>
}

function  Buttons({count,setCount}) {
    return <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
}

export default App
