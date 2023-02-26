import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import config from '@/config';
import {useChildrenIdList, useNodeData} from '@/features/structure';
import {useCreateNodeModal} from '@/components/Modals/CreateNodeModal';
import {Accordion} from '@/components/Accordion';
import Node from '@/components/Node/Node';
import {Icon} from '@/ui/Icon';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';

import classes from './Column.module.css';

const Column = ({nodeId, role}) => {
  const nodes = useChildrenIdList(nodeId);
  const addNode = useCreateNodeModal();
  const {title} = useNodeData(nodeId);
  const handleAdd = () => {
    addNode(nodeId);
  };
  return (
    <Fragment>
      <div className={classes.column}>
        <header className={classes.header}>
          <Icon className={classes.icon} name={role} />
          <div title={title} className={classes.text}>
            {title || nodeId}
          </div>
        </header>
        <Accordion className={classes.nodes} id={nodeId}>
          {nodes.map(id => (
            <Node id={id} key={id} />
          ))}
        </Accordion>
        <FooterSeparator
          /* TODO: enable in dev mode */
          /* leftButton={
            role === 'siblings' ? (
              <Button
                text="Focus active"
                icon="focus"
                onClick={() => {
                  console.log('trying to focus');
                }}
              />
            ) : undefined
          } */
          rightButton={<Button text="Add node" icon="add-node" onClick={handleAdd} />}
        />
      </div>
    </Fragment>
  );
};

Column.propTypes = {
  nodeId: PropTypes.string,
  role: PropTypes.string.isRequired,
};

Column.defaultProps = {
  nodeId: config.initialNode,
};

export default Column;
