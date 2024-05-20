// Next UI Provider
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Toast Provider
import { Toaster } from 'react-hot-toast';

// Redux Provider
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Auth Provider
import AuthProvider from './utils/useAuth';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <AuthProvider>
          <Toaster position="top-center" />
          <NextThemesProvider
            attribute="class"
            defaultTheme="numa-light"
            themes={['numa-light', 'numa-dark', 'light', 'dark']}
          >
            {children}
          </NextThemesProvider>
        </AuthProvider>
      </Provider>
    </NextUIProvider>
  );
};
