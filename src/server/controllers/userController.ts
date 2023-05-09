const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewUser: async (req: Request, res: Response, next: NextFunction) => {
        const { email, name } = req.body;
        //add photoURL
        try {
            const checkUser = await query(`SELECT * from users where email = $1`, [email]);
            if (checkUser.rows.length > 0) {
                return res.sendStatus(409);
            }
            const result = await query(`INSERT INTO users (email, name) VALUES ($1, $2) returning user_id`, [email, name]);
            
            console.log('User Creation Successful!')

            const user_id = result.rows[0].user_id;
            console.log('this is user_id', user_id);
            res.locals.user_id = user_id;
            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
    },

    getAllUsers: () => {

    },

    checkStreak: () => {

    },

    updateStreak: () => {

    },
}