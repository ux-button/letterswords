import { Icon } from './Icon';

const Button = ({ children, type, size, icon, width, handleClick }) => {
  // Button style [buttonStyle, iconColor]
  const buttonType = {
    primary: ['bg-mono-100 text-mono-8', 'gradient'],
    secondary: ['bg-avocado-50 text-mono-92', 'fill-emerald-200'],
    tertary: ['bg-mono-0 text-mono-92', 'gradient'],
    ghost: ['bg-mono-4 text-mono-84', 'fill-mono-25'],
    positive: ['bg-emerald-400 text-emerald-900', 'gradient'],
    disable: ['text-mono-25', 'fill-mono-25'],
    attention: ['text-vermel-500', 'fill-vermel-500'],
  };
  // Button sizes (text nowrap)
  const buttonSize = {
    small:
      'font-base text-default-bold flex justify-center rounded-full  px-2 py-1 whitespace-nowrap',
    main: 'font-base text-large-bold flex justify-center rounded-full px-2 py-2 whitespace-nowrap',
    large: 'font-base text-body flex justify-center rounded-3xl px-4 py-4 whitespace-nowrap',
    xsize: 'font-base text-body flex justify-center rounded-3xl px-6 py-5 whitespace-nowrap',
  };

  // Button width
  const buttonWidth = {
    full: 'w-full',
  };

  return (
    <div
      onClick={handleClick}
      className={`${buttonType[type][0]} ${buttonSize[size]} ${buttonWidth[width]}`}
    >
      {icon && <Icon type={icon} size="24" style={buttonType[type][1]} />}
      <div className="mx-2">{children}</div>
    </div>
  );
};

export { Button };
