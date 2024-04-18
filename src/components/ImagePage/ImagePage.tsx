import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchImages } from '../../features/images/imagesSlice';
import Navbar from '../Navbar';
import useStyles from '../Posts/style';

const ImagesComponent: React.FC = () => {
    const style = useStyles()
  const dispatch = useAppDispatch();
  const images = useAppSelector((state: any) => state.images.images);
  const status = useAppSelector((state: any) => state.images.status);
  const error = useAppSelector((state: any) => state.images.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className={style.container}>
      <Navbar />
      {images.map((image: any) => (
        <div key={image.id} className={style.body}>
          <img src={image.thumbnailUrl} alt={image.title} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImagesComponent;
