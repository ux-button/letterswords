const WordsPageContainer = ({ navigationBar, actionBar, wordsList, bottomBar, modalGroup }) => {
  return (
    <div className="bg-mono-8 h-screen w-screen space-y-4 overflow-y-auto">
      <div className="sticky top-0">{navigationBar}</div>
      <div>{actionBar}</div>
      <div>{wordsList}</div>
      <div>{bottomBar}</div>
      <div>{modalGroup}</div>
    </div>
  );
};

export { WordsPageContainer };
