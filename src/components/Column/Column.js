import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Button} from 'react-materialize';
import useActions from 'src/features/structure/actionCreators';
import Node from 'src/components/Node/Node';
import classes from './Column.module.css';

const Column = ({id}) => {
  const columnData = useSelector(state => state.structure.nodes[id]);
  const {addNode} = useActions();
  const handleClick = () => {
    addNode(id);
  };
  return (
    <div className={classes.column}>
      <header>{columnData.title}</header>
      <Node />
      <Node />
      <Node />
      <Node />
      <Node />
      <div className={classes.add}>
        <Button onClick={handleClick}>Add node</Button>
      </div>
    </div>
  );
};

Column.propTypes = {
  id: PropTypes.string,
};

Column.defaultProps = {
  id: 'initial',
};

export default Column;
