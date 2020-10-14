import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/ui/Button';
import classes from 'src/components/Node/NodeFooter/NodeFooter.module.css';

const NodeFooter = ({handleModalShow, handleSelect}) => (
  <footer className={classes.footer}>
    <div className={classes.edit}>
      <Button icon="edit" text="Edit node" onClick={handleModalShow} />
    </div>
    <div className={classes.showChildren}>
      <Button
        icon="parent_children"
        text="Show children"
        onClick={handleSelect}
      />
    </div>
  </footer>
);

NodeFooter.propTypes = {
  handleModalShow: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default NodeFooter;
