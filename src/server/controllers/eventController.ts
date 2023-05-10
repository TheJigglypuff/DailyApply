const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewEvent: async (req: Request, res: Response, next: NextFunction) => {
        const { email, company, role, dateApplied } = req.body;
        try {
            //get user_id
            const user_id = await query(`SELECT users.user_id FROM users WHERE users.email = $1`, [email]);

            //create new event
            const result = await query(`INSERT INTO events (company, role, dateApplied, user_id) VALUES ($1, $2, $3, $4);`, [company, role, dateApplied, user_id]);

            //update user's total events
            const newTotalEvents = await query(`UPDATE users SET total_events = total_events + 1 WHERE user_id = $1;`, [user_id]);

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