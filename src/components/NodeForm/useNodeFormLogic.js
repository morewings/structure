import {useCallback, useState} from 'react';

const useNodeFormLogic = ({
  onSubmit,
  node = {isDone: false, title: '', description: ''},
}) => {
  const [isDone, setDone] = useState(node.isDone);
  const [title, setTitle] = useState(node.title);
  const [color, setColor] = useState(node.title);
  const [description, setDescription] = useState(node.description);
  const flushValues = () => {
    setDone(false);
    setTitle('');
    setDescription('');
    setColor('');
  };
  const handleSubmit = useCallback(() => {
    onSubmit({
      description,
      title,
      isDone,
      color,
    });
    flushValues();
  }, [color, description, isDone, onSubmit, title]);
  return {
    isDone,
    setDone,
    title,
    setTitle,
    description,
    setDescription,
    color,
    setColor,
    handleSubmit,
  };
};

export default useNodeFormLogic;
