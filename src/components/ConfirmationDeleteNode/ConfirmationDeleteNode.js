import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from '@/ui/Icon';
import {Button} from '@/ui/Button';
import {FooterSeparator} from '@/ui/FooterSeparator';
import {useFocusedParentId, useNodeData, useStructureActions} from '@/features/structure';
import {useAccordionActions} from '@/features/accordion';
import {useInfoToast} from '@/components/InfoToast';

import classes from './ConfirmationDeleteNode.module.css';

const ConfirmationDeleteNode = ({id, onCloseModal}) => {
  const {deleteNode} = useStructureActions();
  const {deleteAccordion} = useAccordionActions();
  const {title} = useNodeData(id);
  const parentId = useFocusedParentId();
  const {title: parentTitle} = useNodeData(parentId);
  const showToast = useInfoToast();
  const handleDelete = () => {
    deleteNode(id);
    deleteAccordion(id);
    onCloseModal();
    showToast({id, text: `Node ${title || id} was deleted`});
    showToast({id, text: `Node ${parentTitle || parentId} was focused`});
  };
  return (
    <div className={classes.confirmation}>
      <main className={classes.main}>
        <div className={classes.left}>
          <Icon name="help" className={classes.icon} />
        </div>
        <div className={classes.right}>
          Do you want to delete node and its children? You will not be able to undo this operation.
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

ConfirmationDeleteNode.propTypes = {
  id: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmationDeleteNode;
