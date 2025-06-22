import { BottomSheet } from '../../components/BottomSheet';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

const AddWordBottomsheet = ({
  isOpen,
  handleClose,
  word,
  description,
  setWord,
  setDescription,
  handleAddWord,
}) => {
  return (
    <BottomSheet isOpen={isOpen} title="Add new word" suffixIcon="cross" handleSuffix={handleClose}>
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
        <Button type="primary" size="large" handleClick={handleAddWord}>
          Add
        </Button>
      </div>
    </BottomSheet>
  );
};

export { AddWordBottomsheet };
