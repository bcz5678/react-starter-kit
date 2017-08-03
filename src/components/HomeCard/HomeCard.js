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
import Link from '../Link';
import SvgIcon from 'material-ui/SvgIcon';

let StarIconFilled = (props) => {
    return(
      <SvgIcon {...props}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </SvgIcon>
    )
  };

let StarIconHalf = (props) => {
    return(
      <SvgIcon {...props}>
       <defs>
        <path d="M0 0h24v24H0V0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" />
    </clipPath>
    <path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
      </SvgIcon>
    )
  };

let StarIconBlank = (props) => {
    return(
      <SvgIcon {...props}>
       <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
      </SvgIcon>
    )
  };

class HomeCard extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviewsNumber: PropTypes.number.isRequired,
    houseType: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
  };

  render() {
    const { id, imgUrl, title, price, reviewsNumber, houseType, beds } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to={"/room/" + id} >
            <img src={"/dynamic/roomImages/" + id + "/" + imgUrl} className={s.homeCardImg} />
            <h2 className={s.homeCardTitle}>${price} {title}</h2>
            <div className={s.homeCardDetails}>{houseType} - {beds} beds</div>
            <div className={s.homeCardReviews}>
            <StarIconFilled></StarIconFilled>
            <StarIconFilled></StarIconFilled>
            <StarIconFilled></StarIconFilled>
            <StarIconHalf></StarIconHalf>
            <StarIconBlank></StarIconBlank>
            {reviewsNumber} Reviews
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeCard);
