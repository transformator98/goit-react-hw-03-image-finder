import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ hits }) {
  return (
    <>
      {hits.map((hit, index) => (
        <li key={index} className={s.imageGalleryItem}>
          <img src={hit.webformatURL} alt={hit.id} className={s.image} />
        </li>
      ))}
    </>
  );
}
