import { BottomSheet } from '../../components/BottomSheet';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const AddMultiWordsBS = ({
  isOpen,
  handleClose,
  word,
  description,
  setWord,
  setDescription,
  handleSave,
  handleAddMore,
}) => {
  return (
    <BottomSheet isOpen={isOpen} suffixIcon="cross" handleSuffix={handleClose} title="Add words">
      <div className="space-y-4">
        <div className="space-y-1">
          <Input
            text={word}
            setText={setWord}
            type="onLight"
            label="Word"
            placeholder="Type word"
          />
          <Input
            text={description}
            setText={setDescription}
            type="onLight"
            label="Translation"
            placeholder="Type translation"
          />
        </div>
        <div className="flex">
          <Button type="primary" size="large" handleClick={handleSave}>
            Save
          </Button>
          <Button type="primary" size="large" handleClick={handleAddMore}>
            Save
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};

export { AddMultiWordsBS };
