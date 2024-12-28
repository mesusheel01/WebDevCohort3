import jwt from 'jsonwebtoken'
import z from 'zod'
const jwtPass = 'passme'

const emailSchema = z.string().email()
const passwordSchema = z.string().min(6)


const generateToken =  (username, password)=>{

  const userResponse = emailSchema.safeParse(username)
  
  const passwordResponse = passwordSchema.safeParse(password)

  if(!userResponse.success || !passwordResponse.success){
    return null
    }
    const token = jwt.sign({username: username}, '134234234')
    return token
}


const ans = generateToken('susheel@gmail.com', '1424dfsf24')
console.log(ans)
