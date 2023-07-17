import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-state';
import Skeleton from '../Skeleton/Skeleton';
import { fetchSinglePhoto, editPhotos, Photo } from '../../store';
import Button from '../Button/Button';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
const SingleItem = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { error, isLoading, singlePhoto } = useAppSelector(
    ({ singlePhoto }) => {
      return singlePhoto;
    }
  );
  useEffect(() => {
    dispatch(fetchSinglePhoto());
  }, [dispatch]);

  useEffect(() => {
    setLiked(singlePhoto.favorite);
  }, [singlePhoto]);

  const handleLikeBtn = () => {
    setLiked(!liked);
    const newSinglePhoto: Photo = {
      ...singlePhoto,
      favorite: !singlePhoto.favorite,
    };
    dispatch(editPhotos(newSinglePhoto));
  };
  let content;
  if (isLoading) {
    content = <Skeleton time={1} className="w-full h-52" />;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    const icon = liked ? (
      <AiTwotoneHeart className="text-lg fill-red-500" />
    ) : (
      <AiOutlineHeart className="text-lg" />
    );
    content = (
      <div className="w-full h-auto flex flex-col">
        <a href={singlePhoto.imageUrl} target="_blank" rel="noreferrer">
          <img
            src={singlePhoto.imageUrl}
            alt={singlePhoto.model}
            className="object-cover w-full h-62 md:h-52  rounded overflow-hidden"
          />
        </a>
        <div className="flex justify-between items-center border-b py-2">
          <p className="font-semibold">{singlePhoto.brand}</p>
          <Button onClick={handleLikeBtn} className="border-none !p-0">
            {icon}
          </Button>
        </div>
        <div className="flex justify-between items-center border-b py-2">
          <p className="font-semibold">Model:</p>
          <span>{singlePhoto.model}</span>
        </div>
        <div className="flex justify-between items-center border-b py-2">
          <p className="font-semibold">Website:</p>
          <a href={singlePhoto.companyUrl}>Tesla</a>
        </div>
        <div className="flex justify-between items-center border-b py-2">
          <p className="font-semibold">Date of manufacture:</p>
          <p>{singlePhoto.dateCreated}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold mb-2">Description:</p>
          <p className="text-xs text-gray-400">{singlePhoto.description}</p>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default SingleItem;
