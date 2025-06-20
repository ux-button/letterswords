import { NavigationTitle } from './NavigationTitle';

const BottomSheet = ({
  children,
  isOpen,
  title,
  subtitle,
  prefixIcon,
  prefixExtra,
  suffixIcon,
  suffixExtra,
  handlePrefix,
  handlePrefixExtra,
  handleSuffix,
  handleSuffixExtra,
}) => {
  if (isOpen) {
    return (
      <>
        <div className="bg-mono-75 fixed top-0 z-50 h-screen w-screen opacity-60"></div>
        <div className="bg-mono-0 fixed bottom-0 z-60 w-screen rounded-t-4xl px-4 pt-4 pb-12">
          <div className="flex justify-center pb-2">
            <div className="bg-mono-8 h-1 w-10 rounded-full"></div>
          </div>
          <NavigationTitle
            title={title}
            subtitle={subtitle}
            prefixIcon={prefixIcon}
            prefixExtra={prefixExtra}
            suffixIcon={suffixIcon}
            suffixExtra={suffixExtra}
            handlePrefix={handlePrefix}
            handlePrefixExtra={handlePrefixExtra}
            handleSuffix={handleSuffix}
            handleSuffixExtra={handleSuffixExtra}
          />
          <div>{children}</div>
        </div>
      </>
    );
  }
};

export { BottomSheet };
