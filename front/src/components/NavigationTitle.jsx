import { BasicIcon } from './BasicIcon';
import { Icon } from './Icon';

const NavigationTitle = ({
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
  return (
    <div className="flex items-center justify-between px-2 py-1">
      <section className="flex h-full w-14 shrink items-center">
        <div onClick={handlePrefix}>
          <BasicIcon type={prefixIcon} style="stroke-mono-50" size={24} />
        </div>
        <div onClick={handlePrefixExtra}>
          <Icon type={prefixExtra} size={24} style="fill-mono-100" />
        </div>
      </section>
      <section className="flex h-14 grow flex-col justify-center px-2">
        {title && <div className="text-section text-center">{title}</div>}
        {subtitle && <div className="text-default text-mono-75 text-center">{subtitle}</div>}
      </section>
      <section className="flex h-full w-14 shrink items-center">
        <div onClick={handleSuffixExtra}>
          <Icon type={suffixExtra} size={24} style="fill-mono-100" />
        </div>

        <div onClick={handleSuffix}>
          <BasicIcon type={suffixIcon} size={24} style="stroke-mono-50" />
        </div>
      </section>
    </div>
  );
};

export { NavigationTitle };
