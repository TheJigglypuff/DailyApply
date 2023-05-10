import express, {Request, Response, NextFunction, RequestHandler } from 'express';
const {query} = require ('./db.config.ts');
const userController = require('./controllers/userController');
const eventController = require('./controllers/eventController');
// const cookiesController = require('./controllers/cookiesController');
// const cookieParser = require('cookie-parser');


const {google} = require('googleapis')
const url = require('url')
const oAuthController = require('./controllers/oAuthController')

const app = express();
// app.use(cookieParser());
app.use(express.json());

// app.get('/checkCookies', (req, res) => {
//   res.json(true)
// });
// app.get('/here2', (req,res) => {
//   res.redirect('/')
// })
// app.post('/testCockies', cookiesController.setCookie, (req, res)=>{
// res.status(200)
// })

app.get('/callback', oAuthController.getUserInfo, (req, res) => {
  res.redirect("http://localhost:8080")
})




app.get('/login', oAuthController.login)

app.post('/createNewUser', userController.createNewUser, (req,res) => {
    res.sendStatus(200);
});

app.post('/createNewEvent', eventController.createNewEvent, userController.checkStreak, (req,res) => {
    res.sendStatus(200);
});

app.get('/getAllUsers', userController.getAllUsers, (req,res) => {
    res.status(200).send(res.locals.allUsers);
})

app.get('/getYourEvents', eventController.getYourEvents, (req,res) => {
    res.status(200).send(res.locals.myEvents);
})

// app.get('/checkStreak', userController.checkStreak, (req,res) => {
//     res.sendStatus(200);
// });



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