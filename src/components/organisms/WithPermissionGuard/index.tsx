import { FC, PropsWithChildren } from 'react';
import usePermissionHandler from 'src/hooks/usePermissionHandler';
import { USERPERMISSIONS } from 'src/utils/enums';

interface WithPermissionGuardProps {
  screenName: string;
  permission: USERPERMISSIONS;
}

const WithPermissionGuard: FC<PropsWithChildren<WithPermissionGuardProps>> = ({
  children,
  screenName,
  permission,
}) => {
  const { isUserAuthorized } = usePermissionHandler({});

  return isUserAuthorized(screenName, permission) ? children : <></>;
};

export default WithPermissionGuard;
