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
import s from './Home.css';
import {ThemeProvider} from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Link from '../../components/Link';
import HomeCard from '../../components/HomeCard';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Home extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Grid>
            <Row className={s.homeHeadContainer}>
              <Col md={8}>
                <h1 className={s.homeHead}>Airbnb</h1>
                <h2 className={s.homeHeadBody}>Book unique homes and experience a city like a local</h2>
              </Col>
            </Row>
            <Row className={s.homeSearchContainer}>
              <TextField className={s.homeSearchField}
                hintText ="e.g. New York City"
                floatingLabelText="Where"
                floatingLabelFixed={true}
              />   
              <TextField className={s.homeSearchField}
                hintText ="12/31/2017" 
                floatingLabelText="When"
                floatingLabelFixed={true}
              /> 
              <TextField className={s.homeSearchField}
                hintText ="2"
                floatingLabelText="Guests"
                floatingLabelFixed={true}
              /> 

              <FlatButton
                  backgroundColor="#FF5A5F"
                  hoverColor="#FF5A5F"
                  label="Search"
                  style="color:#fff;"
              />
            </Row>
            <Row className={s.homeSectionHeader}>
              <Col xs={12} md={6}>
                Homes
              </Col>
              <Col xs={12} md={1} mdOffset={5}>
                <Link className={s.linkAll} to="/rooms" >See All > </Link>
              </Col>
            </Row>
            <Row className={s.homeCardGrid}>
              <Col xs={12} sm={6} md={4}>
                <HomeCard id="1" imgUrl="test1.jpg" title="Test #1" price="85" houseType="Entire Apartment" beds="2" reviewsNumber="16"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <HomeCard id="2" imgUrl="test2.jpg" title="Test #2" price="115" houseType="Entire Apartment" beds="2" reviewsNumber="65"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <HomeCard id="3" imgUrl="test3.jpg" title="Test #3" price="79" houseType="Entire Apartment" beds="2" reviewsNumber="35"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <HomeCard id="4" imgUrl="test4.jpg" title="Test #4" price="45" houseType="Entire Apartment" beds="2" reviewsNumber="13"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <HomeCard id="5" imgUrl="test5.jpg" title="Test #5" price="67" houseType="Entire Apartment" beds="2" reviewsNumber="73"/>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <HomeCard id="6" imgUrl="test6.jpg" title="Test #6" price="98" houseType="Entire Apartment" beds="2" reviewsNumber="25"/>
              </Col>
            </Row>
          </Grid>
        </div> 
      </div>
    );
  }
}

export default withStyles(s)(Home);
