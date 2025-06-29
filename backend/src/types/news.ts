import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

export interface News {
  _id: ObjectId;
  title: string;
  content: string;
  date: Date;
}