import 'server-only';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

function connectOneTimeToDatabase() {
  const sql = { transform: postgres.camel };

  return sql;
}

export const sql = connectOneTimeToDatabase();
