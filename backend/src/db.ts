import { MongoClient, Database } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

let db: Database;

export async function connect() {
  const client = new MongoClient();
  await client.connect(Deno.env.get("MONGO_URI") || "mongodb://localhost:27017");
  db = client.database("app_elec");
}

export function getDb(): Database {
  return db;
}