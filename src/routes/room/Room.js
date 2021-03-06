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
import s from './Room.css';
import {ThemeProvider} from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Link from '../../components/Link';
import ToggleStar from 'material-ui/svg-icons/toggle/star.js';
import Avatar from 'material-ui/Avatar';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on.js';
import amber600 from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentRemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';

const fullTheme = {
  flexboxgrid: {
    gutterWidth: 0,
    outerMargin : 0,
  }
};


const roomInfo = {
  title: "THIS IS THE PROFILE TITLE",
  host: {
    id: 3456,
    displayName: "Bob & Carol",
    avatarImage: "3056_avatar_1.jpg",
  },
  location: {
    city: "Durham",
    state: "NC",
    country: "United States",
  },
  reviews: {
    number: 218,
    avgRating: 4.7,
  },
  listing: {
    type: "Private Room",
    propertyType: "Private House",
    checkInTime: "12pm-12am",
    checkOutTime: "12pm (noon)",
    bedrooms: 1,
    guestsIncluded: 2,
    guestsMax: 5,
    beds: 1,
    bathrooms: 1,
    pricePerNight: 75,
    images: {
      main: 'd7329e9a_original.jpg',

    },
    instantBookable: true,
    description: {
      about: 'Our renovated 1905 home is quietly tucked away in Historic Morehead Hill, a Durham neighborhood just southwest of the city center. There a sunny room, cozy bed and full, private bathroom await you. From here, it\'s a 10-minute walk to Downtown, DPAC, & Duke East. See the Getting Around section!) and the map below to help you determine how far we are from your favorite spot. At home, we provide a quiet and peaceful room after a day of site-seeing. We encourage you to read our entire listing.',
      theSpace: 'Our historic home built around 1905 has been completely renovated and updated. The home is located in a diverse, emerging, hsitoric neighborhood called Morehead Hill (see the Neighborhood section!). It is very safe, active, and near everything if you\'re willing to walk (we and our neighbirs walk just about everywhere - see the Getting Around section!). Overall the home is just shy of 1600 sq/ft, with 2 bedrooms and 2 baths. Your bedroom, which has a full-size bed and an attached, private, full bath, is located in the front of the house, just inside the front door for your ease in the coming and going. Plus, the room has both honeyconb shades and black-out drapes for adjusting your desired level of privacy and light. Your quiet, sunny room includes a desk, reading chair, and the bed is exra confy with a pillow top.   People spend a lot of time outside enjoyin the beautiful NorthCarolina weather and our neghborhood is no different. There is a large front porch for sipping some tea and a wonderful screened in back deck for monring coffee or relaxng witha cold beer. While you can\'t see it form the street, our backyard is liek a green cave with mature trees and a little creek. We especially love how private, quiet and wooded it is even though we are so close to downtown. from our screened-in back porch we\'ve spotted foxes, owls, hawks, raccoons, opossums, and an abundance of squirrels and birds.',      
      guestAccess: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend augue ac libero rhoncus, vitae posuere enim tempus. Nullam pellentesque ac ipsum vitae faucibus. Curabitur sit amet tristique justo. Nam ut mauris faucibus, elementum mauris eu, pretium mauris. Donec nec bibendum tellus. Quisque fringilla dignissim varius. Vivamus non mollis urna, vel imperdiet mi. Sed posuere magna turpis, vitae aliquet mauris luctus a. Nulla facilisi. Proin ac rhoncus urna, et ornare ex. Nullam consequat nunc lorem, nec rutrum sem ullamcorper non. In interdum sagittis lectus, non finibus massa vehicula quis. Phasellus vestibulum sed elit porta bibendum. Vivamus pretium commodo lorem, ultricies rutrum dui laoreet sed. Praesent accumsan arcu eget orci feugiat porttitor. Donec ultricies tempus leo a tristique. Morbi lacus nisi, egestas in sapien sed, tempus eleifend leo. Sed aliquam convallis leo, fringilla tristique ante faucibus eget. Maecenas velit tortor, consectetur vel lectus sit amet, suscipit suscipit nunc. Quisque commodo sollicitudin nibh, eget vehicula erat finibus vitae. Curabitur mattis porta eros, eget dictum nisl hendrerit at. Donec porta pretium sodales. Vivamus tortor metus, ornare et sapien a, congue sodales ligula. Morbi vitae dui tincidunt, tristique neque ac, mollis ligula. Proin ac justo quis ex dapibus rutrum. Maecenas vitae libero purus. Curabitur quam diam, facilisis et ligula ac, pulvinar finibus ipsum. ',
      interactionWithGuests: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend augue ac libero rhoncus, vitae posuere enim tempus. Nullam pellentesque ac ipsum vitae faucibus. Curabitur sit amet tristique justo. Nam ut mauris faucibus, elementum mauris eu, pretium mauris. Donec nec bibendum tellus. Quisque fringilla dignissim varius. Vivamus non mollis urna, vel imperdiet mi. Sed posuere magna turpis, vitae aliquet mauris luctus a. Nulla facilisi. Proin ac rhoncus urna, et ornare ex. Nullam consequat nunc lorem, nec rutrum sem ullamcorper non. In interdum sagittis lectus, non finibus massa vehicula quis. Phasellus vestibulum sed elit porta bibendum. Vivamus pretium commodo lorem, ultricies rutrum dui laoreet sed. Praesent accumsan arcu eget orci feugiat porttitor. Donec ultricies tempus leo a tristique. Morbi lacus nisi, egestas in sapien sed, tempus eleifend leo. Sed aliquam convallis leo, fringilla tristique ante faucibus eget. Maecenas velit tortor, consectetur vel lectus sit amet, suscipit suscipit nunc. Quisque commodo sollicitudin nibh, eget vehicula erat finibus vitae. Curabitur mattis porta eros, eget dictum nisl hendrerit at. Donec porta pretium sodales. Vivamus tortor metus, ornare et sapien a, congue sodales ligula. Morbi vitae dui tincidunt, tristique neque ac, mollis ligula. Proin ac justo quis ex dapibus rutrum. Maecenas vitae libero purus. Curabitur quam diam, facilisis et ligula ac, pulvinar finibus ipsum. ',
      other: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend augue ac libero rhoncus, vitae posuere enim tempus. Nullam pellentesque ac ipsum vitae faucibus. Curabitur sit amet tristique justo. Nam ut mauris faucibus, elementum mauris eu, pretium mauris. Donec nec bibendum tellus. Quisque fringilla dignissim varius. Vivamus non mollis urna, vel imperdiet mi. Sed posuere magna turpis, vitae aliquet mauris luctus a. Nulla facilisi. Proin ac rhoncus urna, et ornare ex. Nullam consequat nunc lorem, nec rutrum sem ullamcorper non. In interdum gittis lectus, non finibus massa vehicula quis. Phasellus vestibulum sed elit porta bibendum. Vivamus pretium commodo lorem, ultricies rutrum dui laoreet sed. Praesent accumsan arcu eget orci feugiat porttitor. Donec ultricies tempus leo a tristique. Morbi lacus nisi, egestas in sapien sed, tempus eleifend leo. Sed aliquam convallis leo, fringilla tristique ante faucibus eget. Maecenas velit tortor, consectetur vel lectus sit amet, suscipit suscipit nunc. Quisque commodo sollicitudin nibh, eget vehicula erat finibus vitae. Curabitur mattis porta eros, eget dictum nisl hendrerit at. Donec porta pretium sodales. Vivamus tortor metus, ornare et sapien a, congue sodales ligula. Morbi vitae dui tincidunt, tristique neque ac, mollis ligula. Proin ac justo quis ex dapibus rutrum. Maecenas vitae libero purus. Curabitur quam diam, facilisis et ligula ac, pulvinar finibus ipsum. ',
    }
  }
};

