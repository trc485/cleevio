import PropTypes from 'prop-types';

export const countryPropType = PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
});
