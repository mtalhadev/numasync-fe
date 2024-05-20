// Router
// import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { setUser } from 'src/redux/slice/reducers/user.reducer';

// Cookie
import { getCookie, setCookie } from './cookie';
import { useRefreshTokenMutation } from 'src/redux/slice/apiSlices/authSlice';
import { LoginApiData } from 'src/types/form/login';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { NUMASYNC_SESSION, NUMASYNC_USER } from './constants';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const session = getCookie(NUMASYNC_SESSION);

  const parsedSession = useMemo(() => {
    if (session !== 'undefined') {
      return JSON.parse(session ?? '{}');
    }
    return {};
  }, [session]);

  const [refresh] = useRefreshTokenMutation();

  useEffect(() => {
    const currentTime = new Date().getTime() / 1000;
    const isExpired = parsedSession?.expiresAt
      ? parsedSession?.expiresAt < currentTime
      : true;

    const refreshToken = async () => {
      try {
        const res: {
          data?: LoginApiData;
          error?: FetchBaseQueryError | SerializedError;
        } = await refresh({
          refreshToken: parsedSession.refreshToken || '',
        });
        const stringifiedData = JSON.stringify(res?.data?.user);
        setCookie(NUMASYNC_SESSION, JSON.stringify(res?.data?.session));
        setCookie(NUMASYNC_USER, stringifiedData);
        dispatch(setUser(res.data?.user));
      } catch (error) {
        console.error(error, 'error');
      }
    };

    if (isExpired) {
      refreshToken();
    } else if (parsedSession) {
      dispatch(setUser(JSON.parse(getCookie(NUMASYNC_USER) ?? '')));
    }
  }, [session, dispatch, parsedSession, refresh]);

  return <>{children}</>;
};

export default AuthProvider;
