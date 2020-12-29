import { Component } from 'react';
import Button from '../Button';
import ImageErrorView from './ImageErrorView';
import Loader from '../Loader';
// import { toast } from 'react-toastify';
import galleryAPI from '../../services/imageGallery-api';
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
    page: 1,
    total: null,
    hits: [],
    error: null,
    status: Status.IDLE,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    // this.scrollPage();
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
    setTimeout(() => {
      galleryAPI
        .fetchGallery(imageName, page)
        .then(({ hits, total }) => {
          this.setState({
            hits: [...this.state.hits, ...hits],
            total,
            isLoading: false,
            status: Status.RESOLVED,
          });
          this.scrollPage();
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }, 2000);
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

          {/* {(total > 11 && <Button onClick={this.onLoadMore} />)} */}

          {this.state.isLoading && <Loader />}
          {!this.state.isLoading && <Button onClick={this.onLoadMore} />}
        </>
      );
    }
  }
}
