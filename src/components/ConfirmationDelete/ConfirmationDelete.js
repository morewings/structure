import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'src/ui/Icon';
import {Button} from 'src/ui/Button';
import {useStructureActions} from 'src/features/structure';
import {useAccordionActions} from 'src/features/accordion';
import classes from './ConfirmationDelete.module.css';

const ConfirmationDelete = ({id, onCloseModal}) => {
  const {deleteNode} = useStructureActions(id);
  const {deleteAccordion} = useAccordionActions();
  const handleDelete = () => {
    deleteNode(id);
    deleteAccordion(id);
    onCloseModal();
  };
  return (
    <div className={classes.confirmation}>
      <main className={classes.main}>
        <div className={classes.left}>
          <Icon name="help" className={classes.icon} />
        </div>
        <div className={classes.text}>
          Do you want to delete local data? All progress will be lost.
        </div>
      </main>
      <footer className={classes.footer}>
        <div className={classes.edit}>
          <Button
            type="danger"
            icon="cancel"
            text="No"
            onClick={onCloseModal}
          />
        </div>
        <div className={classes.showChildren}>
          <Button
            type="confirm"
            icon="confirm"
            text="Yes"
            onClick={handleDelete}
          />
        </div>
      </footer>
    </div>
  );
};

ConfirmationDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmationDelete;
