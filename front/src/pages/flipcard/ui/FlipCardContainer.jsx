const FlipCardContainer = ({ navigationBar, progressBar, content }) => {
  return (
    <div className="bg-mono-8 h-screen w-screen">
      <div>{navigationBar}</div>
      <div>{progressBar}</div>
      <div>{content}</div>
    </div>
  );
};

export { FlipCardContainer };
