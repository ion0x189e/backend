export interface User {
  _id?: { "$oid": string };
  email: string;
  password?: string; // Hashed password
  role: "user" | "admin" | "editor"; // "editor" for modificateur
}