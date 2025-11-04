const BottomSheet = ({ header, content, footer }) => {
  return (
    <>
      <div className="bg-mono-75 fixed top-0 z-50 h-screen w-screen opacity-60"></div>
      <div className="bg-mono-0 fixed bottom-0 z-60 w-screen rounded-t-4xl px-4 pt-4 pb-12">
        <div className="flex justify-center pb-2">
          <div className="bg-mono-8 h-1 w-10 rounded-full"></div>
        </div>
        <div>{header}</div>
        <div>{content}</div>
        <div>{footer}</div>
      </div>
    </>
  );
};

export { BottomSheet };
