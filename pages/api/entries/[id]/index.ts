/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data = 
  | { message: string }
  | IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

  const {id} = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return getEntry(req, res)
  
    default:
      return res.status(400).json({ message: 'Metodo no existe' })
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const {id} = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: 'Id dont exist' });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true});
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error) {
    console.log(error)
    await db.disconnect();
    res.status(400).json({ message: 'Bad request' });
  }
  // entryToUpdate.description = description;
  // entryToUpdate.status = status;
  // await entryToUpdate.save();
}


const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const {id} = req.query;
  
  await db.connect();
  const entryInDb = await Entry.findById(id);
  await db.disconnect();

  if (!entryInDb) {
    return res.status(400).json({ message: 'Id dont exist' });
  }

  res.status(200).json(entryInDb);
}