import { getDb } from "../db.ts";
import { Cable } from "../types/cable.ts";
import { ObjectId } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const cableCollection = () => getDb().collection<Cable>("cables");

export const getCables = async () => {
  return await cableCollection().find().toArray();
};

export const getCableById = async (id: string) => {
  try {
    return await cableCollection().findOne({ _id: new ObjectId(id) });
  } catch (e) {
    return null;
  }
};

export const createCable = async (cable: Omit<Cable, '_id'>) => {
  const id = await cableCollection().insertOne(cable as Cable);
  return { ...cable, _id: id };
};

export const updateCable = async (id: string, cable: Partial<Omit<Cable, '_id'>>) => {
  try {
    await cableCollection().updateOne({ _id: new ObjectId(id) }, { $set: cable });
    return await getCableById(id);
  } catch (e) {
    return null;
  }
};

export const deleteCable = async (id: string) => {
  try {
    await cableCollection().deleteOne({ _id: new ObjectId(id) });
    return true;
  } catch (e) {
    return false;
  }
};