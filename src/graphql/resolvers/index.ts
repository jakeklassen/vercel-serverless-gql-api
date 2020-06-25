import { customResolvers } from './custom';
import { noteResolvers } from './note';

export const resolvers = [noteResolvers, customResolvers];
