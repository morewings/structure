import React, {useEffect} from 'react';

import useBoardContent from '@/features/structure/useBoardContent';
import {useLocalStorage} from '@/features/localStorage';
import {Row, Col} from '@/ui/Grid';
import Column from '@/components/Column';

export const Board = () => {
  // const hydrateState = useLocalStorage();
  // useEffect(() => {
  //   hydrateState();
  // }, [hydrateState]);
  const {childrenId, siblingsId, parentId} = useBoardContent();
  return (
    <div>
      <Row>
        <Col width={4}>{siblingsId !== parentId && <Column role="parent" nodeId={parentId} />}</Col>

        <Col width={4}>
          <Column role="siblings" nodeId={siblingsId} />
        </Col>

        <Col width={4}>{childrenId !== siblingsId && <Column role="children" nodeId={childrenId} />}</Col>
      </Row>
    </div>
  );
};
