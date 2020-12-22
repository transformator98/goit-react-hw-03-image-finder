import { Component } from 'react';
import Loader from 'react-loader-spinner';
// import { toast } from 'react-toastify';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    hits: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=18773643-f1542c573d467a3c4fb890edb&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(({ hits }) => this.setState({ hits }))
        // .then(console.log)
        .finally(() => this.setState({ loading: false }));

      //   fetch(
      //     `https://pixabay.com/api/?q=${nextName}&page=1&key=18773643-f1542c573d467a3c4fb890edb&image_type=photo&orientation=horizontal&per_page=12`,
      //   )
      //     .then(res => res.json())
      //     .then(({ hits }) => this.setState({ hits }))
      //     // .then(console.log)
      //     .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, hits } = this.state;
    const { imageName } = this.props;
    return (
      <ul className={s.imageGallery}>
        {loading && (
          <Loader
            className={s.loader}
            type="Circles"
            color="#3ccf9e"
            height={100}
            width={100}
            timeout={4000} //4 secs
          />
        )}
        {!imageName && 'Введите текст для поиска'}
        {hits && <ImageGalleryItem hits={hits} />}
      </ul>
    );
  }
}
