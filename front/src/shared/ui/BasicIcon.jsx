const BasicIcon = ({ type, size, style }) => {
  const iconType = {
    arrowUp:
      'M14 11L13.5777 10.7889C11.2554 9.62769 9.37231 7.74462 8.21115 5.42229L8 5L7.78885 5.42229C6.62769 7.74462 4.74462 9.62769 2.42229 10.7889L2 11',
    arrowDown:
      'M2 5L2.42229 5.21115C4.74462 6.37231 6.62769 8.25538 7.78885 10.5777L8 11L8.21115 10.5777C9.37231 8.25538 11.2554 6.37231 13.5777 5.21115L14 5',
    arrowLeft:
      'M11 2L10.7889 2.42229C9.62769 4.74462 7.74462 6.62769 5.42229 7.78885L5 8L5.42229 8.21115C7.74462 9.37231 9.62769 11.2554 10.7889 13.5777L11 14',
    arrowRight:
      'M5 14L5.21115 13.5777C6.37231 11.2554 8.25538 9.37231 10.5777 8.21115L11 8L10.5777 7.78885C8.25538 6.62769 6.37231 4.74462 5.21115 2.42229L5 2',
    cross: 'M3 3L13 13M13 3L3 13',
  };

  // Return style
  return (
    <svg
      className={style}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={iconType[type]}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>
  );
};

export { BasicIcon };
