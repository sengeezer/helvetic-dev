import bio from '../content/bio';

const About = () => (
  <div className="about">
    <h2>{bio.title}</h2>
    <ul>
      <li>
        <strong>Citizenship:</strong> {bio.nationality}
      </li>
      <li>
        <strong>Extracurricular interests:</strong>
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
