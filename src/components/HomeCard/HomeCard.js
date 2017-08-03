/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeCard.css';

class HomeCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviewsNumber: PropTypes.number.isRequired,
  };

  render() {
    const { imgUrl, title, price, reviewsNumber  } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <img src={imgUrl} className={s.homeCardImg} />
          <h2 className={s.homeCardTitle}>${price} {title}</h2>
          <div className={s.homeCardReviews}>{reviewsNumber}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeCard);
