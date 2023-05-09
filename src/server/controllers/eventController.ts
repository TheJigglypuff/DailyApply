const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewEvent: async (req: Request, res: Response, next: NextFunction) => {
        // const { email, name } = req.body;
        // try {
        //     const checkUser = await query(`SELECT * from users where email = $1`)
        //     const result = await query(`INSERT INTO users (email, name) VALUES ($1, $2) returning name`, [email, name]);
            


        // } catch (err) {
        //     console.log('error', err);
        //     next(err);
        // }
        
    },

    getYourEvents: () => {

    },

}