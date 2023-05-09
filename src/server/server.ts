import express, {Request, Response, NextFunction, RequestHandler } from 'express';
const {query} = require ('./db.config.ts');

const app = express();



app.use(express.json());

const test = async() => {
    try {
        const selectUsers = 'SELECT * FROM users';
        const users = await query(selectUsers);
        console.log(users);
    } catch (err) {
        console.log(err);
    }
}
test();

app.listen(3000, () => console.log('server is listening on port 3000'));