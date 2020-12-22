import { Component } from 'react';
import './App.module.css';
import s from './App.module.css';
import ImageGallery from './component/ImageGallery';
import Searchbar from './component/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import imageAPI from './services/imageGallery-api';

export default class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
