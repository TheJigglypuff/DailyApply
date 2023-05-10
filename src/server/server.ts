import express, {Request, Response, NextFunction, RequestHandler } from 'express';
const {query} = require ('./db.config.ts');
const userController = require('./controllers/userController');
const eventController = require('./controllers/eventController');

const {google} = require('googleapis')
const url = require('url')


const app = express();




const oauth2Client = new google.auth.OAuth2(
  "1064967234338-lpljla832pka03qkmg5lg802uu8qm4ic.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/callback"
)

const scope = ['https://www.googleapis.com/auth/userinfo.email']

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope,
})



app.get('/callback', async (req, res)=>{

  if (req.url.startsWith('/callback')) {
    let q = url.parse(req.url, true).query;
    let { tokens } = await oauth2Client.getToken(q.code);
    oauth2Client.setCredentials(tokens);
  }


    const people = google.people({version: 'v1', auth: oauth2Client});
    people.people.get({
      resourceName: 'people/me',
      personFields: 'emailAddresses,names,nicknames,photos,genders,birthdays,ageRanges,locales'
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      console.log('Email: ' + res.data.emailAddresses[0].value + res.data.emailAddresses[0].value);
      console.log(res.data);
    });




  res.json(2)
})
app.use(express.json());
app.get('/login', (req, res)=>{

  res.redirect(authorizationUrl);
})

app.post('/createNewUser', userController.createNewUser, (req,res) => {
    res.sendStatus(200);
});

app.get('/getAllUsers', userController.getAllUsers, (req,res) => {
    res.status(200).send(res.locals.allUsers);
})

app.get('/getYourEvents', eventController.getYourEvents, (req,res) => {
    res.status(200).send(res.locals.myEvents);
})




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