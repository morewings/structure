import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const UploadButton = ({buttonText, ...restProps}) => (
  <Button {...restProps}>
    <input type="file"/>
    <div>{buttonText}</div>
  </Button>
);

UploadButton.propTypes = {
  buttonText: PropTypes.string,
};

UploadButton.defaultProps = {
  buttonText: 'Upload',
};

export default UploadButton;
