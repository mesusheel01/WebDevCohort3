//axios vs fetch

// function main(){
//   fetch('https://dummyjson.com/users')
//   .then(async res => {
//     const result = await res.json()
//     console.log(result)
//   })
//   .catch(err=>{
//     console.log(err)
//   })
// }
//
// main()

//async await syntax
//
// const fetchUsers = async()=>{
//   const users = await fetch('https://dummyjson.com/users'{
//   method: POST,PUT,DELETE })
//   const res =await users.json()
//   console.log(res)
// }
//
// fetchUsers()A
//
//

// -----Now how to use axios
const axios = require('axios')

// we will get final res as response.data g


//     username: "Susheel",
//     password: 'maihoon'
//   },{
//     headers:{
//       Authorization: 'bearer 123'
//     },
//   },
//   )
//   console.log(users.data)
// }
//
// fetchUsers()
//

const fetchUsers = async()=>{
  const users = await axios.post({
    url: 'https://httpdump.app/dumps/ecf0df16-ae0d-4060-b30c-63026c95ccfd',
    headers:{
      Authorization: 'bearer 123'
    },
    data:{
      username:'susheel'
    } 
  },
  )
  console.log(users.data)
}

fetchUser()

