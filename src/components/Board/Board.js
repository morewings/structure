import React from 'react';
import useBoardContent from 'src/features/structure/selectors';
import {Row, Col} from 'react-materialize';
import Column from '../Column/Column';

const Board = () => {
  const {childrenId, siblingsId, parentId} = useBoardContent();
  return (
    <div>
      <Row>
        <Col s={4}>
          {siblingsId !== parentId && <Column nodeId={parentId} />}
        </Col>
        <Col s={4}>
          {childrenId !== siblingsId && <Column nodeId={siblingsId} />}
        </Col>
        <Col s={4}>
          <Column nodeId={childrenId} />
        </Col>
      </Row>
    </div>
  );
};

export default Board;
