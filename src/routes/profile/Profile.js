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
import s from './Profile.css';
import {ThemeProvider} from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Link from '../../components/Link';
import ToggleStar from 'material-ui/svg-icons/toggle/star.js';
import Avatar from 'material-ui/Avatar';
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on.js';
import amber600 from 'material-ui/styles/colors';

const fullTheme = {
  flexboxgrid: {
    gutterWidth: 0,
    outerMargin : 0,
  }
};


const profileInfo = {
  title: "THIS IS THE PROFILE TITLE",
  host: {
    id: 3056,
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
    bedrooms: 1,
    guestsIncluded: 2,
    guestsMax: 5,
    beds: 1,
    pricePerNight: 75,
    images: {
      main: 'd7329e9a_original.jpg',

    },
    instantBookable: true,
  }
};

const avatar = require('../../../public/avatars/' + profileInfo.host.avatarImage);
const mainImage = require('../../../public/profileImages/' + profileInfo.listing.images.main);

class Profile extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };


  render() {
    return (
      <ThemeProvider theme={fullTheme}>
        <Grid fluid={true}>
          <Row>
            <img className={s.coverImage} style={{backgroundImage: 'url(' + mainImage + ')' }} />
          </Row>
          <Row className={s.contentContainer}>
            <Col className={s.profileContainer} xs={12} md={6} mdOffset={2}>
              <Row className={s.secondaryNavigation}>
                <div role="navigation">
                  <Link className={s.link} to="#Overview">Overview</Link>
                  <Link className={s.link} to="#Reviews">Reviews</Link>
                  <Link className={s.link} to="#TheHost">The Host</Link>
                  <Link className={s.link} to="#Location">Location</Link>
                </div>
              </Row>
              <Row className={s.profileHeaderContainer}>
                <Col xs={12} md={10}>
                  <Row>
                    <h1>{ profileInfo.title }</h1>
                  </Row>
                  <Row>
                    <h3>{ profileInfo.location.city }, { profileInfo.location.state }, { profileInfo.location.country }</h3>
                    <span className={s.reviewNumberContainer}>
                      <ToggleStar />                  
                      <ToggleStar />
                      <ToggleStar />
                      <ToggleStar />
                      <ToggleStar />
                      <span className={s.reviewNumberText}>
                        { profileInfo.reviews.number } Reviews
                      </span>
                    </span>
                  </Row>
                </Col>
                <Col xs={12} md={2}>
                  <div className={s.avatarImage} >
                    <Avatar src={ avatar } size={65} />
                  </div>
                  <div className={s.avatarName} >
                    { profileInfo.host.displayName }
                  </div>
                </Col>
              </Row>
              <Row className={s.profileSummaryContainer}>
                  <Col className={s.summaryItem} md={3}>
                  { profileInfo.listing.type }
                  </Col>
                  <Col className={s.summaryItem} md={3}>
                    { profileInfo.listing.guestsIncluded == 1 ? profileInfo.listing.guestsIncluded + " Guest" : profileInfo.listing.guestsIncluded + " Guests" }
                  </Col>
                  <Col className={s.summaryItem} md={3}>
                    { profileInfo.listing.bedrooms == 1 ? profileInfo.listing.bedrooms + " Bedroom" : profileInfo.listing.bedrooms + " Bedrooms" }
                  </Col>
                  <Col className={s.summaryItem} md={3}>
                    { profileInfo.listing.beds == 1 ? profileInfo.listing.beds + " Bed" : profileInfo.listing.beds + " Beds" }
                  </Col>
              </Row>
              <Row>


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at risus risus. Vestibulum laoreet risus diam, nec condimentum turpis consequat sed. Cras orci massa, luctus consequat ligula sit amet, tempor varius sapien. Ut enim nibh, porttitor nec porttitor eget, ornare ut ex. Sed ut cursus augue, id ultricies ligula. Praesent vulputate turpis a pharetra dictum. Nullam felis mauris, gravida quis ante sed, posuere laoreet ipsum. Integer ac lacinia lacus. Suspendisse enim felis, sodales sed tempus eu, egestas in elit. Sed at turpis ac nisl ultricies cursus ut ac lectus. Ut est nulla, finibus sit amet quam et, volutpat tempus nunc. Nunc imperdiet vehicula ligula vel dignissim. Morbi volutpat sapien et magna laoreet consectetur.

Ut malesuada, quam vel lobortis convallis, magna neque auctor nisl, quis lacinia tellus eros at eros. Morbi massa lacus, condimentum eleifend dignissim ac, commodo nec nibh. Aenean vel odio metus. Sed sed faucibus leo, ut facilisis libero. Maecenas porttitor ante sit amet porttitor consectetur. Aenean at arcu eget libero malesuada rhoncus eu ut felis. Proin eleifend, ipsum eget rutrum pulvinar, tortor eros sollicitudin ante, et volutpat augue turpis eget mi. Praesent ac rutrum mauris.

Aliquam commodo semper venenatis. Nullam vel nunc viverra, faucibus urna nec, dapibus enim. Sed et lacinia lacus. Vivamus non rhoncus sapien. Integer maximus iaculis tempus. Maecenas facilisis dolor vitae volutpat elementum. Sed aliquet fringilla aliquet. Nam sit amet dui nec mi porta sollicitudin. Praesent euismod tristique justo convallis mollis. Ut quis facilisis lacus. Pellentesque tristique accumsan libero, vitae facilisis lectus. Curabitur laoreet tellus mauris, ut rhoncus turpis efficitur id. Phasellus ut risus pharetra, molestie elit eu, suscipit arcu. Curabitur ac ligula a justo blandit consequat. Cras ornare dolor vitae quam accumsan eleifend. In pellentesque sollicitudin tortor.

Nullam dictum vitae ipsum ac mattis. Pellentesque nisi velit, maximus in libero id, faucibus feugiat mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at sapien lobortis, venenatis nisl sit amet, efficitur tellus. Aliquam venenatis in nisl ac eleifend. Nullam quis dictum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat nibh scelerisque justo interdum dignissim.

In hendrerit vulputate eleifend. Nullam urna neque, porta ac massa sed, pretium ullamcorper sapien. Curabitur fermentum pulvinar mauris, eget hendrerit velit dictum vel. Morbi in ultrices lectus, at mollis ligula. Integer blandit dignissim magna, vitae laoreet nisi accumsan ac. Phasellus finibus dapibus placerat. Duis sed dapibus ante. Suspendisse luctus ultrices gravida. Nulla nec semper nunc.

Donec convallis aliquam magna, placerat venenatis mi aliquam nec. Duis viverra commodo augue ac malesuada. Ut eleifend massa vulputate varius varius. Donec urna eros, placerat ut tristique ac, luctus et ipsum. Nullam placerat quam risus, ut lobortis tellus viverra ac. Donec vel metus lacus. In hac habitasse platea dictumst. Suspendisse vulputate at sem eget vestibulum. Pellentesque sagittis lectus sed nisl tristique cursus. Pellentesque lacus nisi, bibendum posuere cursus quis, commodo a mauris. Suspendisse risus quam, sagittis ut urna eu, molestie venenatis mauris. Sed volutpat finibus ipsum, vitae placerat velit mollis et. Nunc tempor feugiat hendrerit. Etiam at diam a libero faucibus porttitor non at ipsum.

Nunc in dolor vitae diam varius congue eu id quam. Sed ac arcu ac ipsum consectetur elementum pellentesque quis est. Ut id lectus vel risus mollis malesuada. In hac habitasse platea dictumst. Etiam porta metus vitae ipsum egestas efficitur quis eu orci. Quisque nec consectetur turpis. Quisque euismod dignissim quam, ac rhoncus urna lobortis vitae.

Cras consectetur eleifend ultricies. Aenean imperdiet ligula quis diam eleifend, eget mollis nisi feugiat. Sed in dolor consequat, auctor dui sed, ultrices tortor. Nulla id odio ut enim consequat aliquet. Morbi rutrum, diam vel consequat dignissim, augue purus pellentesque lacus, eget sodales felis magna mollis metus. Vivamus at mi luctus, vulputate lacus ut, dictum elit. Vivamus quis risus nunc. Phasellus erat sapien, convallis non nulla sit amet, interdum venenatis urna. Aliquam placerat bibendum est, ac tempor ipsum dictum vel. Aenean gravida turpis et velit molestie maximus. Ut sagittis urna sed quam scelerisque tincidunt. Mauris ultrices mauris et leo pellentesque dapibus. Nulla vestibulum ligula in purus finibus, vitae posuere sem sodales.

Mauris id egestas neque, in rhoncus nulla. Nunc lacinia, magna vitae condimentum vulputate, ante dui egestas est, vel cursus turpis dui eget metus. Sed imperdiet ultrices nibh, ut tincidunt felis rutrum hendrerit. Nulla pretium felis eu felis cursus tincidunt. Integer vitae dui vitae nulla commodo gravida eu vel lectus. Duis lorem felis, faucibus ac dignissim vitae, tincidunt suscipit turpis. Quisque nec lorem sit amet magna varius eleifend non eu ipsum. Suspendisse purus urna, euismod nec nisl at, mollis varius dui.

Suspendisse mattis, dui at vehicula hendrerit, nibh purus blandit tellus, id cursus magna sapien auctor risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum dapibus enim elit, sed dignissim sapien dapibus non. Maecenas tincidunt eget tellus vitae euismod. In quis tellus nec enim ultrices porttitor. In auctor est urna, vel dignissim sem malesuada sit amet. Aliquam in nulla sed tellus dictum luctus. Morbi tincidunt erat ac urna suscipit, ut congue mauris consectetur. Integer tellus arcu, ultrices sit amet ipsum sed, auctor scelerisque massa.

Mauris sollicitudin interdum leo et mattis. Nam blandit, sem quis efficitur tincidunt, erat mauris cursus mauris, ac facilisis sem arcu nec massa. Suspendisse viverra urna dolor, in egestas sapien imperdiet in. Praesent nibh turpis, ullamcorper non diam vitae, blandit tincidunt orci. Nunc at arcu sapien. Nullam scelerisque lacus quis eros ultricies, vitae ultrices sem sagittis. Nunc pellentesque sit amet nisl et eleifend. Duis eros nibh, aliquam sit amet orci quis, elementum fermentum lorem. Duis et nulla odio. Vivamus condimentum ut enim quis pretium. Donec dignissim arcu vitae lorem sagittis aliquet. Integer at velit enim. Donec eget consectetur nibh, id euismod dui. Nam in vehicula mi. Morbi id aliquam enim, sed condimentum velit.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer luctus tristique fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sodales lectus nibh, convallis convallis dui efficitur eget. Proin lobortis odio ut nulla tempor rhoncus. Morbi gravida diam et ex maximus rutrum. Sed luctus erat sem, consectetur laoreet ex euismod at. Mauris sollicitudin porta arcu. In hac habitasse platea dictumst. Aliquam eu neque quis orci fermentum porta vel eu ligula. Ut congue ligula neque, id sollicitudin risus facilisis venenatis. Donec blandit leo vel elementum pellentesque.

Duis mauris sem, porttitor eget ornare vel, sagittis sit amet tellus. Cras vel porttitor dui. Donec et ante at quam congue varius. Nunc tellus nisi, consequat eget interdum id, interdum sed neque. Nunc ultrices non erat id ultrices. Nulla blandit ex ut finibus accumsan. Morbi commodo turpis eu neque viverra cursus. Curabitur nisl justo, molestie dictum volutpat a, suscipit et orci. Donec et felis quis nunc tristique congue non vel dolor. Cras auctor urna quis magna dignissim cursus. Nam fringilla, nunc vel rutrum posuere, ligula leo volutpat ante, eu dapibus urna risus ac ante. Aenean nec suscipit nibh, a semper massa. Maecenas quis placerat justo.

Morbi pretium non turpis nec volutpat. Vivamus ac bibendum erat. Aliquam erat volutpat. Cras volutpat felis at ante tristique convallis. Nulla et dui ultricies, hendrerit sapien vel, tristique nisl. Phasellus vitae venenatis sapien. Pellentesque id velit facilisis, mattis augue a, laoreet leo.

Curabitur pellentesque arcu iaculis ante varius lobortis. Duis vel finibus risus. Duis turpis lorem, lacinia ac felis at, iaculis consectetur ligula. Duis molestie pellentesque dapibus. Aliquam sit amet elementum lacus. Vestibulum est ex, efficitur non pretium at, elementum sit amet orci. Praesent pretium pulvinar luctus. Cras porta odio a auctor facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tempus risus sit amet molestie faucibus. Phasellus condimentum lobortis est eu auctor. Mauris a posuere lectus.

Integer aliquam nunc sed rhoncus egestas. Donec lobortis nisl convallis, tempus mi sed, congue tortor. Nunc at urna varius, pellentesque arcu a, laoreet mauris. Morbi congue velit ac aliquet iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a ultricies erat, nec porttitor dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Proin a sem ipsum. Quisque sollicitudin purus ac magna posuere, nec placerat ex posuere. Nulla massa arcu, vestibulum et congue quis, hendrerit sit amet turpis. Maecenas nisl libero, mollis non facilisis venenatis, tempor ac nibh. Donec in dolor velit. Nullam eu eros interdum, porta sem eu, interdum orci. Praesent id purus mattis, volutpat felis a, cursus magna. Fusce placerat tellus odio, et ornare magna convallis a. Maecenas est felis, sodales eu tellus nec, sagittis mattis sem. Sed id ipsum at orci lobortis blandit. Suspendisse sed purus dapibus, faucibus elit nec, consectetur felis. Cras ultrices id libero vitae luctus. Quisque sapien dolor, sodales vitae ultrices eu, feugiat molestie tortor. In imperdiet at metus eget facilisis.

Donec et maximus tellus, id congue enim. Phasellus porttitor condimentum egestas. Nulla vitae pharetra turpis. Cras eleifend risus at risus porttitor tincidunt. Duis diam ligula, aliquet ut posuere quis, iaculis eu massa. Curabitur varius a sem eget faucibus. Nullam non ante luctus, porta lorem ultricies, fringilla urna.

Sed at est ultricies, vulputate dolor in, vestibulum velit. Nullam efficitur felis vel justo commodo, a luctus ante mattis. Suspendisse elit est, commodo non tempus id, faucibus et neque. Sed vel scelerisque elit. Morbi consequat sed libero sit amet elementum. Nulla pretium ligula sit amet sapien fringilla rutrum. Aliquam eu convallis sem. Vestibulum non orci eget magna finibus ornare eget et mauris. Fusce pharetra id eros a imperdiet. Donec interdum sem vitae lacinia interdum. Duis porttitor nibh placerat bibendum condimentum. Suspendisse mauris magna, tempor in imperdiet in, lacinia et eros.

Donec magna neque, vulputate eleifend odio vel, posuere fermentum augue. Aenean nec mi semper, mollis arcu nec, bibendum tellus. Pellentesque porttitor eget leo at vehicula. Nulla iaculis id neque eu dapibus. Sed lacinia tortor vitae tortor varius feugiat. Morbi cursus rhoncus scelerisque. Integer volutpat, lectus non volutpat dignissim, massa justo volutpat odio, eget malesuada orci tortor ac enim. Nullam sed ex nec nisi cursus commodo. Proin mattis consequat vulputate. Sed pellentesque metus dolor, ac lobortis magna tempus et. Morbi eu tellus ut nisi consectetur rutrum nec eget velit. Donec est diam, gravida sit amet odio id, maximus aliquam justo. Integer mauris tortor, tristique non tortor egestas, scelerisque viverra sapien. Ut id augue dui. Duis varius ex non ullamcorper lobortis. 
 
              </Row>
            </Col>
            <Col className={s.stickyBoxContainer} xs={12} md={2}>
              <Row className={s.stickyBoxHeader}>
              { profileInfo.listing.instantBookable &&  <ImageFlashOn color='#ffb300' />}${ profileInfo.listing.pricePerNight } per night
              </Row>
              <Row className={s.stickyBoxContent}>
                StickyBox Content
              </Row>
            </Col>
          </Row>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(s)(Profile);
