import React from 'react';
import useBoardContent from 'src/features/structure/selectors';
import {Row, Col} from 'react-bootstrap';
import Column from '../Column/Column';

const Board = () => {
  const {childrenId, siblingsId, parentId} = useBoardContent();
  return (
    <div>
      <Row>
        <Col>{siblingsId !== parentId && <Column nodeId={parentId} />}</Col>
        <Col>{childrenId !== siblingsId && <Column nodeId={siblingsId} />}</Col>
        <Col>
          <Column nodeId={childrenId} />
        </Col>
      </Row>
    </div>
  );
};

export default Board;
