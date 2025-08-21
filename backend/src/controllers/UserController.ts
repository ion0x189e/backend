/// <reference lib="deno.ns" />
import { getDb } from "../db.ts";
import { User } from "../types/user.ts";
import { Collection } from "https://deno.land/x/mongo@v0.32.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

const db = getDb();
const usersCollection: Collection<User> = db.collection("users");

export async function registerUser(email: string, password_plain: string, role: "user" | "admin" | "editor" = "user"): Promise<User | null> {
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return null; // User already exists
  }
  const password = await bcrypt.hash(password_plain);
  const newUser: User = { email, password, role };
  const { $oid } = await usersCollection.insertOne(newUser);
  return { ...newUser, _id: { "$oid": $oid } };
}

export async function loginUser(email: string, password_plain: string): Promise<User | null> {
  const user = await usersCollection.findOne({ email });
  if (!user || !user.password) {
    return null;
  }
  const isPasswordValid = await bcrypt.compare(password_plain, user.password);
  if (isPasswordValid) {
    // Ne pas retourner le mot de passe haché
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
  return null;
}

export async function updateUserPassword(userId: string, newPassword_plain: string): Promise<User | null> {
  const password = await bcrypt.hash(newPassword_plain);
  const updatedUser = await usersCollection.findAndModify(
    { "_id": { "$oid": userId } },
    { update: { $set: { password } }, new: true }
  );
  if (updatedUser) {
    const { password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword as User;
  }
  return null;
}

export async function updateUserRole(userId: string, newRole: "user" | "admin" | "editor"): Promise<User | null> {
  const updatedUser = await usersCollection.findAndModify(
    { "_id": { "$oid": userId } },
    { update: { $set: { role: newRole } }, new: true }
  );
  if (updatedUser) {
    const { password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword as User;
  }
  return null;
}

export async function deleteUser(userId: string): Promise<boolean> {
  const deleteCount = await usersCollection.deleteOne({ "_id": { "$oid": userId } });
  return deleteCount === 1;
}

export async function getUserById(userId: string): Promise<User | null> {
  const user = await usersCollection.findOne({ "_id": { "$oid": userId } });
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
  return null;
}

export async function getAllUsers(): Promise<User[]> {
  const users = await usersCollection.find().toArray();
  return users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  });
}