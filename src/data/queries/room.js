
import RoomType from '../types/RoomType';
import { resolver } from 'graphql-sequelize';
import Room from '../models/Room.js';

const room = {
  type: RoomType,
  resolve: resolver(Room),
};

export default room;