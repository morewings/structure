import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ButtonBig} from 'src/ui/ButtonBig';
import classes from './ButtonUpload.module.css';

export const ButtonUpload = ({onUpload, title, className}) => {
  const inputRef = useRef();

  useEffect(() => {
    const {current} = inputRef;
    const onChange = e => {
      onUpload(e.target.files);
    };
    current.addEventListener('change', onChange, false);
    return () => {
      current.removeEventListener('change', onChange, false);
    };
  });

  /** Click is handled natively */
  const onClick = () => {};

  return (
    <div
      className={classNames({
        [classes.wrapper]: true,
        [className]: !!className,
      })}>
      <ButtonBig type="confirm" title={title} onClick={onClick} icon="upload">
        <input
          multiple={false}
          accept=".json"
          ref={inputRef}
          className={classes.input}
          type="file"
        />
      </ButtonBig>
    </div>
  );
};

ButtonUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ButtonUpload.defaultProps = {
  className: '',
};
