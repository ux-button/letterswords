import { useState } from 'react';

const useAddWord = () => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
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
    setWord,
    translation,
    setTranslation,
    isOpen,
    handleOpen,
    handleClose,
    handleAddWord,
  };
};

export { useAddWord };
