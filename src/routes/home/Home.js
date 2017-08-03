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
            </Row>
            <Row className={s.homeCardGrid}>
              <Col lg={4}>
                <HomeCard imgUrl="test1.jpg" title="Test #1" price="85" reviewsNumber="16"/>
              </Col>
              <Col lg={4}>
                <HomeCard imgUrl="test2.jpg" title="Test #2" price="115" reviewsNumber="65"/>
              </Col>
              <Col lg={4}>
                <HomeCard imgUrl="test3.jpg" title="Test #3" price="79" reviewsNumber="35"/>
              </Col>
              <Col lg={4}>
                <HomeCard imgUrl="test4.jpg" title="Test #4" price="45" reviewsNumber="13"/>
              </Col>
              <Col lg={4}>
                <HomeCard imgUrl="test5.jpg" title="Test #5" price="67" reviewsNumber="73"/>
              </Col>
              <Col lg={4}>
                <HomeCard imgUrl="test6.jpg" title="Test #6" price="98" reviewsNumber="25"/>
              </Col>
            </Row>
          </Grid>
        </div> 
      </div>
    );
  }
}

export default withStyles(s)(Home);
