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
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';

function RatingStars(props) {
    var base = Math.floor(props.rating);
    var dec = props.rating % 1;

    return(
        <span>
          {base >=1 ? <ToggleStar></ToggleStar> : (dec >=.3 && dec <= .7 ? <ToggleStarHalf></ToggleStarHalf> : <ToggleStarBorder></ToggleStarBorder>)}
          {base >=2 ? <ToggleStar></ToggleStar> : (base == 1 && dec >=.3 && dec <= .7 ? <ToggleStarHalf></ToggleStarHalf> : <ToggleStarBorder></ToggleStarBorder>)}
          {base >=3 ? <ToggleStar></ToggleStar> : (base == 2 && dec >=.3 && dec <= .7 ? <ToggleStarHalf></ToggleStarHalf> : <ToggleStarBorder></ToggleStarBorder>)}
          {base >=4 ? <ToggleStar></ToggleStar> : (base == 3 && dec >=.3 && dec <= .7 ? <ToggleStarHalf></ToggleStarHalf> : <ToggleStarBorder></ToggleStarBorder>)}
          {base >=5 ? <ToggleStar></ToggleStar> : (base == 4 && dec >=.3 && dec <= .7 ? <ToggleStarHalf></ToggleStarHalf> : <ToggleStarBorder></ToggleStarBorder>)}
        </span>
    );
}


class HomeCard extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviewsNumber: PropTypes.number.isRequired,
    houseType: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    avgRating: PropTypes.number.isRequired,
  };

  render() {
    const { id, imgUrl, title, price, reviewsNumber, houseType, beds, avgRating } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to={"/room/" + id} >
            <img src={"/dynamic/roomImages/" + id + "/" + imgUrl} className={s.homeCardImg} />
            <h2 className={s.homeCardTitle}>${price} {title}</h2>
            <div className={s.homeCardDetails}>{houseType} - {beds} beds</div>
            <div className={s.homeCardReviews}>
            <RatingStars rating={avgRating} />
            {reviewsNumber} Reviews
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeCard);
