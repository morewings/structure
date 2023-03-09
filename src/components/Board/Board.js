import React, {useEffect, useState} from 'react';

import useBoardContent from '@/features/structure/useBoardContent';
import {useSaveState, useHydrateState} from '@/features/localStorage';
import {useInfoToast} from '@/components/Toasts/InfoToast';
import {Row, Col} from '@/ui/Grid';
import Column from '@/components/Column';

export const Board = () => {
  useSaveState();
  const {hydrateState} = useHydrateState();
  const [hasLocalState, setHasLocalState] = useState();
  const showToast = useInfoToast();
  useEffect(() => {
    const hasLocalState = hydrateState();
    setHasLocalState(hasLocalState);
  }, [hydrateState]);
  useEffect(() => {
    hasLocalState && showToast({text: 'Loaded data from local storage'});
  }, [hasLocalState, showToast]);
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
