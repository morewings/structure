/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Accordion, Button} from 'react-bootstrap';
import useActions from 'src/features/structure/actionCreators';
import Node from 'src/components/Node/Node';
import classes from './Column.module.css';

const getChildren = (id, state) =>
  state.structure.nodes[id].children.map(
    childId => state.structure.nodes[childId]
  );

const Column = ({nodeId}) => {
  const columnData = useSelector(state => state.structure.nodes[nodeId]);
  const nodes = useSelector(state => getChildren(nodeId, state));
  const {addNode} = useActions();
  const handleClick = () => {
    addNode(nodeId);
  };
  return (
    <div className={classes.column}>
      <header>{columnData.title || columnData.id}</header>
      <Accordion>
        {nodes.map(({id, title, done, children}) => (
        <Node
          id={id}
          title={title}
          done={done}
          key={id}
          childNodes={children}
        />
      ))}
      </Accordion>
      <div className={classes.add}>
        <Button onClick={handleClick}>Add node</Button>
      </div>
    </div>
  );
};

Column.propTypes = {
  nodeId: PropTypes.string,
};

Column.defaultProps = {
  nodeId: 'node_initial',
};

export default Column;
