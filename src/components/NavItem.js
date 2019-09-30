import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ link = '#', name = 'Link' }) => (
  <li><a href={link}>{name}</a></li>
);

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
