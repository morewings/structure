/*eslint-disable*/
import React from 'react';
import {Collection, Icon, CollectionItem} from 'react-materialize';
import Node from 'src/components/Node/Node';
import classes from './Column.module.css';

const Column = () => {
  return (
    <div className={classes.column}>
      <header>
        Name
      </header>
      <Node />
      <Node />
      <Node />
      <Node />
      <Node />
      {/*<Collection>*/}
      {/*  <header>Name</header>*/}
      {/*  <CollectionItem className="avatar">*/}
      {/*    <img*/}
      {/*      alt=""*/}
      {/*      className="circle"*/}
      {/*      src="https://materializecss.com/images/yuna.jpg"*/}
      {/*    />*/}
      {/*    <span className="title">*/}
      {/*    Title*/}
      {/*  </span>*/}
      {/*    <p>*/}
      {/*      First Line*/}
      {/*      <br />*/}
      {/*      Second Line*/}
      {/*    </p>*/}
      {/*    <a*/}
      {/*      className="secondary-content"*/}
      {/*      href="javascript:void(0)"*/}
      {/*    >*/}
      {/*      <Icon>*/}
      {/*        grade*/}
      {/*      </Icon>*/}
      {/*    </a>*/}
      {/*  </CollectionItem>*/}
      {/*  <CollectionItem className="avatar">*/}
      {/*    <img*/}
      {/*      alt=""*/}
      {/*      className="circle"*/}
      {/*      src="https://materializecss.com/images/yuna.jpg"*/}
      {/*    />*/}
      {/*    <span className="title">*/}
      {/*    Title*/}
      {/*  </span>*/}
      {/*    <p>*/}
      {/*      First Line*/}
      {/*      <br />*/}
      {/*      Second Line*/}
      {/*    </p>*/}
      {/*    <a*/}
      {/*      className="secondary-content"*/}
      {/*      href="javascript:void(0)"*/}
      {/*    >*/}
      {/*      <Icon>*/}
      {/*        grade*/}
      {/*      </Icon>*/}
      {/*    </a>*/}
      {/*  </CollectionItem>*/}
      {/*</Collection>*/}
    </div>
  )
};

export default Column;