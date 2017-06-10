import { bookshelf } from '../bookshelf';

const Room = bookshelf.Model.extend({
  tableName: 'Room',
  hasTimestamps: true,
});

export default Room ;


/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 

import DataType from 'sequelize';
import Model from '../sequelize';

const Room = Model.define('Room', {

  id: {
    type: DataType.INTEGER,
    autoIncrement:true,
    primaryKey: true,
  },

  host: {
    type: DataType.INTEGER,
    allowNull: false,
  },

  city: {
    type: DataType.STRING(255),
    allowNull: false,
  },

  state: {
    type: DataType.STRING(255),
    allowNull: false,
  },

  city: {
    type: DataType.STRING(255),
    allowNull: false,
  },

  reviewsNumber: {
    type: DataType.INTEGER,
    allowNull: false,
  },

  reviewsAvgRating: {
    type: DataType.DECIMAL,
    allowNull: false,
  },

  instantBookable: {
    type: DataType.BOOLEAN,
    allowNull: false,

  },
  type: {
    type: DataType.STRING(255),
    allowNull: false,
  },
    propertyType: {
    type: DataType.STRING(255),
    allowNull: false,
  },
    checkInTime: {
    type: DataType.STRING(255),
    allowNull: false,
  },
    checkOutTime: {
    type: DataType.STRING(255),
    allowNull: false,
  },
    bedrooms: {
    type: DataType.INTEGER,
    allowNull: false,
  },
    guestsIncluded: {
    type: DataType.INTEGER,
    allowNull: false,
  },
    guestsMax: {
    type: DataType.INTEGER,
    allowNull: false,
  },
    beds: {
    type: DataType.INTEGER,
    allowNull: false,
  },
    bathrooms: {
    type: DataType.INTEGER,
    allowNull: false,
  },
    pricePerNight: {
    type: DataType.INTEGER,
    allowNull: false,
  },
    images: {
     type: DataType.STRING(255),
    allowNull: false,
  },
});

export default Room;

*/