import React from 'react';

const endYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <p>
      &copy; 2019 - {endYear} F.M. Albertin |&nbsp;
      Made with&nbsp;
      <a href="https://reactjs.org">React</a>
      . Colors by&nbsp;
      <a href="http://www.colourlovers.com/palette/1593104/A_Busy_Town">California</a>
      .
    </p>
  </footer>
);

export default Footer;
