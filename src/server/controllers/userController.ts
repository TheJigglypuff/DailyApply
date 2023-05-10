const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewUser: async (req: Request, res: Response, next: NextFunction) => {
        const { email, name, photo } = req.body;
        try {
            const checkUser = await query(`SELECT * from users where email = $1;`, [email]);
            if (checkUser.rows.length > 0) {
                return res.sendStatus(409);
            }
            const result = await query(`INSERT INTO users (email, name, photo) VALUES ($1, $2, $3) returning user_id;`, [email, name, photo]);
            
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
            const allUsers = await query(`SELECT name, streak, total_events, photo FROM users;`);
            // const allUsers = await query(`SELECT name, streak, total_events, photo FROM users WHERE users.user_id != $1`, [user_id]);

            console.log('this is allUsers', allUsers.rows);
            res.locals.allUsers = allUsers.rows;
            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
    },

    checkStreak: async(req: Request, res: Response, next: NextFunction) => {
        // res.locals.user_id has user_id
        // If user.timer < Date.now()
        // set streak to 1
        // const today = new Date();
        // If user.lastDate != today.getDate();
        // 
        try {
            //find this user's info
            const thisUser = await query(`SELECT streak, total_events, timer, lastDate FROM users WHERE users.user_id = $1;`, [res.locals.user_id]);

            console.log(thisUser.rows[0]);
            //create today's day
            const today = new Date().getDate();
            //check timer for null or timer greater than now
            if (thisUser.rows[0].timer === null || Number(thisUser.rows[0].timer) > Date.now()) {
                //change streak to 0 
                const resetStreak = await query(`UPDATE users SET streak = $1 WHERE user_id = $2;`, [0, res.locals.user_id])
            }
            
            
            if (thisUser.rows[0].lastDate === null || thisUser.rows[0].lastDate - today === 1) {
                //increment streak
                const incrementStreak = await query(`UPDATE users SET streak = $1 WHERE user_id = $2;`, [thisUser.rows[0].streak +1, res.locals.user_id])
            }
            //set lastDate = today; 
            //set timer Date.now()+ (3600 * 1000 * 24)
            const dateAndTimer = await query(`UPDATE users SET lastdate = $1, timer = $2 WHERE user_id = $3;`, [today, Date.now()+ (3600 * 1000 * 24), res.locals.user_id]);




            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
        
    },
} 