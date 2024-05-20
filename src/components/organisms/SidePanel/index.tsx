import { FC, PropsWithChildren } from 'react';
import { cn } from 'src/utils/cn';

// Components
import Divider from '../../atoms/Divider';
import CustomButton from '../../atoms/Button';

export interface SidePanelProps {
  isOpen: boolean;
  setIsOpen: (_open: boolean) => void;
  title: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  primaryButtonClick: () => void;
  secondaryButtonClick?: () => void;
  width?: string;
}

const SidePanel: FC<PropsWithChildren<SidePanelProps>> = ({
  isOpen,
  setIsOpen,
  title,
  children,
  primaryButtonText,
  secondaryButtonText = 'Cancel',
  primaryButtonClick,
  secondaryButtonClick,
  width,
}) => {
  return (
    <div
      id="slideover-container"
      className={cn(
        'fixed inset-0 z-30 h-full w-full',
        !isOpen && 'invisible'
      )}
    >
      <div
        onClick={() => setIsOpen(false)}
        id="slideover-bg"
        className={cn(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-500 ease-out',
          isOpen ? 'opacity-50' : 'opacity-0'
        )}
      ></div>
      <div
        id="slideover"
        className={cn(
          `${width} absolute right-0 flex h-screen min-w-96 max-w-[450px] flex-col rounded-bl-2xl rounded-tl-2xl bg-content1 transition-all duration-300 ease-out`,
          !isOpen && 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex basis-[10%] items-center justify-between rounded-tl-2xl bg-primary-500 p-5">
          <p className="text-lg font-semibold leading-7 text-primary-foreground">
            {title}
          </p>
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center text-white"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative basis-[90%] p-5">
          {children}

          {/* Footer */}
          <div className="absolute bottom-5 w-[90%]">
            <Divider className="h-[1px]" />
            <div className="flex justify-end gap-2 pt-6">
              <CustomButton
                variant="light"
                className="text-foreground"
                onClick={() => {
                  secondaryButtonClick && secondaryButtonClick();
                  setIsOpen(false);
                }}
              >
                {secondaryButtonText}
              </CustomButton>
              <CustomButton onClick={primaryButtonClick}>
                {primaryButtonText}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
