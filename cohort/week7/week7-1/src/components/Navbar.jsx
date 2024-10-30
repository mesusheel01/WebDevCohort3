import React from 'react'

const Navbar = () => {
  return (
    <div style={{
        display: "Flex",
        background: "Black",
        color:"white",
        padding:5
    }}>
      <p>Home</p>
      <p>Messages</p>
      <p>Notifications</p>
      <p>Profile</p>
    </div>
  )
}

export default Navbar
