import { NextResponse } from 'next/server';
import { sql } from '../../../database/connect';

export async function GET(request) {
  console.log('reached server');
  try {
    const flights = await sql`
      SELECT
        *
      FROM
        flights;
    `;
    console.log('flights from the database' + flights);
    return NextResponse.json(flights);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
