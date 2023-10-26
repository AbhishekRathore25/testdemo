const express = require('express');


const app = express();

const admin = require("firebase-admin");

const credentials = require(".//testdemo-f2c6f-firebase-adminsdk-lj3cu-e817b1d854.jsonn");

admin.initializeApp({

credential: admin.credential.cert(credentials)
});

app.post('/signup', async (req, res) => {
console.log(req.body)
const user = {

email: req.body.email,
password: req.body.password
}



const userResponse = await admin.auth().createUser({

email: user.email,

password: user.password,

emailVerified: false,

disabled: false
});

res.json(userResponse);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log('server is running on PORT $(PORT),' );
});