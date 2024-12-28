import mongoose, { Schema} from 'mongoose'

// mongoose connection
mongoose.connect("mongodb+srv://admin:passme@cluster0.t6rr9na.mongodb.net/Cognito").then(()=>{
    console.log("Connected to db!")
}).catch((err)=>{
    console.log("Connection error : ", err)
})

// constants to use further down
const contentTypes = ['image', 'video', 'article', 'audio'];
const objectId = mongoose.Schema.Types.ObjectId


// user schema
const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: { type:String, required: true}
})


// content schema
const contentSchema = new Schema({
    link:{ type: String, required: true},
    type: {type: String ,enum: contentTypes, required: true},
    title: {type: String, required: true},
    tags: {type: objectId, ref: 'Tag', required:true},
    userId: {type: objectId, ref: 'User', required: true}
})

// tag schema
const tagSchema = new Schema({
    title: {type: String, required: true}
})

// link schema
const linkSchema = new Schema({
    hash: {type: String, unique: true, required: true},
    userId: {type: objectId, ref: 'User', required: true}
})


// models for every schema
const User = mongoose.model("User", userSchema)
const Content = mongoose.model("Content", contentSchema)
const Tag = mongoose.model("Tag", tagSchema)
const Link = mongoose.model("Link", linkSchema)


// export models
export{
    User, Content, Tag, Link
}
