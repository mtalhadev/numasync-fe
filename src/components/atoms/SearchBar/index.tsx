// Next UI
import { Input } from '@nextui-org/react';

// Icons
import { SearchNormal1 } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

// Types
import { SearchBarTypes } from 'src/types/searchBarTypes';

const SearchBar = (props: SearchBarTypes) => {
  const { placeholder, classNames, isClearable = true } = props;
  const { t } = useTranslation();

  const className = {
    base: [
      classNames?.base,
      'max-w-[260px]',
      'xl:max-w-[400px]',
      'hidden',
      'md:flex',
      'bg-transparent',
      'rounded-xl',
    ],
    input: [
      classNames?.input,
      'bg-transparent',
      '!text-default-900',
      'text-base',
      'font-medium',
      'placeholder:text-default-500',
      'font-zen',
    ],
    innerWrapper: [classNames?.innerWrapper, 'bg-transparent gap-2'],
    inputWrapper: [
      classNames?.inputWrapper,
      'h-12',
      'bg-transparent',
      'border',
      'border-default-200',
      'rounded-xl',
      'hover:bg-default-200/70',
      '!cursor-text',
    ],
  };

  return (
    <Input
      isClearable={isClearable}
      classNames={className}
      placeholder={placeholder || t('search')}
      startContent={<SearchNormal1 size="24" className="text-default-500" />}
    />
  );
};

export default SearchBar;
