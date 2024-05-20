import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { GlobalTypes } from 'src/types/globalTypes';
import { MESSAGE_TYPE } from 'src/types/toastTypes';
import { USERPERMISSIONS } from 'src/utils/enums';
import { showToast } from 'src/utils/toast';

export interface UsePermissionHandlerTypes {
  screenName?: string;
  authorizeFor?: USERPERMISSIONS;
}

const usePermissionHandler = ({
  screenName,
  authorizeFor,
}: UsePermissionHandlerTypes) => {
  // TODO: Completely change this implementation based on the format of permissions we'll be getting
  const user = useSelector((state: GlobalTypes) => state.userReducer.user);
  const { t } = useTranslation();

  const isUserAuthorized = useCallback(
    (screen?: string, permission?: USERPERMISSIONS) => {
      if (!(screen && permission)) {
        if (screenName && authorizeFor) {
          if (user?.permissions?.[screenName] ?? ''.includes(authorizeFor)) {
            return true;
          }
          return false;
        }
      } else {
        if (user?.permissions?.[screen] ?? ''.includes(permission)) {
          return true;
        }
        return false;
      }
      return true;
    },
    [user, screenName, authorizeFor]
  );

  const authorizeAndRedirect = useCallback(
    ({
      callback,
      screen,
      permission,
      errorMessage = '',
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: any;
      screen?: string;
      permission?: USERPERMISSIONS;
      errorMessage?: string;
    }) => {
      const auth = isUserAuthorized(screen, permission);
      if (auth) {
        return callback;
      } else {
        return () =>
          showToast({
            type: MESSAGE_TYPE.error,
            message: errorMessage
              ? errorMessage
              : t('youAreNotAuthorizedToPerformThisAction'),
          });
      }
    },
    [isUserAuthorized, t]
  );

  return { isUserAuthorized, authorizeAndRedirect };
};

export default usePermissionHandler;
