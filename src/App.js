import { Component } from 'react';
import './App.module.css';
import s from './App.module.css';
import ImageGallery from './component/ImageGallery';
// import imageAPI from './services/imageGallery-api';
// import Loader from 'react-loader-spinner';

export default class App extends Component {
  state = {
    hits: null,
  };

  componentDidMount() {
    // imageAPI.fetchGallery();
    fetch(
      `https://pixabay.com/api/?q=dog&page=1&key=18773643-f1542c573d467a3c4fb890edb&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(({ hits }) => this.setState({ hits }));
  }

  // this.setState({ hits })

  render() {
    return (
      <div className={s.app}>
        {this.state.hits && (
          // <div>
          //   {/* <img src={this.state.image} alt="" /> */}
          //   {/* <img
          //     src={this.state.image.largeImageURL}
          //     alt={this.state.image.id}
          //   /> */}
          //   <p>{this.state.hits}</p>
          // </div>

          <ImageGallery hits={this.state.hits} />
        )}
        {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      </div>
    );
  }
}
