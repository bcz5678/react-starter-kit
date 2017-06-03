/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Room from './Room';

const title = 'Room';

export default {

  path: '/room',

  async action({ fetch }) {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{room{id,host,location,listing,reviews}}',
      }),
    });

    const { data } = await resp.json();

    console.log();

    if (!data || !data.room) throw new Error('Failed to load room.');
    return {
      title,
      component: <Layout><Room title={title} /></Layout>,
    };
  },

};
