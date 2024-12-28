// import React, { useContext, useState } from 'react'
// //for this example we create context at the top level but we should create in a seprate file.
// const BulbContext = React.createContext();

// function BulbProvider({children}) {
//     const [isBulbOn, setIsBulbOn] = useState(false)
//     // we initialize the state and also we can pass anything that we want to access in any of our components
//     return <BulbContext.Provider value={{
//         isBulbOn: isBulbOn,
//         setIsBulbOn: setIsBulbOn
//     }}>
//         {children}
//     </BulbContext.Provider>

// }

// const LightBulb = () => {

//     return (
//     <BulbProvider>
//       <LightState />
//       <ToggleState />
//     </BulbProvider>
//   )
// }

// const LightState = ()=>{
//     //and like this we can extract the value from the context and can use in our components.
//     const {isBulbOn}= useContext(BulbContext)

//     return <div>
//         {isBulbOn? "Bulb on": "Bulb off"}
//     </div>
// }

// const ToggleState = ()=>{
//     const {isBulbOn ,setIsBulbOn} = useContext(BulbContext)

//     function handleToggle() {
//         setIsBulbOn(!isBulbOn)
//     }

//     return <div>
//         <button onClick={handleToggle}>Toggle</button>
//     </div>
// }




// export default LightBulb


import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
export default Parent
