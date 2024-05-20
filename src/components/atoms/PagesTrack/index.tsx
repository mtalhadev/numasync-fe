import { FC } from 'react';
import Text from '../Text';
import { cn } from 'src/utils/cn';
import { ArrowRight2 } from 'iconsax-react';

interface PagesTrackProps {
  pagesTrackList: { index: number; name: string; onClick?: () => void }[];
}

const PagesTrack: FC<PagesTrackProps> = ({ pagesTrackList }) => {
  return (
    <div className="flex items-center gap-1">
      {pagesTrackList.map((item, ind) => {
        return (
          <div key={item.index} className="flex items-center gap-1">
            <Text
              containerTag="p"
              className={cn(
                'cursor-pointer text-sm',
                ind !== pagesTrackList.length - 1 ? 'text-default-400' : 'text-default-500',
              )}
              onClick={item.onClick}
            >
              {item.name}
            </Text>
            {ind !== pagesTrackList.length - 1 && <ArrowRight2 size="16" className="text-default-400" />}
          </div>
        );
      })}
    </div>
  );
};

export default PagesTrack;
