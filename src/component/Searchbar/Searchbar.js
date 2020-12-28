import { Component } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    imageName: '',
    page: 1,
  };
  handleNameChange = event => {
    this.setState({ imageName: event.target.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.error('Введите текст для поиска');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.searchForm}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            value={this.state.imageName}
            onChange={this.handleNameChange}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
