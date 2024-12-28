import jwt from 'jsonwebtoken'

const JWT_SECRET= 'passBeta'


const userAuthenticator = (req,res,next)=>{
    const partialToken = req.headers.authorization
    const token = partialToken.split(' ')[1]

    if(!token){
        return res.status(409).json({
            msg: 'Invalid token!'
        })
    }
    jwt.verify(token, JWT_SECRET, (err,user)=>{
        if(err){
            res.json({
                msg: err.message
            })
        }
        req.userId = user.userId
        next()
    })
}

export default userAuthenticator
