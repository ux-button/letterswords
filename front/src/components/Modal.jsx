const Modal = ({ content, header, footer }) => {
  return (
    <>
      <div className="bg-mono-75 fixed top-0 z-50 h-screen w-screen opacity-60"></div>
      <div className="fixed bottom-0 z-60 w-screen px-4 pb-8">
        <div className="bg-mono-0 w-full rounded-4xl p-4 pb-6">
          <div>{header}</div>
          <div>{content}</div>
          <div>{footer}</div>
        </div>
      </div>
    </>
  );
};

export { Modal };
