import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/**
 * Utility component to prevent children from Gatsby server-side prerender.
 */
const ClientOnly = ({children, ...restProps}) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...restProps}>{children}</div>;
};

ClientOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientOnly;
