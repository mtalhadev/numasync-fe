import { FC, useMemo } from 'react';

// Types
import { TabsProps } from 'src/types/tabs';

// Utils
import { cn } from 'src/utils/cn';

// Components
import Text from '../Text';
import Divider from '../Divider';
import { useTranslation } from 'react-i18next';

const Tabs: FC<TabsProps> = ({ tabs, selected, onChange, isExpanded }) => {
  const { t } = useTranslation();

  const singleTabWidth: string = useMemo(
    () => `basis-[${100 / tabs.length}%]`,
    [tabs.length]
  );

  return (
    <>
      <div className="flex gap-4 overflow-auto whitespace-nowrap">
        {tabs.map(tab => {
          return (
            <div
              key={tab.key}
              onClick={() => {
                onChange(t(`${tab.title}`));
              }}
              className={cn('cursor-pointer', isExpanded && singleTabWidth)}
            >
              <Text
                containerTag="p"
                className={cn(
                  'w-full cursor-pointer pb-3 text-center text-xs font-medium sm:text-sm md:text-base',
                  selected?.toLowerCase() !== t(`${tab.title}`)?.toLowerCase()
                    ? 'text-default-400'
                    : 'border-b-2 border-b-primary-500 text-primary-500'
                )}
              >
                {t(`${tab.title}`)}
              </Text>
            </div>
          );
        })}
      </div>
      <Divider className="h-[1px]" />
    </>
  );
};

export default Tabs;
