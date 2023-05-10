const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewEvent: async (req: Request, res: Response, next: NextFunction) => {
        const { email, company, role, dateApplied } = req.body;
        try {
            //get user_id
            const selectResult = await query(`SELECT user_id FROM users WHERE email = $1;`, [email]);
            console.log(selectResult.rows[0].user_id);
            const user_id = selectResult.rows[0].user_id;
            res.locals.user_id = user_id;
            //create new event
            const result = await query(`INSERT INTO events (company, role, dateapplied, user_id) VALUES ($1, $2, $3, $4);`, [company, role, dateApplied, user_id]);
            //update user's total events
            const newTotalEvents = await query(`UPDATE users SET total_events = total_events + 1 WHERE user_id = $1;`, [user_id]);

            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
        
    },

    getYourEvents: async (req: Request, res: Response, next: NextFunction) => {
        const user_id = 1;
        try {
            const myEvents = await query(`SELECT * FROM events WHERE user_id = $1`, [user_id]);
            res.locals.myEvents = myEvents.rows;
            return next();
        } catch (err) {
            console.log('error', err);
            next(err);
        }
    },

}