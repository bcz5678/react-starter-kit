/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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

  location: {
    type: DataType.JSON,
    allowNull: false,
  },

  reviews: {
    type: DataType.JSON,
    allowNull: false,
  },

  listing: {
    type: DataType.JSON,
    allowNull: false,
  },
});

export default Room;