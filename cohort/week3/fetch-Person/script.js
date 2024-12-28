const areaToShow = document.getElementById('show')
const getPersonName = async ()=>{
    const res = await fetch('https://dummyjson.com/users')
    const response = await res.json()
    if(!response){
        const para = document.createElement('p')
        para.innerText = 'Some error occured!'
        document.body.appendChild(para)
    }else{
        response.users.map((user, id)=>{
            const para = document.createElement('p')
            para.innerText = id + " "+ user.firstName + " " + user.lastName
            document.body.appendChild(para)
        })
    }
}

