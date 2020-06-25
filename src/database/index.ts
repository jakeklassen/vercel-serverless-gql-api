import mongoose from 'mongoose';
import assert from 'assert';

assert(process.env.MONGO_URI != null);

const uri: string = process.env.MONGO_URI;
let conn: mongoose.Connection;

export const getConnection = async (): Promise<mongoose.Connection> => {
  if (conn == null) {
    conn = await mongoose.createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  return conn;
};
