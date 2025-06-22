import { useState } from 'react';

const useAddGroup = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddGroup = () => {
    console.log('Button clicked');
  };

  return { name, setName, isOpen, handleOpen, handleClose, handleAddGroup };
};

export { useAddGroup };
