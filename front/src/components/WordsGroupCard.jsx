import { ProgressBar } from './ProgressBar';
import { Icon } from './Icon';

const WordsGroupCard = ({ type, title, quantity, learningCurve }) => {
  // Background, iconLeftType, iconLeftColor, iconRightColor
  const cardType = {
    inbox: ['bg-mono-4', 'romb', 'fill-mono-25', 'fill-mono-25'],
    default: ['bg-mono-0', 'polaris', 'fill-mono-16', 'fill-mono-8'],
    recommended: [
      'bg-linear-to-t from-avocado-50 to-vermel-50',
      'clover',
      'fill-vermel-400',
      'fill-vermel-200',
    ],
    neural: [
      'bg-linear-to-t from-magenta-50 to-emerald-100',
      'polaris',
      'fill-magenta-500',
      'fill-emerald-300',
    ],
    riseLow: ['bg-avocado-50', 'rise', 'fill-avocado-300', 'fill-avocado-200'],
    riseHigh: ['bg-avocado-100', 'rise', 'fill-avocado-400', 'fill-avocado-300'],
    riseExtreme: ['bg-emerald-100', 'rise', 'fill-emerald-400', 'fill-emerald-300'],
    repeat: ['bg-magenta-50', 'time', 'fill-magenta-500', 'fill-magenta-300'],
    struggle: ['bg-vermel-50', 'flower', 'fill-vermel-400', 'fill-vermel-300'],
  };

  return (
    <div className={`${cardType[type][0]} space-y-2 rounded-3xl px-4 py-5`}>
      <section className="flex justify-between">
        <Icon type={cardType[type][1]} size="24" style={cardType[type][2]} />
        <Icon type="dots" size="24" style={cardType[type][3]} />
      </section>
      <section className="text-default text-mono-50">{`${quantity} words`}</section>
      <section className="flex h-13 flex-col justify-end">
        <div className="text-subsection text-mono-92">{title}</div>
      </section>

      <ProgressBar learningCurve={learningCurve} />
    </div>
  );
};

export { WordsGroupCard };
