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
import NotFound from '../notFound/NotFound';

const title = 'Room';

export default 
  {path: '/room/:id',

  async action({ fetch, params}) {

    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{room(id: ' + params.id + '){id,host,headline,address1,address1,address2,city,state,zipcode,country,reviewsNumber,reviewsAverage,roomType,propertyType,checkInStart,checkInEnd,checkOutStart,checkOutEnd,bedrooms,guestsIncluded,guestsMax,beds,bathrooms,priceWeeknight,priceWeekend,priceWeek,priceSpecial,isInstantBookable,mainImage,otherImages,descriptionAbout,descriptionTheSpace,descriptionGuestAccess,descriptionInteractionWithGuests,descriptionOther}}',     }),
    });

    const { data } = await resp.json();


    if (!data || !data.room) {
 
      data.customMessage = "That room does not exist. But don\'t fear, we have plenty more where that came from!";

      return {
        title,
        component: <Layout><NotFound title="Umm.... Houston we have a problem!" customMessage={data.customMessage}/></Layout>,
      }
    } else {

      return {
        title,
        component: <Layout><Room title={title} room={data.room} /></Layout>,
      }

    };
  },
};


