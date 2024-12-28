//if this is an arrya of strings with atleast 1 input, return true, else return false
//
const z = require('zod')


function validateInput(arr){

  const schema = z.object({
    email: z.string().email(),
    password: z.string().max(5)
  })
  const res = schema.safeParse(arr)
  console.log(res)
 }

validateInput({
  email: "susheelrai@gmail.com",
  password: "lassan"
})

