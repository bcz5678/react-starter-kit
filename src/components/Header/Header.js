/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';
import ActionSearch from 'material-ui/svg-icons/action/search.js';
import TextField from 'material-ui/TextField';


class Header extends React.Component {
  render() {
    return (
      <Grid fluid={true} className={s.headerContainer}>
        <Row>
          <Col xs={12}  md={1} className={s.brandingContainer}>
            <Link to="/">
              <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            </Link>
          </Col>
          <Col xs={12}  md={3} >
            <ActionSearch className={s.searchIcon}/>
            <TextField hintText="Search" className={s.searchInput} />
          </Col>
          <Col xs={12}  md={6}>
            <Navigation />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Header);
