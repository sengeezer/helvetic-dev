import React from 'react';

import contact from '../content/contact';

const Contact = () => (
  <div className="contact">
    <h2>{contact.title}</h2>
    <ul>
      <li className="linkedIn">
        <a href={contact.platforms.linkedin}>LinkedIn</a>
      </li>
      <li className="twitter">
        <a href={contact.platforms.twitter}>Twitter</a>
      </li>
      <li className="facebook">
        <a href={contact.platforms.facebook}>Facebook</a>
      </li>
      <li className="github">
        <a href={contact.platforms.github}>Github</a>
      </li>
      <li className="blog">
        <a href={contact.platforms.blog}>Blog</a>
      </li>
    </ul>
  </div>
);

export default Contact;
