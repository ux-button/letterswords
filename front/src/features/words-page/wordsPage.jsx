import { useState } from 'react';
import { Button } from '../../components/Button';
import { NavigationTitle } from '../../components/NavigationTitle';
import { WordCard } from '../../components/WordCard';
import { Checkbox } from '../../components/Checkbox';
import { useAddMulti } from './useAddMulti';

import { Modal } from '../../components/Modal';
import { BottomSheet } from '../../components/BottomSheet';
import { Input } from '../../components/Input';

import { WordsPageContainer } from './WordsPageContainer';
import { WordsGroupCard } from '../../components/WordsGroupCard';
import { BottomSheetFull } from '../../components/BottomSheetFull';

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

  const [groups] = useState([
    { type: 'default', title: 'Travel', quantity: '13', learningCurve: '2' },
    { type: 'struggle', title: 'Office life', quantity: '6', learningCurve: '3' },
    { type: 'default', title: 'People feelings', quantity: '21', learningCurve: '8' },
    { type: 'riseExtreme', title: 'Mastering of presentation', quantity: '2', learningCurve: '1' },
    { type: 'default', title: 'Holidays', quantity: '17', learningCurve: '0' },
    { type: 'inbox', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'default', title: 'Cafe', quantity: '11', learningCurve: '8' },
    { type: 'riseLow', title: 'Cafe', quantity: '11', learningCurve: '3' },
    { type: 'default', title: 'Cafe', quantity: '11', learningCurve: '5' },
    { type: 'repeat', title: 'Cafe', quantity: '11', learningCurve: '8' },
    { type: 'riseHigh', title: 'Cafe', quantity: '11', learningCurve: '1' },
    { type: 'default', title: 'Cafe', quantity: '11', learningCurve: '9' },
    { type: 'recommended', title: 'Cafe', quantity: '11', learningCurve: '4' },
  ]);

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [checkMap, setCheckMap] = useState({});

  // Folders bottom sheet controller
  const [isFoldersBottomSheetOpened, setIsFoldersBottomSheetOpened] = useState(true);
  const handleFoldersBottomSheetOpen = () => {
    setIsFoldersBottomSheetOpened(!isFoldersBottomSheetOpened);
  };
  const handleFoldersBottomSheetClose = () => {
    setIsFoldersBottomSheetOpened(!isFoldersBottomSheetOpened);
    setIsSelectOpened(!isSelectOpened);
  };

  // Add word bottomsheet controller
  const addMultiWords = useAddMulti();

  const handleOpenSelect = () => {
    // Show checkboxes panel
    setIsSelectOpened(!isSelectOpened);
    // Set all checkboxes to false
    setCheckMap({});
  };

  // !value always convert value to boolean type
  const handleCheck = (id) => {
    return setCheckMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const countSelected = () => {
    const counter = Object.keys(checkMap).filter((key) => checkMap[key] === true);
    return counter.length;
  };

  countSelected();

  return (
    <WordsPageContainer
      navigationBar={
        <section className="bg-mono-8">
          <NavigationTitle
            title="Travel"
            subtitle={`${allWords.length} words`}
            prefixIcon="arrowLeft"
          />
        </section>
      }
      actionBar={
        <>
          {!isSelectOpened ? (
            <section className="flex justify-between px-4">
              <div className="flex gap-2">
                <Button
                  type="tertary"
                  size="main"
                  icon="plus"
                  handleClick={addMultiWords.handleOpen}
                >
                  Add word
                </Button>
                <Button type="ghost" size="main" icon="rise">
                  Rise group
                </Button>
              </div>
              <Button type="ghost" size="main" handleClick={handleOpenSelect}>
                Select
              </Button>
            </section>
          ) : (
            <section className="flex items-center justify-between px-4">
              {!!countSelected() ? (
                <div className="text-large text-mono-84">{`${countSelected()} selected`}</div>
              ) : (
                <div className="text-large text-mono-25">No items selected</div>
              )}
              <Button type="ghost" size="main" handleClick={handleOpenSelect}>
                Cancel
              </Button>
            </section>
          )}
        </>
      }
      wordsList={
        <section className="space-y-1 px-2">
          {allWords.map((word) => {
            return (
              <div key={word.id} className="flex items-center">
                {isSelectOpened && (
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
                    isIcons={isSelectOpened}
                    word={word.word}
                    description={word.description}
                  />
                </div>
              </div>
            );
          })}
        </section>
      }
      bottomBar={
        <>
          {!isSelectOpened ? (
            <section className="bg-mono-8 fixed bottom-0 w-full p-4">
              <Button type="primary" size="large" icon="oval">
                Learn words
              </Button>
            </section>
          ) : (
            <section className="bg-mono-8 fixed bottom-0 flex w-full justify-between p-4">
              <Button
                type="tertary"
                size="main"
                icon="folder"
                handleClick={handleFoldersBottomSheetOpen}
              >
                Move to folder
              </Button>
              <Button type="attention" size="main" icon="trash">
                Delete
              </Button>
            </section>
          )}
        </>
      }
      modalGroup={
        <>
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
                </div>
              }
              footer={
                <div className="flex space-x-4 pt-4">
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
              }
            />
          ) : null}
          {/* Here modal on word two dots settings */}
          {false ? (
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
          ) : null}
          {/* Here modal on word two dots settings */}
          {!isFoldersBottomSheetOpened ? (
            <BottomSheetFull
              header={
                <NavigationTitle
                  title="Move to folder"
                  prefixIcon="arrowLeft"
                  suffixIcon="cross"
                  handlePrefix={handleFoldersBottomSheetOpen}
                  handleSuffix={handleFoldersBottomSheetClose}
                />
              }
              content={
                <div className="grid grid-cols-2">
                  {groups.map((group) => {
                    return (
                      <WordsGroupCard
                        type={group.type}
                        title={group.title}
                        quantity={group.quantity}
                        learningCurve={group.learningCurve}
                      />
                    );
                  })}
                </div>
              }
            />
          ) : null}
        </>
      }
    />
  );
};

// TO DO: Add controller function
// TO DO: Add actions handler for each icon in word component

export { WordsPage };
