import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { WordsGroupCard } from "./components/WordsGroupCard";

const App = () => {
  return (
    <div className="bg-mono-8">
      <h1 class="text-3xl bg-amber-400">dsfdsfsdffde</h1>
      <Button type="primary" size="small" icon="star">
        Excellent
      </Button>
      <Button type="secondary" size="main" icon="star">
        Remarkable
      </Button>
      <Button type="positive" size="large" icon="star">
        Fantastic
      </Button>
      <Button type="positive" size="xsize" icon="star">
        Outstanding
      </Button>
      <Input type="onLight" title="New Word" placeholder="Type word" />
      <div className="grid grid-cols-2 gap-0.5">
        <WordsGroupCard
          type="default"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="riseLow"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="riseHigh"
          learningCurve="2"
          groupName="Travel Insights of London"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="repeat"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="riseExtreme"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="struggle"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="recommended"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="neural"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
        <WordsGroupCard
          type="inbox"
          learningCurve="2"
          groupName="Architecture"
          wordsQnt="10"
        />
      </div>
    </div>
  );
};

export { App };
