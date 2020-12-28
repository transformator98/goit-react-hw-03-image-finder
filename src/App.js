import { Component } from 'react';
import './App.module.css';
import s from './App.module.css';
import ImageGallery from './component/ImageGallery';
import Searchbar from './component/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './component/Modal/';
// import imageAPI from './services/imageGallery-api';

export default class App extends Component {
  state = {
    imageName: '',
    largeImageURL: '',
    // page: 1,
    // hits: [],
  };

  handleFormSubmit = imageName => {
    // this.setState({ imageName, page: 1, hits: [] });
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
    const { largeImageURL, imageName } = this.state;

    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {largeImageURL && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={imageName} />
          </Modal>
        )}
        {}
        <ImageGallery imageName={imageName} largeURL={this.largeImgModal} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
