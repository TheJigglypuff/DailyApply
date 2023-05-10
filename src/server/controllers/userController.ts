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
        //----
        //if user.start < date.now < user.end
        //increment
        //otherwise end the streak
        //----
        // If user.timer < Date.now()
        // set streak to 1
        const today = new Date().getDate();
        // If user.lastDate != today.getDate();
        // 
        try {
            //find this user's info
            const thisUser = await query(`SELECT streak, total_events, start, endtime, currdate FROM users WHERE users.user_id = $1;`, [res.locals.user_id]);

            console.log(thisUser.rows[0]);
            console.log(Date.now());
            //check for null
            if (thisUser.rows[0].start === null && thisUser.rows[0].endtime === null) {
                const newUser = await query(`UPDATE users SET start = $1, endtime = $2, currdate = $3, streak = $4 WHERE user_id = $5;`, [Date.now(), Date.now()+ (3600 * 1000 * 24), today, 1, res.locals.user_id]);
            
            //dont update streak if dateNOW is within range and currdate is today
            } else if (Number(thisUser.rows[0].start) < Date.now() && Number(thisUser.rows[0].endtime) > Date.now() && thisUser.rows[0].currdate == today) {
                console.log('dont increment streak!!!!!')
                const dontIncrementStreak = await query(`UPDATE users SET start = $1, endtime = $2, currdate = $3, streak = $4 WHERE user_id = $5;`, [Date.now(), Date.now()+ (3600 * 1000 * 24), today, thisUser.rows[0].streak, res.locals.user_id]);

            //update streak if dateNOW is within range and currdate is not today
            } else if (Number(thisUser.rows[0].start) < Date.now() && Number(thisUser.rows[0].endtime) > Date.now() && thisUser.rows[0].currdate !== today) {
                console.log('increment STREAK!!!!!')
                const incrementStreak = await query(`UPDATE users SET start = $1, endtime = $2, currdate = $3, streak = $4 WHERE user_id = $5;`, [Date.now(), Date.now()+ (3600 * 1000 * 24), today, thisUser.rows[0].streak+1, res.locals.user_id]);
            
            //reset streak if dateNOW is not within range and currdate is not today or tmr
            } else if(Number(thisUser.rows[0].start) < Date.now() && Number(thisUser.rows[0].endtime) < Date.now() && (thisUser.rows[0].currdate !== today || thisUser.rows[0].currdate!== today+1)) {
                const resetStreak = await query(`UPDATE users SET start = $1, endtime = $2, currdate = $3, streak = $4 WHERE user_id = $5;`, [Date.now(), Date.now()+ (3600 * 1000 * 24), today, 0, res.locals.user_id]);
            }

            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
        
    },
} 