import { Component } from 'react';
// import Loader from 'react-loader-spinner';
import ImageErrorView from './ImageErrorView';
import ImagePendingView from '../Loader/';

// import { toast } from 'react-toastify';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    hits: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=18773643-f1542c573d467a3c4fb890edb&image_type=photo&orientation=horizontal&per_page=12`,
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`Нет картинок по запросу ${nextName}`),
            );
          })
          .then(({ hits }) => this.setState({ hits, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 15000);
    }
  }

  render() {
    const { hits, error, status } = this.state;

    if (status === 'idle') {
      return <p>Введите текст для поиска</p>;
    }

    if (status === 'pending') {
      return (
        <ImagePendingView />

        // <Loader
        //   className={s.loader}
        //   type="Circles"
        //   color="#3ccf9e"
        //   height={100}
        //   width={100}
        //   // timeout={4000} //4 secs
        // />
      );
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.imageGallery}>
          {hits.map((hit, index) => (
            <ImageGalleryItem
              key={index}
              webformatURL={hit.webformatURL}
              largeImageURL={hit.largeImageURL}
              id={hit.id}
            />
          ))}
        </ul>
      );
    }
    // return (
    //   <ul className={s.imageGallery}>
    //     {error && <h1>{error.message} </h1>}

    //     {!imageName && 'Введите текст для поиска'}
    //     {hits && <ImageGalleryItem hits={hits} />}
    //   </ul>
    // );
  }
}
