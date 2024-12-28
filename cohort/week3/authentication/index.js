
import express from 'express'
import jwt from 'jsonwebtoken'
const jwtPass = '123456'

const app = express()
const port = 3000

const allUsers = [
    {
        username: 'susheel01',
        password: 'passme',
        name: 'Susheel rai',
    },
    {
        username: 'srijan10',
        password: 'passher',
        name: 'Srijan singh',
    },
    {
        username: 'ashu26',
        password: 'passkaalu',
        name: 'Ashutosh chaubey',
    },
]

const userExist = (username, pass) => {
    for (let i = 0; i < allUsers.length; i++) {
        if (username == allUsers[i].username && pass == allUsers[i].password) {
            return true
        }
    }
    return false
}

app.use(express.json())

// Sign in endpoint
app.post('/signin', (req, res) => {
    const { username, pass } = req.body

    if (!userExist(username, pass)) {
        return res.status(403).json({
            msg: 'User doesn\'t exist in DB!',
        })
    }

    // Sign the token
    const token = jwt.sign({ username: username }, jwtPass) // Use correct jwtPass for signing
    return res.json({
        token,
    })
})

// Get all users except the one who made the request
app.get('/allusers', (req, res) => {
    const token= req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: 'Authorization header missing' });
    }

    // Extract the token from 'Bearer <token>'

    if (!token) {
        return res.status(401).json({ msg: 'Token is missing' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, jwtPass);
        const username = decoded.username;
        const usersButNotHim = [];

        for (let i = 0; i < allUsers.length; i++) {
            if (username !== allUsers[i].username) { // Only check username
                usersButNotHim.push(allUsers[i]);
            }
        }

        // Send the filtered users list
        res.json(usersButNotHim);
    } catch (err) {
        // Handle token verification errors
        res.status(401).json({
            msg: 'Invalid token or error: ' + err.message,
        });
    }
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})

