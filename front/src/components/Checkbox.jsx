import { Icon } from './Icon';

const Checkbox = ({ isChecked, setIsChecked }) => {
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      {isChecked ? (
        <div onClick={handleCheck} className="bg-mono-100 h-7 w-7 rounded-full p-1">
          <Icon type="tick" size={20} style="fill-mono-0" />
        </div>
      ) : (
        <div onClick={handleCheck} className="bg-mono-25 h-7 w-7 rounded-full"></div>
      )}
    </>
  );
};

export { Checkbox };
