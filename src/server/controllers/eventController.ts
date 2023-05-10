const { query } = require('../db.config');
import { Express, Request, Response, NextFunction } from 'express';


module.exports = {
    createNewEvent: async (req: Request, res: Response, next: NextFunction) => {
        //need to eventually change user_id to be retrieved from a jwt created on login/signup
        const { user_id, company, role, dateApplied } = req.body;
        // try {
        //     const result = await query(`INSERT INTO users (email, name) VALUES ($1, $2) returning name`, [email, name]);
        //     const checkUser = await query(`UPDATE users SET users.total_events = users.total_events WHERE users.user_id = $1`, [user_id])
            
        

        // } catch (err) {
        //     console.log('error', err);
        //     next(err);
        // }
        
    },

    getYourEvents: () => {

    },

}