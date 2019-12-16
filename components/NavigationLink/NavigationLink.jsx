import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

function NavigationLink({ children, href, as }) {
  const { push, pathname } = useRouter();
  const isSelected = pathname === href ? 'selected' : '';

  const handleClick = (e) => {
    e.preventDefault();
    if (as) return push(href, as);
    push(href);
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`NavigationLink ${isSelected}`}
    >
      {children}
    </a>
  );
}


NavigationLink.propTypes = propTypes;

export default NavigationLink;
