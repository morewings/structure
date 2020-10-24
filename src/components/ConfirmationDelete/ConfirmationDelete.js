import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'src/ui/Icon';
import {Button} from 'src/ui/Button';
import {FooterSeparator} from 'src/ui/FooterSeparator';
import {useStructureActions} from 'src/features/structure';
import {useAccordionActions} from 'src/features/accordion';
import classes from './ConfirmationDelete.module.css';

const ConfirmationDelete = ({id, onCloseModal}) => {
  const {deleteNode} = useStructureActions();
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
        <div className={classes.right}>
          Do you want to delete node and its children? You will not be able to
          undo this operation.
        </div>
      </main>
      <FooterSeparator
        leftButton={
          <Button
            type="danger"
            icon="cancel"
            text="No"
            onClick={onCloseModal}
          />
        }
        rightButton={
          <Button
            type="confirm"
            icon="confirm"
            text="Yes"
            onClick={handleDelete}
          />
        }
      />
    </div>
  );
};

ConfirmationDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmationDelete;
