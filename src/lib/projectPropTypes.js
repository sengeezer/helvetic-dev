import PropTypes from 'prop-types';

const projectShape = {
  description: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const projectPropType = PropTypes.shape(projectShape);
export const projectsPropType = PropTypes.arrayOf(projectPropType).isRequired;
