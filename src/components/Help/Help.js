import React from 'react';

import {Row, Col} from '@/ui/Grid';
import {Typography} from '@/ui/Typography';
import {Icon} from '@/ui/Icon';
import {Image} from '@/components/Image';

import boardImage from './screenshots/board.png';
import addNodeButtonImage from './screenshots/addNodeButton.png';
import columnTitleImage from './screenshots/columnTitle.png';
import fabImage from './screenshots/fab.png';
import nodeImage from './screenshots/node.png';
import nodeFooterImage from './screenshots/nodeFooter.png';
import classes from './Help.module.css';

export const Help = () => (
  <Row>
    <Col offset={1} width={10}>
      <div className={classes.help}>
        <Typography>
          <h1 className={classes.header}>
            <Icon className={classes.iconHelp} name="help" />
            <span className={classes.headerText}>Structure help</span>
          </h1>
          <h2>Definition</h2>
          <p>
            <strong>Structure</strong> is a tool to view and edit tree-like data in your browser. Data is
            represented as a collection of Nodes. Each Node can contain other Nodes as a children.
          </p>
          <p>
            <strong>Node</strong> is a data object, which contains:
          </p>
          <dl>
            <dt>id</dt>
            <dd>unique id of the Node;</dd>
            <dt>title</dt>
            <dd>user-defined title of the Node;</dd>
            <dt>color</dt>
            <dd>one of the colors enumerable;</dd>
            <dt>description</dt>
            <dd>short text, describing the Node.</dd>
          </dl>
          <h2>Board</h2>
          <Image className={classes.illustrationBig} src={boardImage} title="Default board view" />
          <p>
            <strong>Board</strong> is the default view of the structure. Board consists of three{' '}
            <strong>Columns</strong>.
          </p>
          <Image src={columnTitleImage} title="Column title" />
          <p>
            Each column has an icon which indicates the <strong>role</strong> of the Node and the{' '}
            <strong>title</strong> of the parent Node it shows contents for.
          </p>
          <dl>
            <dt>
              <Icon name="parent" color="var(--accentColor)" />
            </dt>
            <dd>
              First column from the right contains the <strong>parent</strong> of the focused Node and
              parent&lsquo;s siblings.
            </dd>
            <dt>
              <Icon name="siblings" color="var(--accentColor)" />
            </dt>
            <dd>
              Second column contains focused Node and it&lsquo;s <strong>siblings</strong>.
            </dd>
            <dt>
              <Icon name="children" color="var(--accentColor)" />
            </dt>
            <dd>
              Third column contains focused Node&lsquo;s <strong>children</strong> nodes.
            </dd>
          </dl>
          <Image src={addNodeButtonImage} title="Add node button" />
          <p>
            To add new Node to the Column you have to click <strong>Add node</strong> button at the bottom.
          </p>
          <Image src={fabImage} title="Floating actions block" />
          <p>
            <strong>Floating actions</strong> at the left contains buttons to navigate your Structure and to
            manipulate it.
          </p>
          <dl>
            <dt>
              <Icon className={classes.iconBigger} name="rewind" color="var(--actionColor)" />
            </dt>
            <dd>Focus parent of active node</dd>
            <dt>
              <Icon className={classes.iconBigger} name="full_rewind" color="var(--actionColor)" />
            </dt>
            <dd>Focus root node</dd>
            <dt>
              <Icon className={classes.iconBigger} name="upload" color="var(--confirmColor)" />
            </dt>
            <dd>Upload structure data from json file</dd>
            <dt>
              <Icon className={classes.iconBigger} name="download" color="var(--confirmColor)" />
            </dt>
            <dd>Download structure data as json file</dd>
            <dt>
              <Icon className={classes.iconBigger} name="delete_forever" color="var(--dangerColor)" />
            </dt>
            <dd>Reset structure data to initial state</dd>
          </dl>
          <h2>Node</h2>
          <Image src={nodeImage} title="Node expanded" />
          <p>
            <strong>Node</strong> component shows specific node data from the Structure. You can tick checkbox{' '}
            <Icon name="checkbox-unchecked" /> <Icon name="checkbox-checked" />
            at the top, view stats about Node generation and total amount of ancestors (children + children of
            children etc).
          </p>
          <p>
            Delete button <Icon name="delete" color="var(--actionColor)" /> on the right side removes node and
            it&lsquo;s ancestors from the Structure
          </p>
          <Image src={nodeFooterImage} title="Node footer" />
          Node footer in the bottom has two buttons. <strong>Edit node</strong> opens editing modal,{' '}
          <strong>Show children</strong> sets the left column to show children of this node.
        </Typography>
      </div>
    </Col>
  </Row>
);
