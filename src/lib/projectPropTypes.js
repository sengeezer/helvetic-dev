import PropTypes from 'prop-types';

const projectShape = {
  description: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string,
  primaryLanguage: PropTypes.string,
  repositoryUrl: PropTypes.string,
  slug: PropTypes.string.isRequired,
  stars: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export const projectPropType = PropTypes.shape(projectShape);
export const projectsPropType = PropTypes.arrayOf(projectPropType).isRequired;
