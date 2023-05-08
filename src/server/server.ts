import express, {Request, Response, NextFunction, RequestHandler } from 'express';
const app = express();

app.use(express.json());


app.listen(3000, () => console.log('server is listening on port 3000'));