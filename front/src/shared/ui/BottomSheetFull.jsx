const BottomSheetFull = ({ header, content, footer }) => {
  return (
    <>
      <div className="bg-mono-75 fixed top-0 z-50 h-screen w-screen opacity-60"></div>
      <div className="bg-mono-8 fixed top-8 z-60 w-screen rounded-t-4xl px-4 pt-4 pb-12">
        <div className="flex justify-center pb-2">
          <div className="bg-mono-16 h-1 w-10 rounded-full"></div>
        </div>
        <div>{header}</div>
        <div className="h-screen overflow-y-auto">{content}</div>
        <div>{footer}</div>
      </div>
    </>
  );
};

export { BottomSheetFull };