const avatar = require('../../media/avatars/' + roomInfo.host.avatarImage);
//const mainImage = require('../../../public/roomImages/' + roomInfo.listing.images.main);
const piggyBank = require('../../media/piggy-bank.png');

const pathToRoomImages = require.context('../../media/roomImages/',true);
 

class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  guestsDrop: 1, 
                    adults: 1, 
                    kids: 0, 
                    infants: 0
                  };
  }


  static propTypes = {
    title: PropTypes.string.isRequired,
    //room: PropTypes.objectOf(PropTypes.shape({
      // id: PropTypes.number.isRequired,
      // host: PropTypes.number.isRequired,
      // location: PropTypes.object.isRequired,
      // listing: PropTypes.object.isRequired,
      // reviews: PropTypes.object.isRequired
    //  })).isRequired
  };


  handleChange = (event, index, value) => {this.setState({guestDrops: value});}

  incrementAdults = () => {this.setState({adults: this.state.adults + 1});}
  
  decrementAdults = () => {this.setState({adults: this.state.adults - 1});}

  incrementKids = () => {this.setState({kids: this.state.kids + 1});}
  
  decrementKids = () => {this.setState({kids: this.state.kids - 1});}

  incrementInfants = () => {this.setState({infants: this.state.infants + 1});}
  
  decrementInfants = () => {this.setState({infants: this.state.infants - 1});}
  

  render() {

    return (

      <ThemeProvider theme={fullTheme}>
        <Grid fluid={true}>
          <Row>
            <img className={s.coverImage} src={"/dynamic/roomImages/" + this.props.room.id + "/" + this.props.room.mainImage} />
          </Row>
          <Row className={s.contentContainer}>
            <Col className={s.roomContainer} xs={12} md={6} mdOffset={2}>
              <Row className={s.secondaryNavigation}>
                <div role="navigation">
                  <Link className={s.link} to="#Overview">Overview</Link>
                  <Link className={s.link} to="#Reviews">Reviews</Link>
                  <Link className={s.link} to="#TheHost">The Host</Link>
                  <Link className={s.link} to="#Location">Location</Link>
                </div>
              </Row>
              <Row className={s.roomHeaderContainer}>
                <Col xs={12} md={10}>
                  <Row>
                    <h1>{ this.props.room.headline }</h1>
                  </Row>
                  <Row>
                    <h3>{ this.props.room.city }, { this.props.room.state }, { this.props.room.country }</h3>
                    <span className={s.reviewNumberContainer}>
                      <ToggleStar />                  
                      <ToggleStar />
                      <ToggleStar />
                      <ToggleStar />
                      <ToggleStar />
                      <span className={s.reviewNumberText}>
                        { this.props.room.reviewsNumber } Reviews
                      </span>
                    </span>
                  </Row>
                </Col>
                <Col xs={12} md={2}>
                  <div className={s.avatarImage} >
                    <Avatar src={ avatar } size={65} />
                  </div>
                  <div className={s.avatarName} >
                    { this.props.room.host }


                  </div>
                </Col>
              </Row>
              <Row className={s.roomSummaryContainer}>
                  <Col className={s.summaryItem} md={3}>
                  { this.props.room.roomType }
                  </Col>
                  <Col className={s.summaryItem} md={3}>
                    { this.props.room.guestsIncluded == 1 ? this.props.room.guestsIncluded + " Guest" : this.props.room.guestsIncluded + " Guests" }
                  </Col>
                  <Col className={s.summaryItem} md={3}>
                    { this.props.room.bedrooms == 1 ? this.props.room.bedrooms + " Bedroom" : this.props.room.bedrooms + " Bedrooms" }
                  </Col>
                  <Col className={s.summaryItem} md={3}>
                    { this.props.room.beds == 1 ? this.props.room.beds + " Bed" : this.props.room.beds + " Beds" }
                  </Col>
              </Row>
              <Row className={s.guaranteeContainer}>
                <Col xs={6} md={1}>
                  <img src={piggyBank} /> 
                </Col>
                <Col>
                  <h3 className={s.guranteeHeadline}>100% Refundable</h3>
                  <p className={s.guranteeText}>
                    Cancel up to 5 days before your trip amd get a full refund, including service fees.
                  </p>
                </Col>
              </Row>
              <Row className={s.contentDescription}>
                  <h2>About This Listing </h2>
                  {this.props.room.descriptionAbout}
                   
                  { this.props.room.descriptionTheSpace ? 
                    <div>
                      <h3>The Space</h3>
                      <p>{this.props.room.descriptionTheSpace}</p>
                    </div> 

                    : '' }

                  { this.props.room.descriptionGuestAccess ? 
                    <div>
                      <h3>Guest Access</h3>
                      <p>{this.props.room.descriptionGuestAccess}</p>
                    </div> 

                    : '' }

                    { this.props.room.descriptionInteractionWithGuests ? 
                    <div>
                      <h3>Interaction with Guests</h3>
                      <p>{this.props.room.descriptionInteractionWithGuests}</p>
                    </div> 

                    : '' }

                    { this.props.room.descriptionOther ? 
                    <div>
                      <h3>Other things to note</h3>
                      <p>{this.props.room.descriptionOther}</p>
                    </div> 

                    : '' }

                    <Link to="">Contact Host</Link>
              </Row>
              <Row className={s.theSpaceContainer}>
                <Col md={2} className={s.midcontentLeftHeader}>
                  The Space
                </Col>
                <Col md={5} className={s.midcontentColumnOne}>

                    <li>Accomodates: { this.props.room.guestsIncluded }</li>
                    <li>Bathrooms: { this.props.room.bathrooms }</li>
                    <li>Bedrooms: {this.props.room.bedrooms }</li>
                    <li>Beds: {this.props.room.beds }</li>
                    <Link to="#house-rules">House Rules</Link>
                </Col>
                <Col md={5} className={s.midcontentColumnTwo}>
                    <li>Check In Time: { this.props.room.checkInStart }- { this.props.room.checkInEnd }</li>
                    <li>Check Out Time: { this.props.room.checkOutStart }- { this.props.room.checkOutEnd }</li>
                    <li>Property Type: {this.props.room.propertyType }</li>
                    <li>Room Type: {this.props.room.roomType }</li>
                </Col>
              </Row>
              <Row className={s.ammenitiesContainer}>
                <Col md={2} className={s.midcontentLeftHeader}>
                  Ammenities
                </Col>
                <Col md={5} className={s.midcontentColumnOne}>

                </Col>
                <Col md={5} className={s.midcontentColumnTwo}>
                   
                </Col>
              </Row>
              <Row className={s.pricesContainer}>
                <Col md={2} className={s.midcontentLeftHeader}>
                  Prices 
                </Col>
                <Col md={5} className={s.midcontentColumnOne}>

                    
                </Col>
                <Col md={5} className={s.midcontentColumnTwo}>
                   
                </Col>
              </Row>
            </Col>
            <Col className={s.stickyBoxContainer} xs={12} md={2}>
              <Row className={s.stickyBoxHeader}>
              { this.props.room.isInstantBookable &&  <ImageFlashOn color='#ffb300' />}${ this.props.room.priceWeeknight } per night
              </Row>
              <Row className={s.stickyBoxContent}>
                <Row>
                  <Col xs={12} md={6} >
                    Check-in
                    <div className={s.inputBorder}>
                      <DatePicker container="inline" />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    Check-Out
                    <div className={s.inputBorder}>
                      <DatePicker container="inline" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  Guests
                  <div className={s.inputBorder}>
                    <SelectField 
                    labelText="1 Guest"
                    value={this.state.guestDrops}
                    onChange = {this.handleChange}
                    >
                    <MenuItem value={1} primaryText="1 Guest" />
                    <MenuItem value={2} primaryText="2 Guests" />
                    <MenuItem value={3} primaryText="3 Guests" />
                    <MenuItem value={4} primaryText="4 Guests" />
                    <MenuItem value={5} primaryText="5 Guests" />
                    </SelectField>
                  </div>
                </Row>
                <Row>
                  Guests #2
                  <div className={s.inputBorder}>
                    <SelectField 
                    labelText="1 Guest"
                    value={this.state.value}
                    onChange = {this.handleChange}
                    >
                    <div>
                      <Row>
                        <Col md={3}>
                        Adults
                        </Col>
                        <Col md={9}>
                          <IconButton onClick= {this.decrementAdults} disabled={this.state.adults == 0}>
                            <ContentRemoveCircleOutline />
                          </IconButton> 
                          {this.state.adults} Adults 
                          <IconButton  onClick = {this.incrementAdults}>
                            <ContentAddCircleOutline />
                          </IconButton> 
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        Kids
                        </Col>
                        <Col md={9}>
                          <IconButton onClick = {this.decrementKids} disabled={this.state.kids == 0}>
                            <ContentRemoveCircleOutline />
                          </IconButton> 
                          {this.state.kids} Kids
                          <IconButton onClick = {this.incrementKids}>
                            <ContentAddCircleOutline />
                          </IconButton> 
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                        Infants
                        </Col>
                        <Col md={9}>
                          <IconButton onClick = {this.decrementInfants} disabled={this.state.infants == 0}>
                            <ContentRemoveCircleOutline />
                          </IconButton> 
                          {this.state.infants} Infants
                          <IconButton onClick = {this.incrementInfants}>
                            <ContentAddCircleOutline />
                          </IconButton> 
                        </Col>
                      </Row>
                    </div>
                    </SelectField>
                  </div>
                </Row>
                <Row>
                  <FlatButton
                    backgroundColor="#FF5A5F"
                    hoverColor="#FF7E82"
                    label="Request Booking"
                    style="color:#fff;"
                  />
                </Row>
                <Row>
                  <span className={s.stickyboxSmall}> 100% Refundable - You will not be charged yet </span>
                </Row>

                <Row>
                  <Col md={8}>
                    <div className={s.stickyboxNotification}>
                      <h4>This Home is on Peoples Minds</h4>
                      <p>It's been viewed more than 500+ times in the past weeks.</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    Image
                  </Col>
                </Row>
              </Row>

              <Row className={s.stickyWishlistContainer}>

              Wishlist

              </Row>
            </Col>
          </Row>
        </Grid>
      </ThemeProvider>

    );
  }
}

export default withStyles(s)(Room);
