import { ApolloError } from 'apollo-server-micro';
import dayjs from 'dayjs';
import mongoose from 'mongoose';
import { INote, Note as NoteModel } from '../../database/models/note';

export const noteResolvers = {
  Query: {
    getAllNotes: async (
      parent: any,
      args: any,
      { dbConn }: { dbConn: mongoose.Connection },
    ): Promise<INote[]> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      let list: INote[];

      try {
        list = await Note.find().exec();
      } catch (error) {
        console.error('> getAllNotes error: ', error);

        throw new ApolloError('Error retrieving all notes');
      }

      return list;
    },

    getNote: async (
      parent: any,
      { _id }: { _id: INote['_id'] },
      { dbConn }: { dbConn: mongoose.Connection },
    ): Promise<INote | null> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      try {
        return await Note.findById(_id).exec();
      } catch (error) {
        console.error('> getNote error: ', error);

        throw new ApolloError('Error retrieving all notes');
      }
    },
  },

  Mutation: {
    saveNote: async (
      parent: any,
      { title, content }: { title: INote['title']; content: INote['content'] },
      { dbConn }: { dbConn: mongoose.Connection },
    ): Promise<INote> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      try {
        const note = await Note.create({
          title,
          content,
          date: dayjs().toDate(),
        });

        return note;
      } catch (error) {
        console.error('> saveNote error: ', error);

        throw new ApolloError('Error creating note');
      }
    },

    deleteNote: async (
      parent: any,
      { _id }: { _id: INote['_id'] },
      { dbConn }: { dbConn: mongoose.Connection },
    ): Promise<INote | null> => {
      const Note: mongoose.Model<INote> = NoteModel(dbConn);

      try {
        return await Note.findByIdAndDelete(_id).exec();
      } catch (error) {
        console.error('> getNote error: ', error);

        throw new ApolloError('Error retrieving all notes');
      }
    },
  },
};
