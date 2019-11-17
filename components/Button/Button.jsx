import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import './Button.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string,
    href: PropTypes.string,
  }),
};

const defaultProps = {
  data: {
    type: 'green',
    href: '/',
  },
};

function Button(props) {
  const { data, children } = props;
  const { type, href } = data;

  return (
    <Link
      href={href}
    >
      <a
        className={`Button ${type}`}
      >
        {children}
      </a>
    </Link>

  );
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button;
