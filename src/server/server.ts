import express, {Request, Response, NextFunction, RequestHandler } from 'express';
const {query} = require ('./db.config.ts');
const userController = require('./controllers/userController');

const {google} = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
    "1064967234338-lpljla832pka03qkmg5lg802uu8qm4ic.apps.googleusercontent.com",
    "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",
    "http://localhost:3000/callback"
    )
    
    const scope = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    
    const authorizationUrl = oauth2Client.generateAuthUrl({
        access_type: 'online',
        scope,
    })
    console.log(authorizationUrl)
const app = express();


app.get('/callback', (req, res)=>{
  res.json("ey yoooo")
})
app.use(express.json());
app.get('/login', (req, res)=>{
  res.redirect(authorizationUrl);
})

app.post('/createNewUser', userController.createNewUser, (req,res) => {
    res.sendStatus(200);
});



// const test = async() => { 
//     try {
//         const selectUsers = 'SELECT * FROM users';
//         const users = await query(selectUsers);
//         console.log(users);
//     } catch (err) {
//         console.log(err);
//     }
// }
// test();

app.listen(3000, () => console.log('server is listening on port 3000'));