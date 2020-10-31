import React from 'react';
import useBoardContent from 'src/features/structure/useBoardContent';
import {Row, Col} from 'src/ui/Grid';
import Column from 'src/components/Column';

const Board = () => {
  const {childrenId, siblingsId, parentId} = useBoardContent();
  return (
    <div>
      <Row>
        <Col width={4}>
          {siblingsId !== parentId && (
            <Column role="parent" nodeId={parentId} />
          )}
        </Col>

        <Col width={4}>
          <Column role="siblings" nodeId={siblingsId} />
        </Col>

        <Col width={4}>
          {childrenId !== siblingsId && (
            <Column role="children" nodeId={childrenId} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Board;
