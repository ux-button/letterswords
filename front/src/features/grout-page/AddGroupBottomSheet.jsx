import { BottomSheet } from '../../components/BottomSheet';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const AddGroupBottomsheet = ({ isOpen, handleClose, groupName, setGroupName, handleAddGroup }) => {
  return (
    <BottomSheet isOpen={isOpen} title="Add group" suffixIcon="cross" handleSuffix={handleClose}>
      <div className="space-y-4">
        <Input
          text={groupName}
          setText={setGroupName}
          type="onLight"
          label="Group name"
          placeholder="Type name"
        />
        <Button type="primary" size="large" handleClick={handleAddGroup}>
          Add
        </Button>
      </div>
    </BottomSheet>
  );
};

export { AddGroupBottomsheet };
