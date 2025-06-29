import { useState } from 'react';
import { Button } from '../../components/Button';
import { NavigationTitle } from '../../components/NavigationTitle';
import { WordCard } from '../../components/WordCard';
import { Checkbox } from '../../components/Checkbox';
import { AddMultiWordsBS } from './AddMultiWordsBS';
import { useAddMulti } from './useAddMulti';

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
    <div className="h-screen w-screen space-y-4">
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
      <AddMultiWordsBS
        isOpen={addMultiWords.isOpen}
        handleClose={addMultiWords.handleClose}
        word={addMultiWords.word}
        description={addMultiWords.description}
        setWord={addMultiWords.setWord}
        setDescription={addMultiWords.setDescription}
        handleSave={addMultiWords.handleSave}
        handleAddMore={addMultiWords.handleAddMore}
      />
    </div>
  );
};

export { WordsPage };
