import React from 'react';

import bio from '../content/bio';

const About = () => (
  <div className="about">
    <h2>{bio.title}</h2>
    <ul>
      <li>
        Age:&nbsp;
        {bio.age}
      </li>
      <li>
        Place of birth:&nbsp;
        {bio.pob}
      </li>
      <li>
        Citizenship:&nbsp;
        {bio.nationality}
      </li>
      <li>
        Extracurricular interests:
        <ul>
          <li>{bio.interests[0]}</li>
          <li>{bio.interests[1]}</li>
          <li>{bio.interests[2]}</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default About;