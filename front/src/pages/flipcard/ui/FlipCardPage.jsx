import { NavigationTitle } from '../../../shared/ui/NavigationTitle';
import { ProgressBar } from '../../../shared/ui/ProgressBar';
import { FlipCardContainer } from '../../../features/flipcard-page/ui/FlipCardContainer';
import { Icon } from '../../../shared/ui/Icon';
import { FlipCard } from '../../../shared/ui/FlipCard';

const FlipCardPage = () => {
  const allWords = [
    { id: '001', type: 'default', word: 'Car', description: 'Машина' },
    { id: '002', type: 'riseLow', word: 'Road', description: 'Дорога' },
    { id: '003', type: 'riseHigh', word: 'Road', description: 'Дорога' },
    { id: '004', type: 'riseExtreme', word: 'Road', description: 'Дорога' },
    { id: '005', type: 'repeat', word: 'Road', description: 'Дорога' },
    { id: '006', type: 'struggle', word: 'Road', description: 'Дорога' },
    { id: '007', type: 'default', word: 'Car', description: 'Машина' },
    { id: '008', type: 'default', word: 'Car', description: 'Машина' },
    { id: '009', type: 'default', word: 'Car', description: 'Машина' },
    { id: '010', type: 'default', word: 'Car', description: 'Машина' },
    { id: '011', type: 'default', word: 'Car', description: 'Машина' },
  ];

  return (
    <FlipCardContainer
      navigationBar={
        <NavigationTitle title="Word cards" subtitle="Choose the correct card" suffixIcon="cross" />
      }
      progressBar={
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex gap-1">
            <div>12</div>
            <Icon type="tick" size={24} />
          </div>
          <ProgressBar learningCurve={2} />
        </div>
      }
      content={
        <div className="px-4">
          <FlipCard />
        </div>
      }
    />
  );
};

export { FlipCardPage };
