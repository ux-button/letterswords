import { ProgressBar } from "./ProgressBar";
import { Icon } from "./Icon";

const WordsGroupCard = ({ type, groupName, wordsQnt, learningCurve }) => {
  // Background, iconLeftType, iconLeftColor, iconRightColor
  const cardType = {
    inbox: ["border-2 border-mono-16", "romb", "fill-mono-25", "fill-mono-25"],
    default: ["bg-mono-0", "polaris", "fill-mono-16", "fill-mono-8"],
    recommended: [
      "bg-linear-to-t from-avocado-50 to-vermel-50",
      "clover",
      "fill-vermel-400",
      "fill-vermel-200",
    ],
    neural: [
      "bg-linear-to-t from-magenta-50 to-emerald-100",
      "polaris",
      "fill-magenta-500",
      "fill-emerald-300",
    ],
    riseLow: ["bg-avocado-50", "rise", "fill-avocado-300", "fill-avocado-200"],
    riseHigh: [
      "bg-avocado-100",
      "rise",
      "fill-avocado-400",
      "fill-avocado-300",
    ],
    riseExtreme: [
      "bg-emerald-100",
      "rise",
      "fill-emerald-400",
      "fill-emerald-300",
    ],
    repeat: ["bg-magenta-50", "time", "fill-magenta-500", "fill-magenta-300"],
    struggle: ["bg-vermel-50", "flower", "fill-vermel-400", "fill-vermel-300"],
  };

  return (
    <div className={`${cardType[type][0]} py-5 px-4 rounded-3xl space-y-2`}>
      <section className="flex justify-between">
        <Icon type={cardType[type][1]} size="24" style={cardType[type][2]} />
        <Icon type="dots" size="24" style={cardType[type][3]} />
      </section>
      <section className="text-default text-mono-50">{`${wordsQnt} words`}</section>
      <section className="h-13 flex flex-col justify-end">
        <div className="text-subsection text-mono-92">{groupName}</div>
      </section>

      <ProgressBar learningCurve={learningCurve} />
    </div>
  );
};

export { WordsGroupCard };
