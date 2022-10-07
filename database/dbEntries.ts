import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry, IEntry } from '../models';


export const getEntryById = async (id: string):Promise<IEntry | null> => {

  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Entry.findById(id).lean(); // lean usamos cuando sabemos que hay mucho menos volumen de data
  await db.disconnect();


  return JSON.parse(JSON.stringify(entry)); //Culpa de mongoose >:( // Se serializa por el id que lo coloca como ObjectId('456564656')

}