import { Component } from 'react';
import Button from '../Button';
import ImageErrorView from './ImageErrorView';
import Loader from '../Loader';
import { toast } from 'react-toastify';
import galleryAPI from '../../services/imageGallery-api';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    page: 1,
    hits: [],

    error: null,
    status: Status.IDLE,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING, hits: [], page: 1 });

      this.fetchApiGallery();
    }
  }

  scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchApiGallery = () => {
    const { page } = this.state;
    const { imageName } = this.props;
    // setTimeout(() => {
    galleryAPI
      .fetchGallery(imageName, page)

      .then(({ hits }) => {
        if (hits.length === 0) {
          toast.error('По вашему запросу нет нужного результата!');
        }

        this.setState({
          hits: [...this.state.hits, ...hits],
          isLoading: false,
          status: Status.RESOLVED,
        });
        this.scrollPage();
        this.props.images(hits);
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
    // }, 2000);
  };

  onLoadMore = () => {
    this.setState({ isLoading: true });
    this.fetchApiGallery();
  };

  render() {
    const { hits, error, status } = this.state;
    const { largeURL } = this.props;

    if (status === 'idle') {
      return <div className={s.text}>Введите текст для поиска</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          {hits.length > 1 && (
            <ul className={s.imageGallery}>
              {hits.map((hit, index) => (
                <ImageGalleryItem
                  key={index}
                  webformatURL={hit.webformatURL}
                  largeImageURL={hit.largeImageURL}
                  tags={hit.tags}
                  imageClick={largeURL}
                />
              ))}
            </ul>
          )}

          {this.state.isLoading && <Loader />}
          {(hits.length > 11) & !this.state.isLoading && (
            <Button onClick={this.onLoadMore} />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  page: PropTypes.number,
  hits: PropTypes.object,
  largeImageURL: PropTypes.string,
};
