import { Component } from 'react';
import Loader from 'react-loader-spinner';
import ImageErrorView from './ImageErrorView';
// import { toast } from 'react-toastify';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    hits: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

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
        .then(({ hits }) => this.setState({ hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejacted' }));
    }
  }

  render() {
    const { hits, status } = this.state;

    if (status === 'idle') {
      return <div>Введите текст для поиска</div>;
    }

    if (status === 'pending') {
      return (
        <Loader
          className={s.loader}
          type="Circles"
          color="#3ccf9e"
          height={100}
          width={100}
          timeout={4000} //4 secs
        />
      );
    }

    if (status === 'rejected') {
      return <ImageErrorView />;
      // return <ImageErrorView message={error.message} />;
    }
    if (status === 'resolved') {
      return <ImageGalleryItem hits={hits} />;
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
