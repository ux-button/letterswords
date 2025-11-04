import { BasicIcon } from './BasicIcon';

const Input = ({ type, label, text, setText, placeholder }) => {
  // Input field style
  const textType = {
    onLight: 'bg-mono-4 caret-avocado-500 border-0 hover:bg-mono-20 focus:bg-mono-8',
    onLightError: 'bg-vermel-50 border border-magenta-700 hover:bg-vermel-100',
    onDark: 'bg-mono-84 caret-avocado-500 border-0 hover:bg-mono-75 focus:bg-mono-92 text-mono-4',
    onDarkError: 'bg-vermel-200 border border-magenta-800 hover:bg-vermel-300',
  };
  // Label style and color
  const labelType = {
    onLight: 'text-default text-mono-50',
    onLightError: 'text-default text-magenta-700',
    onDark: 'text-default text-mono-50',
    onDarkError: 'text-default text-magenta-800',
  };
  // Basic icon style
  const iconColor = {
    onLight: 'fill-none stroke-mono-25',
    onLightError: 'fill-none stroke-magenta-500',
    onDark: 'fill-none stroke-mono-25',
    onDarkError: 'fill-none stroke-magenta-500',
  };
  const placeholderType = {
    onLight: 'placeholder:text-mono-16',
    onLightError: 'placeholder:text-mono-16',
    onDark: 'placeholder:text-mono-4',
    onDarkError: 'placeholder:text-mono-4',
  };

  // Controllers
  const handleChange = (value) => {
    setText(value);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className={`${textType[type]} flex w-full rounded-3xl p-4`}>
      <div className="w-full">
        <div className={labelType[type]}>{label}</div>
        <input
          className={`${placeholderType[type]} text-subsection w-full outline-none`}
          type="text"
          name={label}
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      <div onClick={handleClear} className="flex flex-col justify-center">
        {text ? <BasicIcon type="cross" size="24" style={iconColor[type]} /> : null}
      </div>
    </div>
  );
};

export { Input };
