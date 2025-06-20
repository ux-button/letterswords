import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { WordsGroupCard } from '../../components/WordsGroupCard';
import { groupSort } from './groupSort';
import { AddGroupBottomSheet } from './AddGroupBottomSheet';
import { useAddGroup } from './useAddGroup';

const GroupPage = () => {
  const [groups, setGroups] = useState([
    { type: 'default', title: 'Travel', quantity: '13', learningCurve: '2' },
    { type: 'struggle', title: 'Office life', quantity: '6', learningCurve: '3' },
    { type: 'default', title: 'People feelings', quantity: '21', learningCurve: '8' },
    { type: 'riseExtreme', title: 'Mastering of presentation', quantity: '2', learningCurve: '1' },
    { type: 'default', title: 'Holidays', quantity: '17', learningCurve: '0' },
    { type: 'inbox', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'default', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'riseLow', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'default', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'repeat', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'riseHigh', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'default', title: 'Cafe', quantity: '11', learningCurve: '10' },
    { type: 'recommended', title: 'Cafe', quantity: '11', learningCurve: '10' },
  ]);

  // Add group controller
  const addGroup = useAddGroup();

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
          <Button type="tertary" size="small" icon="plus" handleClick={addGroup.handleOpen}>
            Add group
          </Button>
          <Button type="ghost" size="small">
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
        <AddGroupBottomSheet
          isOpen={addGroup.isOpen}
          handleClose={addGroup.handleClose}
          groupName={addGroup.name}
          setGroupName={addGroup.setName}
          handleAddGroup={addGroup.handleAddGroup}
        />
      </div>
    </div>
  );
};

export { GroupPage };
