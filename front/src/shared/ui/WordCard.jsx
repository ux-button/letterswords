import { Icon } from './Icon';

const WordCard = ({ type, isIcons, word, description }) => {
  const cardType = {
    default: 'bg-mono-0',
    riseLow: 'bg-avocado-50',
    riseHigh: 'bg-avocado-100',
    riseExtreme: 'bg-emerald-100',
    repeat: 'bg-magenta-50',
    struggle: 'bg-vermel-50',
  };
  // Icon type, first and second icon color, dots icon color
  const iconsType = {
    default: ['rise', 'fill-mono-25', 'fill-mono-25'],
    riseLow: ['polaris', 'fill-avocado-300', 'fill-avocado-200'],
    riseHigh: ['polaris', 'fill-avocado-400', 'fill-avocado-300'],
    riseExtreme: ['polaris', 'fill-emerald-400', 'fill-emerald-300'],
    repeat: ['time', 'fill-magenta-500', 'fill-magenta-300'],
    struggle: ['flower', 'fill-vermel-400', 'fill-vermel-300'],
  };

  return (
    <div className={`${cardType[type]} flex items-center justify-between rounded-3xl p-4`}>
      <section>
        <div className="text-default text-mono-50">{description}</div>
        <div className="text-subsection text-mono-100">{word}</div>
      </section>
      {!isIcons && (
        <section className="flex w-fit gap-4">
          <Icon type={iconsType[type][0]} style={iconsType[type][1]} size={24} />
          <Icon type="trash" style={iconsType[type][2]} size={24} />
          <Icon type="dots" style={iconsType[type][2]} size={24} />
        </section>
      )}
    </div>
  );
};

export { WordCard };
