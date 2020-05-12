import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import classes from './UploadButton.module.css';

const UploadButton = ({buttonText, ...restProps}) => (
  <div className={classes.wrapper}>
    <Button {...restProps}>
      <input className={classes.input} type="file" />
      <div>{buttonText}</div>
    </Button>
  </div>
);

UploadButton.propTypes = {
  buttonText: PropTypes.string,
};

UploadButton.defaultProps = {
  buttonText: 'Upload',
};

export default UploadButton;
