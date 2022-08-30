import { createContext, useContext } from 'react';
import { ToastAndroid } from 'react-native';

type AppContextType = {
  showToast: (message: string, duration?: number) => void;
}

export const AppContext = createContext<AppContextType>({
  showToast: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {

  const showToast = (message: string, duration = ToastAndroid.SHORT) => {
    ToastAndroid.show(message, duration);
  };

  return (
    <AppContext.Provider value={{ showToast }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within a AppContext");
  }

  return context;
}