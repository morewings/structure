/*eslint-disable*/
import React, {Fragment} from 'react';
import {Footer} from 'react-materialize';

const FooterWrapper = () => {
  return (
    <Fragment>
      <Footer
        copyrights="&copy; 2020 Dima Vyshniakov"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        }>
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </Footer>
    </Fragment>
  );
};

export default FooterWrapper;
