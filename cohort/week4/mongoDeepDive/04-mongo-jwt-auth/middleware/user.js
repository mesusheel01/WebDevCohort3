import {User} from '../db/index.js'
import jwt from 'jsonwebtoken'

const userMiddleware = (req,res,next)=>{
  const token = req.headers.authorization
  const words = token.split(' ')
  const jwtToken= words[1]

  const decodedValue = jwt.verify(jwtToken, process.env.jwtSecret)
  if(decodedValue.username){
    req.username = decodedValue.username;
    next();
  }else{
    res.status(500).json({
      msg: "User not verified"
    })
  }
}

export default userMiddleware
