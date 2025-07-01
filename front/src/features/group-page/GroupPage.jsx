import { useEffect, useState } from 'react';

// Components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { WordsGroupCard } from '../../components/WordsGroupCard';
import { BottomSheet } from '../../components/BottomSheet';
import { NavigationTitle } from '../../components/NavigationTitle';

// Controllers
import { groupSort } from './groupSort';

// Hooks
import { useAddGroup } from './useAddGroup';
import { useAddWord } from './useAddWord';

const GroupPage = () => {
  const [groups, setGroups] = useState([
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

  // Add group controller
  const addGroup = useAddGroup();

  // Add single word controller
  const addWord = useAddWord();

  useEffect(() => {
    // Sort groups controller
    const sortedGroups = groupSort(groups);
    setGroups(sortedGroups);
  }, []);

  return (
    <div className="bg-mono-8">
      <div className="min-h-screen space-y-4 pt-4">
        <section className="flex items-center justify-between px-4">
          <div className="text-screen">Welcome back</div>
          <div className="bg-mono-25 h-12 w-12 rounded-full"></div>
        </section>
        <section className="flex space-x-2 px-4">
          <Button type="tertary" size="main" icon="plus" handleClick={addGroup.handleOpen}>
            Add group
          </Button>
          <Button type="ghost" size="main" handleClick={addWord.handleOpen}>
            Add word
          </Button>
        </section>
        <section className="grid grid-cols-2 gap-0.5 px-2">
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
        </section>
        {addGroup.isOpen ? (
          <BottomSheet
            header={
              <NavigationTitle
                title="Add group"
                suffixIcon="cross"
                handleSuffix={addGroup.handleClose}
              />
            }
            content={
              <div className="space-y-4">
                <Input
                  text={addGroup.name}
                  setText={addGroup.setName}
                  type="onLight"
                  label="Group name"
                  placeholder="Type name"
                />
                <Button type="primary" size="large" handleClick={addGroup.handleAddGroup}>
                  Add
                </Button>
              </div>
            }
          />
        ) : null}
        {addWord.isOpen ? (
          <BottomSheet
            header={
              <NavigationTitle
                title="Add single word"
                suffixIcon="cross"
                handleSuffix={addWord.handleClose}
              />
            }
            content={
              <div className="space-y-4">
                <div className="space-y-1">
                  <Input
                    text={addWord.word}
                    setText={addWord.setWord}
                    type="onLight"
                    label="Word"
                    placeholder="Type word"
                  />
                  <Input
                    text={addWord.description}
                    setText={addWord.setDescription}
                    type="onLight"
                    label="Translation"
                    placeholder="Type translation"
                  />
                </div>
                <Button type="primary" size="large" handleClick={addWord.handleAddWord}>
                  Add
                </Button>
              </div>
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export { GroupPage };
