import React from 'react';
import PropTypes from 'prop-types';
import {useAccordion} from './useAccordion';

export const Accordion = ({children, className, id}) => {
  const {activeNode, toggleNode, deleteAccordion} = useAccordion(id);
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      toggleNode,
      activeNode,
      deleteAccordion,
    })
  );

  return <div className={className}>{childrenWithProps}</div>;
};

Accordion.defaultProps = {
  className: '',
};

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};
