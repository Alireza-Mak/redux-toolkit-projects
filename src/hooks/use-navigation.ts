import { useContext } from 'react';
import { NavigationContext, NavigationState } from '../context/navigation';

export const useNavigationContext = (): NavigationState => {
  const navigationContext = useContext(NavigationContext);
  if (!navigationContext) {
    throw new Error(
      'useNavigationContext must be used within a NavigationContextProvider'
    );
  }
  return navigationContext;
};
