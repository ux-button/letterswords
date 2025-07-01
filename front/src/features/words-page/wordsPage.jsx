import { useState } from 'react';
import { Button } from '../../components/Button';
import { NavigationTitle } from '../../components/NavigationTitle';
import { WordCard } from '../../components/WordCard';
import { Checkbox } from '../../components/Checkbox';
import { useAddMulti } from './useAddMulti';

import { Modal } from '../../components/Modal';
import { BottomSheet } from '../../components/BottomSheet';
import { Input } from '../../components/Input';

const WordsPage = () => {
  const allWords = [
    { id: '001', type: 'default', word: 'Car', description: 'Машина' },
    { id: '002', type: 'riseLow', word: 'Road', description: 'Дорога' },
    { id: '003', type: 'riseHigh', word: 'Road', description: 'Дорога' },
    { id: '004', type: 'riseExtreme', word: 'Road', description: 'Дорога' },
    { id: '005', type: 'repeat', word: 'Road', description: 'Дорога' },
    { id: '006', type: 'struggle', word: 'Road', description: 'Дорога' },
    { id: '007', type: 'default', word: 'Car', description: 'Машина' },
    { id: '008', type: 'default', word: 'Car', description: 'Машина' },
    { id: '009', type: 'default', word: 'Car', description: 'Машина' },
    { id: '010', type: 'default', word: 'Car', description: 'Машина' },
    { id: '011', type: 'default', word: 'Car', description: 'Машина' },
  ];

  const [isSelected, setIsSelected] = useState(false);
  const [checkMap, setCheckMap] = useState({});

  // Add word bottomsheet controller
  const addMultiWords = useAddMulti();

  const hanleShowSelect = () => {
    // Show checkboxes panel
    setIsSelected(!isSelected);

    // Set all checkboxes to false
    setCheckMap({});
  };

  // !value always convert value to boolean type
  const handleCheck = (id) => {
    return setCheckMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-mono-8 h-screen w-screen space-y-4 overflow-y-auto">
      <section className="bg-mono-8 sticky top-0">
        <NavigationTitle
          title="Travel"
          subtitle={`${allWords.length} words`}
          prefixIcon="arrowLeft"
        />
      </section>
      <section className="flex justify-between px-4">
        <div className="flex gap-2">
          <Button type="tertary" size="main" icon="plus" handleClick={addMultiWords.handleOpen}>
            Add word
          </Button>
          <Button type="ghost" size="main" icon="rise">
            Rise group
          </Button>
        </div>
        <Button type="ghost" size="main" handleClick={hanleShowSelect}>
          Select
        </Button>
      </section>
      <section className="space-y-1 px-2">
        {allWords.map((word) => {
          return (
            <div key={word.id} className="flex items-center">
              {isSelected && (
                <div className="px-4">
                  <Checkbox
                    isChecked={!!checkMap[word.id]}
                    setIsChecked={() => handleCheck(word.id)}
                  />
                </div>
              )}

              <div className="w-screen">
                <WordCard
                  type={word.type}
                  isIcons={isSelected}
                  word={word.word}
                  description={word.description}
                />
              </div>
            </div>
          );
        })}
      </section>
      <section className="bg-mono-8 fixed bottom-0 w-full p-4">
        <Button type="primary" size="large" icon="oval">
          Learn words
        </Button>
      </section>
      {addMultiWords.isOpen ? (
        <BottomSheet
          header={
            <NavigationTitle
              title="Add new word"
              suffixIcon="cross"
              handleSuffix={addMultiWords.handleClose}
            />
          }
          content={
            <div className="space-y-4">
              <div className="space-y-1">
                <Input
                  text={addMultiWords.word}
                  setText={addMultiWords.setWord}
                  type="onLight"
                  label="Word"
                  placeholder="Type word"
                />
                <Input
                  text={addMultiWords.description}
                  setText={addMultiWords.setDescription}
                  type="onLight"
                  label="Translation"
                  placeholder="Type translation"
                />
              </div>
              <div className="flex space-x-4">
                <Button
                  type="ghost"
                  size="large"
                  handleClick={addMultiWords.handleSave}
                  width="full"
                >
                  Save
                </Button>
                <Button
                  type="primary"
                  size="large"
                  icon="plus"
                  handleClick={addMultiWords.handleAddMore}
                  width="full"
                >
                  One more
                </Button>
              </div>
            </div>
          }
        />
      ) : null}
      <Modal
        header={<NavigationTitle title="Some word" suffixIcon="cross" />}
        content={
          <div className="space-y-2">
            <Button type="tertary" size="large">
              Rise word
            </Button>
            <Button type="tertary" size="large">
              Edit word
            </Button>
            <Button type="tertary" size="large" icon="folder">
              Move to folder
            </Button>
            <Button type="attention" size="large" icon="trash">
              Delete word
            </Button>
          </div>
        }
        footer={
          <Button type="ghost" size="large">
            Cancel
          </Button>
        }
      />
    </div>
  );
};

// TO DO: Add controller function
// TO DO: Add actions handler for each icon in word component

export { WordsPage };
