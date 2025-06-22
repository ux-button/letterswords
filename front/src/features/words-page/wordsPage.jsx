import { Button } from '../../components/Button';
import { NavigationTitle } from '../../components/NavigationTitle';
import { WordCard } from '../../components/WordCard';

const WordsPage = () => {
  const allWords = [
    { type: 'default', word: 'Car', description: 'Машина' },
    { type: 'riseLow', word: 'Road', description: 'Дорога' },
    { type: 'riseHigh', word: 'Road', description: 'Дорога' },
    { type: 'riseExtreme', word: 'Road', description: 'Дорога' },
    { type: 'repeat', word: 'Road', description: 'Дорога' },
    { type: 'struggle', word: 'Road', description: 'Дорога' },
    { type: 'default', word: 'Car', description: 'Машина' },
    { type: 'default', word: 'Car', description: 'Машина' },
    { type: 'default', word: 'Car', description: 'Машина' },
    { type: 'default', word: 'Car', description: 'Машина' },
    { type: 'default', word: 'Car', description: 'Машина' },
  ];

  return (
    <div className="bg-mono-8 h-screen space-y-4">
      <section>
        <NavigationTitle
          title="Travel"
          subtitle={`${allWords.length} words`}
          prefixIcon="arrowLeft"
        />
      </section>
      <section className="flex justify-between px-4">
        <div className="flex gap-2">
          <Button type="tertary" size="main" icon="plus">
            Add word
          </Button>
          <Button type="ghost" size="main" icon="rise">
            Rise group
          </Button>
        </div>
        <Button type="ghost" size="main">
          Select
        </Button>
      </section>
      <section className="space-y-1 px-2">
        {allWords.map((word) => {
          return <WordCard type={word.type} word={word.word} description={word.description} />;
        })}
      </section>
    </div>
  );
};

export { WordsPage };
