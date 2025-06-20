import { BottomSheet } from '../../components/BottomSheet';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const AddGroupBottomSheet = ({ isOpen, handleClose, groupName, setGroupName, handleAddGroup }) => {
  return (
    <BottomSheet isOpen={isOpen} title="Add group" suffixIcon="cross" handleSuffix={handleClose}>
      <div className="space-y-4">
        <Input
          text={groupName}
          setText={setGroupName}
          type="onLight"
          label="Login"
          placeholder="Email"
        />
        <Button type="primary" size="large" handleClick={handleAddGroup}>
          Add group
        </Button>
      </div>
    </BottomSheet>
  );
};

export { AddGroupBottomSheet };
