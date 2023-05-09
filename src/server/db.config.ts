const { Pool } = require ('pg');
const path = require ('path');
const dotenv = require('dotenv');
dotenv.config({path: path.resolve(__dirname, '../../.env')});

const PG_URI = process.env.PG_URI;
// console.log(PG_URI);

const pool = new Pool({
    connectionString: PG_URI,
})

module.exports = {
    query: (text?:string,params?:any,callback?:Function) => {
        console.log('executed query', text);
        return pool.query(text,params, callback);
    }
}
