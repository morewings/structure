import React from 'react';
import {Row, Col} from 'src/ui/Grid';
import {Typography} from 'src/ui/Typography';
import classes from './Help.module.css';

const Help = () => (
  <Row>
    <Col offset={1} width={10}>
      <div className={classes.help}>
        <Typography>
          <h1>Structure help</h1>
          <h2>Definition</h2>
          <p>
            <strong>Structure</strong> is a tool to view and edit tree-like data
            in your browser. Data is represented as a collection of Nodes. Each
            Node can contain other Nodes as a children.
          </p>
          <p>
            Node is a data object, which contains: Id - unique id of the Node;
            Title - user-defined title of the Node; Color - one of colors
            enumerable; Description - short text, describing the Node
          </p>
          <h2>Board</h2>
        </Typography>
      </div>
    </Col>
  </Row>
);

export default Help;
