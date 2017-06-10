
/*
import RoomType from '../types/RoomType';
import { resolver } from 'graphql-sequelize';
import Room from '../models/Room.js';
import  { GraphQLInt } from 'graphql';

const room = {
  type: RoomType,
  args: {
  	id: { type: GraphQLInt},
  },
  resolve: resolver(Room),
};

export default room;

*/

import RoomType from '../types/RoomType';
import Room from '../models/Room';
import  { GraphQLInt } from 'graphql';
import graphQLBookshelf from 'graphql-bookshelfjs';

const room = {
  type: RoomType,
  args: {
  	id: { name: 'Id of the Room',
        type: GraphQLInt
      }
  },
  resolve: graphQLBookshelf.resolverFactory(Room)
};

export default room;