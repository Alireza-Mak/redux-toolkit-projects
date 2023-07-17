import React from 'react';
import { useNavigationContext } from '../../hooks/use-navigation';
interface RouteProps {
  pathname: string;
  element: React.ReactNode;
}
const Route: React.FC<RouteProps> = ({ pathname, element }) => {
  const { currentPath } = useNavigationContext();

  if (currentPath === pathname) {
    return <div>{element}</div>;
  } else {
    return null;
  }
};
export default Route;
