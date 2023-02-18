import React from 'react';
import {saveAs} from 'file-saver';

import {ButtonBig} from '@/ui/ButtonBig';
import {ButtonUpload} from '@/ui/ButtonUpload';
import {useFocusedParentId, useStructureActions, useStructure, useNodeData} from '@/features/structure';
import {useDeleteStructureModal} from '@/components/ModalManager';
import readFile from '@/utils/readFile';
import createBlobFromString from '@/utils/createBlobFromString';
import {useInfoToast} from '@/components/InfoToast';

import classes from './FloatingActions.module.css';

const FloatingActions = () => {
  const parentId = useFocusedParentId();

  const {focusNode, replaceStructure} = useStructureActions();
  const {title} = useNodeData(parentId);

  const {focusInitialNode} = useStructureActions();
  const showToast = useInfoToast();

  const handleFocusInitialNode = () => {
    focusInitialNode();
    showToast({text: 'Initial node was focused'});
  };

  const handleFocusParent = () => {
    focusNode(parentId);
    showToast({text: `Node "${title || parentId}" was focused`});
  };

  const handleFileUpload = async ([file]) => {
    const structure = await readFile(file);
    structure && replaceStructure(structure);
    showToast({text: 'Structure was replaced'});
  };

  const structure = useStructure();

  const handleSave = () => {
    const state = JSON.stringify(structure, null, 2);
    saveAs(createBlobFromString(state), 'structure.json');
  };

  const handleDelete = useDeleteStructureModal();

  return (
    <div className={classes.floatingActions}>
      <ButtonBig onClick={handleFocusParent} title="Focus parent" className={classes.button} icon="rewind" />
      <ButtonBig
        onClick={handleFocusInitialNode}
        title="Focus initial node"
        className={classes.button}
        icon="full_rewind"
      />
      <div className={classes.divider} />
      <ButtonUpload
        className={classes.button}
        title="Upload structure json file"
        onUpload={handleFileUpload}
      />
      <ButtonBig
        onClick={handleSave}
        title="Save structure json file"
        type="confirm"
        className={classes.button}
        icon="download"
      />
      <ButtonBig
        onClick={handleDelete}
        title="Delete structure tree"
        type="danger"
        className={classes.button}
        icon="delete_forever"
      />
    </div>
  );
};

export default FloatingActions;
