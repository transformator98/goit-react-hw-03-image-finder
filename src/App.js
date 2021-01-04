import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import s from './App.module.css';

import ImageGallery from './component/ImageGallery';
import Searchbar from './component/Searchbar';
import Loader from './component/Loader';
import Modal from './component/Modal/';
import ImageErrorView from './component/ImageGallery/ImageErrorView';
import Button from './component/Button';

import galleryAPI from './services/imageGallery-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default class App extends Component {
  state = {
    imageName: '',
    largeImageURL: '',
    images: [],
    total: null,

    //TODO START перенос из ImageGallary
    page: 1,
    error: null,
    status: Status.IDLE,
    isLoading: false,
  };

  handleFormSubmit = imageName => {
    galleryAPI.resetPage();

    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState({ largeImageURL: '' });
  };

  largeImgModal = event => {
    const imagesClick = event.target;

    if (imagesClick.nodeName !== 'IMG') {
      return;
    }

    const largeURL = imagesClick.dataset.sourse;
    this.setState(({ largeImageURL }) => ({
      largeImageURL: largeURL,
    }));
  };

  //TODO START перенос из ImageGallary

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING, images: [], page: 1 });

      this.fetchApiGallery();
    }
  }

  fetchApiGallery = () => {
    const { page } = this.state;
    const { imageName } = this.state;
    setTimeout(() => {
      galleryAPI
        .fetchGallery(imageName, page)

        .then(({ hits, total }) => {
          if (hits.length === 0) {
            toast.error('По вашему запросу нет нужного результата!');
          }
          this.setState({
            images: [...this.state.images, ...hits],
            total,
            isLoading: false,
            status: Status.RESOLVED,
          });
          this.scrollPage();
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }, 5000);
  };
  scrollPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  onLoadMore = () => {
    this.setState({ isLoading: true });
    this.fetchApiGallery();
  };
  // TODO END перенос- из ImageGallary

  render() {
    const {
      largeImageURL,
      imageName,
      images,
      error,
      status,
      total,
    } = this.state;

    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && (
          <div className={s.text}>Введите текст для поиска</div>
        )}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <ImageErrorView message={error.message} />}
        {total > 1 && status === 'resolved' && (
          <ImageGallery images={images} largeURL={this.largeImgModal} />
        )}
        {largeImageURL && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imageName} />
          </Modal>
        )}
        {this.state.isLoading && <Loader />}
        {total > images.length && !this.state.isLoading && (
          <Button onClick={this.onLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
