
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import Photo from '../models/Photo';

export async function getPhoto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const photo = await Photo.findById(id);
  return res.json(photo);
}

export async function getPhotos(req: Request, res: Response): Promise<Response> {
  const photos = await Photo.find();
  return res.send(photos);
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {
  const { title, description } = req.body;
  const { path } = req.file;
  const newPhoto = {
    title,
    description,
    image: path
  }
  const photo = new Photo(newPhoto);
  await photo.save();
  return res.json({
    message: 'Photo sucessfully saved'
  });
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const photo = await Photo.findByIdAndRemove(id);
  if (photo) {
    fs.unlink(path.resolve(photo.image));
  }
  return res.json({
    message: 'Photo Deleted',
    photo
  });
}

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const { title, description } = req.body;
  const photo = await Photo.findByIdAndUpdate(id, {
    title,
    description
  }, { new: true });
  return res.json({
    message: "Sucessfully updated",
    photo
  });
}
