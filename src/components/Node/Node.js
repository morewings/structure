import React from 'react';
import PropTypes from 'prop-types';
import {CollapsibleItem, Button} from 'react-materialize';
import useActions from 'src/features/structure/actionCreators';
import classes from './Node.module.css';

const Node = ({id, title, done, childNodes}) => {
  const {addNode, focusNode} = useActions();
  const handleClick = () => {
    addNode(id);
  };
  const handleSelect = () => {
    focusNode(id);
  };
  return (
    <CollapsibleItem
      className={classes.node}
      expanded={false}
      header={
        <label htmlFor={id}>
          <input id={id} type="checkbox" checked={done} />
          <span
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}>
            {title || id}
          </span>
        </label>
      }
      node="div">
      <Button onClick={handleClick}>Add child</Button>
      <Button onClick={handleSelect}>Show children</Button>
    </CollapsibleItem>
  );
};

Node.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  done: PropTypes.bool.isRequired,
  childNodes: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.array,
  ]).isRequired,
};

Node.defaultProps = {
  title: '',
};

export default Node;
