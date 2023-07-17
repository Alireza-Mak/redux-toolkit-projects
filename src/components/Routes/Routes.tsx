import { CarPage, PhotoPage, PlaylistPage, MediaPage } from '../../pages';
import Panel from '../Panel/Panel';
import Route from './Route';

export interface RouteType {
  pathname: string;
  content: React.ReactNode;
  label: string;
}
type RoutesType = RouteType[];
export const routes: RoutesType = [
  { label: 'Playlist', pathname: '/', content: <PlaylistPage /> },
  { label: 'Car', pathname: '/car', content: <CarPage /> },
  { label: 'Photo', pathname: '/photo', content: <PhotoPage /> },
  { label: 'Media', pathname: '/media', content: <MediaPage /> },
];

const Routes = () => {
  const renderRoutes = routes.map(({ content, pathname }: RouteType) => {
    return <Route key={pathname} pathname={pathname} element={content} />;
  });
  return <Panel className="pt-5 w-full">{renderRoutes}</Panel>;
};

export default Routes;
