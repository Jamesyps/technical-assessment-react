import PropTypes from 'prop-types';
import {createElement} from 'react';

const Container = ({children, as, className, ...props}) => createElement(as || 'div', {
  ...props,
  className: `container mx-auto px-6 ${className}`
}, children);

Container.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  className: PropTypes.string,
};

export default Container;
