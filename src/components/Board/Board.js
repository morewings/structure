import React, {useEffect} from 'react';

import useBoardContent from '@/features/structure/useBoardContent';
import {useSaveState, useHydrateState} from '@/features/localStorage';
import {useInfoToast} from '@/components/InfoToast';
import {Row, Col} from '@/ui/Grid';
import Column from '@/components/Column';

export const Board = () => {
  useSaveState();
  const {hydrateState} = useHydrateState();
  const showToast = useInfoToast();
  useEffect(() => {
    const hasLocalState = hydrateState();
    return () => {
      hasLocalState && showToast({text: 'Loaded data from local storage'});
    };
  }, [hydrateState, showToast]);
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
