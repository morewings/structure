export const useNodeColorNames = () => ['red', 'orange', 'green', 'turquoise', 'blue', 'violet', 'gray'];

export const useNodeColorValues = color => {
  const [red, orange, green, turquoise, blue, violet, gray] = useNodeColorNames();
  return {
    [red]: '#FF0000',
    [orange]: '#FFA500',
    [green]: '#00FF00',
    [turquoise]: '#42AAFF',
    [blue]: '#0000FF',
    [violet]: '#8B00FF',
    [gray]: 'rgba(66, 66, 66, .66)',
  }[color];
};
