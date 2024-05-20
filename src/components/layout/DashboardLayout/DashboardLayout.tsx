import { useEffect, useState } from 'react';

// Components
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import CopyRight from 'src/components/molecules/CopyRight';

// Redux
import { useSelector } from 'react-redux';

// Types
import { GlobalTypes } from 'src/types/globalTypes';
import { PRIVATE_ROUTES } from 'src/data/routes';
import { useLocation } from 'react-router-dom';

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [returnWithoutLayout, setReturnWithoutLayout] = useState(false);
  const collapsed = useSelector(
    (state: GlobalTypes) => state.global.sidebarCollapsed
  );
  const location = useLocation();

  useEffect(() => {
    if (
      !Object.values(PRIVATE_ROUTES)
        .map(item => item.split('/')[1])
        .includes(location.pathname.split('/')?.[1])
    ) {
      setReturnWithoutLayout(true);
    } else {
      setReturnWithoutLayout(false);
    }
  }, [location]);

  if (returnWithoutLayout) return children;

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="overflow-x-hidden">
        <div
          className={`absolute ${collapsed ? 'left-[80px] w-[calc(100%_-_80px)]' : 'left-0 w-full lg:left-[240px] lg:w-[calc(100%_-_240px)]'} transition-width-left duration-300`}
        >
          <Header setIsOpen={setIsOpen} />
          <div className="p-3 lg:p-6">{children}</div>
          <CopyRight />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
