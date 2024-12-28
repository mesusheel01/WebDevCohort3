import {User} from '../db/index.js'

const userMiddleware = (req,res,next)=>{
  const username = req.headers.username
  const password = req.headers.password
  User.findOne({
     username,
     password
  })
  .then((value)=>{
    if(value){
        next();
    }else{
        res.status(403).json({
            msg: "User doesn't exist"
        })
    }
  })
}

export default userMiddleware
