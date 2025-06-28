import { getDb } from "../db.ts";
import { News } from "../models/NewsModel.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const newsCollection = () => getDb().collection<News>("news");

export const getNews = async () => {
  return await newsCollection().find().toArray();
};

export const getNewsById = async (id: string) => {
  try {
    return await newsCollection().findOne({ _id: new ObjectId(id) });
  } catch (e) {
    return null;
  }
};

export const createNews = async (title: string, content: string) => {
  const newNews: Partial<News> = { title, content, date: new Date() };
  const id = await newsCollection().insertOne(newNews as News);
  return { ...newNews, _id: id };
};

export const updateNews = async (id: string, title: string, content: string) => {
  try {
    await newsCollection().updateOne({ _id: new ObjectId(id) }, { $set: { title, content } });
    return await getNewsById(id);
  } catch (e) {
    return null;
  }
};

export const deleteNews = async (id: string) => {
  try {
    await newsCollection().deleteOne({ _id: new ObjectId(id) });
    return true;
  } catch (e) {
    return false;
  }
};