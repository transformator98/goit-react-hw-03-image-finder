import s from './Loader.module.css';
import stules from '../ImageGallery/ImageGallery.module.css';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImagePendingView() {
  const images = { webformatURL: 'http://placehold.it/600x400' };

  return (
    <>
      <Loader
        className={s.loader}
        type="Circles"
        color="#3ccf9e"
        height={100}
        width={100}
      />
      <>
        <ul className={stules.imageGallery}>
          <ImageGalleryItem webformatURL={images} />
        </ul>
      </>
    </>
  );
}
