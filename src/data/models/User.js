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
import bcrypt from 'bcrypt-nodejs';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  emailConfirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

  password: {
    type: DataType.STRING(255)
  },

}, {

  indexes: [
    { fields: ['email'] },
  ],

  classMethods: {
    generateHash: function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }
  },

  instanceMethods: {
    verifyPassword: function(password) {
      console.log(password + " - " + this.password);
      return bcrypt.compareSync(password, this.password);
    },

    generateHash: function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }

  }
});

export default User;
