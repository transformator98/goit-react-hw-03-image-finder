import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ hits }) {
  return (
    <ul className={s.imageGallery}>
      <ImageGalleryItem hits={hits} />
    </ul>
  );
}
