import {useCallback, useState} from 'react';

const useNodeFormLogic = ({onSubmit, initial = {}}) => {
  const [isDone, setDone] = useState(initial.isDone || false);
  const [title, setTitle] = useState(initial.title || '');
  const [description, setDescription] = useState(initial.description || '');
  const flushValues = () => {
    setDone(false);
    setTitle('');
    setDescription('');
  };
  const handleSubmit = useCallback(() => {
    onSubmit({
      description,
      title,
      isDone,
    });
    flushValues();
  }, [description, isDone, onSubmit, title]);
  return {
    isDone,
    setDone,
    title,
    setTitle,
    description,
    setDescription,
    handleSubmit,
  };
};

export default useNodeFormLogic;