/*eslint-disable*/
import React from 'react';
import classNames from "classnames";

export const Container = ({children, className}) => (
  <div style={{maxWidth: '960px'}} className={classNames({
    container: true,
    [className]: !!className
  })}>{children}</div>
);
