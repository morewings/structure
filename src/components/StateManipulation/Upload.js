import React, {useRef, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import readFile from 'src/utils/readFile';
import {useActions} from 'src/features/structure';
import classes from './UploadButton.module.css';

export const Upload = () => {
  const inputRef = useRef();
  const {replaceStructure} = useActions();
  const handleFileUpload = async ([file]) => {
    const structure = await readFile(file);
    structure && replaceStructure(structure);
  };
  useEffect(() => {
    const {current} = inputRef;
    const onChange = e => {
      handleFileUpload(e.target.files);
    };
    current.addEventListener('change', onChange, false);
    return () => {
      current.removeEventListener('change', onChange, false);
    };
  });
  return (
    <div className={classes.wrapper}>
      <Button size="lg">
        <input ref={inputRef} className={classes.input} type="file" />
        <div>Upload</div>
      </Button>
    </div>
  );
};
