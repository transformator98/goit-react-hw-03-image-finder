import { Component } from 'react';
import './App.module.css';
import s from './App.module.css';
import ImageGallery from './component/ImageGallery';
import Searchbar from './component/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './component/Modal/';
import galleryAPI from './services/imageGallery-api';

export default class App extends Component {
  state = {
    imageName: '',
    largeImageURL: '',
    hits: [],
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

  render() {
    const { largeImageURL, imageName, hits } = this.state;
    console.log('hitsAPI', hits);
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          imageName={imageName}
          largeURL={this.largeImgModal}
          images={hits}
        />
        {largeImageURL && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imageName} />
          </Modal>
        )}
        {}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
