import mongoose from 'mongoose';

export interface INote extends mongoose.Document {
  title: string;
  content: string;
  date: Date;
}

const schema: mongoose.SchemaDefinition = {
  title: { type: mongoose.SchemaTypes.String, required: true },
  content: { type: mongoose.SchemaTypes.String, required: true },
  date: { type: mongoose.SchemaTypes.Date, required: true },
};

const collectionName = 'note';
const noteSchema = new mongoose.Schema(schema);

export const Note = (conn: mongoose.Connection): mongoose.Model<INote> =>
  conn.model(collectionName, noteSchema);
