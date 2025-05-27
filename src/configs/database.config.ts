import 'dotenv/config'
import { Pool } from "pg";
import { QueryConfig } from 'pg';

const pool = new Pool ({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT || '')
});

export const poolQuery = async (query: QueryConfig) => {
    const client = await pool.connect();
    console.log(`Attempt client query call.`);

    try {
        const result = await client.query(query)
        return result.rows;
    } catch(e) {
        client.release();
        console.log(`Client query call failed with error ${e}`);
    } finally {
        client.release();
    }
}