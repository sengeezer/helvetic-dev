import React, { Component } from 'react';

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: props.link ? props.link : '#',
      name: props.name ? props.name : 'Link',
    };
  }

  render() {
    const { link, name } = this.state;

    return (
      <li><a href={link}>{name}</a></li>
    );
  }
}

export default NavItem;
