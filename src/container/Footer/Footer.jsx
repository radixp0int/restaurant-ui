import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>24640 Southpoint Dr #115, Chantilly, VA 20152</p>
        <p className='p__opensans'>+1 703 828-2300</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer logo' />
        <p className='p__opensans'>"The best Peruvian Chicken is here"</p>
        <img
          src={images.spoon}
          alt='spoon'
          className='spoon__img'
          style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Hours</h1>
        <p className='p__opensans'>Monday - Friday: 10:00AM - 10:00PM</p>
        <p className='p__opensans'>Saturday - Sunday: 11:00AM - 8:00PM</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
