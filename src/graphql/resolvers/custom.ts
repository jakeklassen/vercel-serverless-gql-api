import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';

export const customResolvers = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};
