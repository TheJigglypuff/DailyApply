const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewEvent: async (req: Request, res: Response, next: NextFunction) => {
        //need to eventually change user_id to be retrieved from a jwt created on login/signup
        const { email, company, role, dateApplied } = req.body;
        try {
            //get user_id
            const user_id = await query(`SELECT users.user_id FROM users WHERE users.email = $1`, [email]);

            //create new event
            const result = await query(`INSERT INTO events (company, role, dateApplied, user_id) VALUES ($1, $2, $3, $4);`, [company, role, dateApplied, user_id]);

            //update user's total events
            const newTotalEvents = await query(`UPDATE users SET total_events = total_events + 1 WHERE user_id = $1;`, [user_id]);

            
            // const result = await query(`INSERT INTO users (email, name) VALUES ($1, $2) returning name`, [email, name]);
            // const user_id = await query(`UPDATE users SET users.total_events = users.total_events WHERE users.user_id = $1`, [user_id])
            // CREATE TABLE events (
            //     event_id SERIAL PRIMARY KEY,
            //     company varchar(255) NOT NULL,
            //     role varchar(255) NOT NULL,
            //     dateApplied DATE,
            //     user_id int,
            //     FOREIGN KEY (user_id) REFERENCES users(user_id)
        

        } catch (err) {
            console.log('error', err);
            next(err);
        }
        
    },

    getYourEvents: () => {

    },

}