// import { config } from 'dotenv-safe';
import postgres from 'postgres';

// config();

const sql = postgres();

const flights = await sql`
  SELECT
    *
  FROM
    flights;
`;

console.log(flights);
