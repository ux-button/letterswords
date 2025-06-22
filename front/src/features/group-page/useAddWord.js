import { useState } from 'react';

const useAddWord = () => {
  const [word, setWord] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddWord = () => {
    console.log('Word added');
  };

  return {
    word,
    description,
    setWord,
    setDescription,
    isOpen,
    handleOpen,
    handleClose,
    handleAddWord,
  };
};

export { useAddWord };
