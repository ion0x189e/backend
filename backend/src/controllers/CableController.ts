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

export const getCableByReference = async (reference: string) => {
  try {
    return await cableCollection().findOne({ reference: reference });
  } catch (e) {
    return null;
  }
};

export const createCable = async (cable: Omit<Cable, '_id'>) => {
  const id = await cableCollection().insertOne(cable as Cable);
  return { ...cable, _id: id };
};

export const updateCable = async (query: { _id?: string, reference?: string }, cable: Partial<Omit<Cable, '_id'>>) => {
  try {
    let filter: { _id?: ObjectId, reference?: string } = {};
    if (query._id) {
      filter._id = new ObjectId(query._id);
    } else if (query.reference) {
      filter.reference = query.reference;
    } else {
      return null; // No valid identifier provided
    }

    const result = await cableCollection().updateOne(filter, { $set: cable });
    if (result.matchedCount === 0) {
      return null; // No cable found with the given identifier
    }

    // Fetch the updated cable
    const updatedCable = await cableCollection().findOne(filter);
    return updatedCable;
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