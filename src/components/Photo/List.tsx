import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-state';
import { Photo, fetchPhotos } from '../../store';
import Skeleton from '../Skeleton/Skeleton';
import PhotoPanel from '../Panel/PhotoPanel';
import ListItem from './ListItem';
import Tabs from '../Tabs/Tabs';

const List = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, photos } = useAppSelector(({ photos }) => {
    return photos;
  });
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);
  let content;
  let favorite;
  if (isLoading) {
    if (isLoading && photos.length) {
      content = <Skeleton time={photos.length} className="h-32" />;
    } else if (isLoading && !photos.length) {
      content = <Skeleton time={12} className="h-32" />;
    }
  } else if (error) {
    content = error;
  } else {
    content = photos.map((item:Photo) => {
      return <ListItem key={item.id} item={item} />;
    });
    const favoriteList = photos.filter((item: Photo) => item.favorite === true);
    favoriteList.length > 0
      ? (favorite = favoriteList.map((item: Photo) => {
          return <ListItem key={item.id} item={item} />;
        }))
      : (favorite = 'There is nothing in favorite list');
  }

  const data = [
    {
      tabName: 'recently',
      tabContent: <PhotoPanel>{content}</PhotoPanel>,
    },
    { tabName: 'favorite', tabContent: <PhotoPanel>{favorite}</PhotoPanel> },
  ];
  return (
    <Tabs
      data={data}
      className="mb-3 "
      active="font-semibold text-blue-500 !border-blue-500"
    />
  );
};

export default List;
