import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import React, { FC } from 'react';
import Text from '../Text';

export interface CustomPopoverProps {
  triggerButon: React.ReactNode;
  title?: string;
  desciption?: string;
  content?: React.ReactNode;
  isOpen?: boolean;
  showArrow?: boolean;
  placement?:
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
}

const CustomPopover: FC<CustomPopoverProps> = ({
  triggerButon,
  title,
  desciption,
  content,
  isOpen,
  placement = 'bottom-end',
  showArrow = true,
}) => {
  return (
    <Popover
      showArrow={showArrow}
      placement={placement}
      className="max-w-[360px]"
      isOpen={isOpen}
    >
      <PopoverTrigger>{triggerButon}</PopoverTrigger>
      <PopoverContent className="p-0">
        {title && (
          <div className="w-full px-5 py-4">
            <Text
              containerTag="h5"
              className="text-base font-semibold text-foreground"
            >
              {title}
            </Text>
            <Text containerTag="p" className="text-sm text-default-500">
              {desciption}
            </Text>
          </div>
        )}
        <div className="w-full">{content}</div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
