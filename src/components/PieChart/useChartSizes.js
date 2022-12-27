import {useVariable, useTheme} from 'css-vars-hook';

export const useChartSizes = (completion, fullColor) => {
  console.log('fullColor', fullColor);
  const emptySize = 100 - completion;
  const isOver50 = size => (size > 0 ? 1 : 0);
  const {setRef: setChartSegmentRef} = useTheme({
    offset: 0,
    value: completion,
    bg: fullColor,
    over50: isOver50(completion),
  });
  const {setRef: setEmptySegmentRef} = useTheme({
    offset: completion,
    value: emptySize,
    bg: 'var(--secondaryColor)',
    over50: isOver50(emptySize),
  });
  return {setChartSegmentRef, setEmptySegmentRef};
};
