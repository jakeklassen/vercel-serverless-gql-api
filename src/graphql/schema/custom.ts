import { gql } from 'apollo-server-micro';

export const customSchema = gql`
  scalar Date
  scalar Time
  scalar DateTime
`;
