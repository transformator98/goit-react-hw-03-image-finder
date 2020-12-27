import { Component } from 'react';
import Button from '../Button';
import ImageErrorView from './ImageErrorView';
import ImagePendingView from '../Loader/';
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
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName || prevProps.page !== this.props.page) {
      this.setState({ status: Status.PENDING });
      console.log('prevState', prevState.hits);
      console.log('hits', this.state.hits);
      // setTimeout(() => {
      //   galleryAPI
      //     .fetchGallery(nextName)
      //     .then(({ hits }) => this.setState({ hits, status: Status.RESOLVED }))
      //     .catch(error => this.setState({ error, status: Status.REJECTED }));
      // }, 5000);
      galleryAPI
        .fetchGallery(nextName)
        .then(({ hits, total, page }) =>
          this.setState({
            hits: [...prevState.hits, ...hits],
            total,
            status: Status.RESOLVED,
          }),
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  onLoadMore = () => {
    const { page, imageName } = this.props;
    galleryAPI.fetchGallery(imageName, page).then(({ page }) => {
      this.setState(({ page }) => ({
        page: page + 1,
      }));
    });
  };

  render() {
    const { hits, total, error, status } = this.state;
    const { largeURL } = this.props;

    if (status === 'idle') {
      return <div className={s.text}>Введите текст для поиска</div>;
    }

    if (status === 'pending') {
      return <ImagePendingView />;
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

          {total > 11 && <Button onClick={this.onLoadMore} />}
        </>
      );
    }
  }
}
