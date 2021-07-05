import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  title: String,
  description: String,
  image: String,
});

interface IPhoto extends Document {
  title: string;
  description: string;
  image: string;
}

export default model<IPhoto>('Photo', schema);
