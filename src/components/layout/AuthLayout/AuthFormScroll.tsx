import { ReactNode } from 'react';
import { ScrollShadow } from '@nextui-org/react';

interface Props {
  classes?: string;
  children: ReactNode;
}

const AuthFormScroll = ({ children, classes }: Props) => {
  return (
    <ScrollShadow
      orientation="vertical"
      hideScrollBar
      offset={10}
      size={100}
      className={`max-h-[calc(100vh-110px)] overflow-x-hidden pb-5 w-full lg:w-[440px] mx-auto ${classes}`}
    >
      {children}
    </ScrollShadow>
  );
};

export default AuthFormScroll;
