import { sql } from './connect';

export async function getFlights() {
  return await sql`
    SELECT
      *
    FROM
      flights
  `;
}
