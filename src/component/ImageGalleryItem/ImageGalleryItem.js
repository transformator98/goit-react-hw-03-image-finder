import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  key = 1,
  webformatURL = 'http://placehold.it/600x400',
  largeImageURL = 'http://placehold.it/600x400',
  id = 1,
}) {
  return (
    <li key={key} className={s.imageGalleryItem}>
      <img src={webformatURL} alt={id} className={s.image} />
      {/* <img src={largeImageURL} alt={id} className={s.image} /> */}
    </li>
  );
}
