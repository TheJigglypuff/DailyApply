const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewUser: async (req: Request, res: Response, next: NextFunction) => {
        const { email, name, photo } = req.body;
        try {
            const checkUser = await query(`SELECT * from users where email = $1`, [email]);
            if (checkUser.rows.length > 0) {
                return res.sendStatus(409);
            }
            const result = await query(`INSERT INTO users (email, name, photo) VALUES ($1, $2, $3) returning user_id`, [email, name, photo]);
            
            console.log('User Creation Successful!')

            // const user_id = result.rows[0].user_id;
            // console.log('this is user_id', user_id);
            res.locals.email = email;
            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
    },

    getAllUsers: async(req: Request, res: Response, next: NextFunction) => {
        // const user_id = 1;
        try {
            const allUsers = await query(`SELECT name, streak, total_events, photo FROM users`);
            // const allUsers = await query(`SELECT name, streak, total_events, photo FROM users WHERE users.user_id != $1`, [user_id]);

            console.log('this is allUsers', allUsers.rows);
            res.locals.allUsers = allUsers.rows;
            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
    },

    checkStreak: () => {

    },

    updateStreak: () => {

    },
}