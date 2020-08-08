import React from 'react';
import useBoardContent from 'src/features/structure/useBoardContent';
import {Row, Col} from 'react-bootstrap';
import Column from '../Column/Column';

const Board = () => {
  const {childrenId, siblingsId, parentId} = useBoardContent();
  return (
    <div>
      <Row>
        {siblingsId !== parentId && (
          <Col sm={4}>
            <Column role="parent" nodeId={parentId} />
          </Col>
        )}

        <Col sm={4}>
          <Column role="siblings" nodeId={siblingsId} />
        </Col>
        {childrenId !== siblingsId && (
          <Col sm={4}>
            <Column role="children" nodeId={childrenId} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Board;
