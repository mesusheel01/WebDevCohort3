import axios from "axios";



export default async function Profile() {


const res = await axios.get('http://localhost:3000/api/profile',{
    headers:{
        //we cant use lcoalStorage in server side code
        authorization: localStorage.getItem('token')
    }
    }).then(res=>{
        const profilePicture=res.data.avatarUrl
})

    return <div>
        {profilePicutre}
    </div>
}
