import React, { useRef } from 'react'
import UseRef1 from './UseRef1'
import UseRef2 from './UseRef2'
import UseRef3 from './UseRef3'


//useRef is a react hook that allows us to access any dom element or any value independently
// we have the two usecases of userefs
// ->> access to dom element that we saw when we pres submit button the focus should go to the input area
//->> second use case is like otp where we have 6 inputs and when one number is filled the focus lands to the second input area



const UseRef = () => {

  return (
    <div>
        {/* <UseRef1 /> Uncomment to checkout the first implementation of useRef hook! */}
        {/* <UseRef2 /> */}
        <UseRef3 />
    </div>
  )
}

export default UseRef
