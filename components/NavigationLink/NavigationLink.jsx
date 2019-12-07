import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

function NavigationLink({ children, href }) {
  const router = useRouter();
  const isSelected = router.pathname === href ? 'selected' : '';

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
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
