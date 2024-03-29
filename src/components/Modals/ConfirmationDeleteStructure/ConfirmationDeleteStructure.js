import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@/ui/Icon';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';
import {useStructureActions} from '@/features/structure';
import {useAccordionActions} from '@/features/accordion';
import {useInfoToast} from '@/components/Toasts/InfoToast';

import classes from './ConfirmationDeleteStructure.module.css';

const ConfirmationDeleteStructure = ({onCloseModal}) => {
  const {resetStructure} = useStructureActions();
  const {resetAccordion} = useAccordionActions();
  const showToast = useInfoToast();
  const handleDelete = () => {
    resetStructure();
    resetAccordion();
    onCloseModal();
    showToast({text: 'Structure was deleted.'});
  };
  return (
    <div className={classes.confirmation}>
      <main className={classes.main}>
        <div className={classes.left}>
          <Icon name="help" className={classes.icon} />
        </div>
        <div className={classes.right}>
          Do you want to reset the structure data? You will not be able to undo this operation.
        </div>
      </main>
      <FooterSeparator
        leftButton={
          <Button className={classes.button} type="danger" icon="cancel" text="No" onClick={onCloseModal} />
        }
        rightButton={
          <Button
            className={classes.button}
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

ConfirmationDeleteStructure.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmationDeleteStructure;
