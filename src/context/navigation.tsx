import { createContext, useState, useEffect } from 'react';

export interface NavigationState {
  currentPath: string;
  navigateTo: (to: string) => void;
}
export const NavigationContext = createContext<NavigationState | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

const NavProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );
  useEffect(() => {
    const handlePopUp = () => {
      setCurrentPath(window.location.pathname);
    };
    document.addEventListener('popstate', handlePopUp);
    return () => document.removeEventListener('popstate', handlePopUp);
  });
  const navigateTo = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  const state: NavigationState = {
    currentPath,
    navigateTo,
  };
  return (
    <NavigationContext.Provider value={state}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavProvider;
