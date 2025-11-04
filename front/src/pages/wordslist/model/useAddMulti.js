import { useState } from 'react';

const useAddMulti = () => {
  const [word, setWord] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setWord('');
    setDescription('');
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddMore = () => {
    console.log('Add more');
  };

  const handleSave = () => {
    console.log('Saved');
  };

  return {
    isOpen,
    word,
    description,
    setWord,
    setDescription,
    handleAddMore,
    handleSave,
    handleOpen,
    handleClose,
  };
};

export { useAddMulti };
