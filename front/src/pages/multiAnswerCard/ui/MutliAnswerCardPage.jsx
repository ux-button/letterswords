import { Icon } from '../../../shared/ui/Icon';
import { ProgressBar } from '../../../shared/ui/ProgressBar';
import { NavigationTitle } from '../../../shared/ui/NavigationTitle';

// Group elements
import { MutliAnswerCardContainer } from './MutliAnswerCardContainer';
import { MultiAnswerCard } from '../../../shared/ui/MultiAnswerCard';

const MutliAnswerCardPage = () => {
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
    <MutliAnswerCardContainer
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
          <MultiAnswerCard />
        </div>
      }
    />
  );
};

export { MutliAnswerCardPage };
