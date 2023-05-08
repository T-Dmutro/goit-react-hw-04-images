import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Seachbar from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import PixabayApi from './Pixabay/PixabayAPI';
import Button from './Button/Button';
import Modal from './ModalWindow/ModalWindow';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';
import {Container} from './Loader/App.styled.js';
import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    artName: '',
    pictures: [],
    page: 1,
    largeImage: '',
    imgTags: '',
    error: '',
    showModal: false,
    isLoading: false,
    totalLengh: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const newName = prevState.artName;
    const oldName = this.state.artName;

    const oldPage = this.state.page;
    const newPage = prevState.page;

    if (newName !== oldName) {
      this.fetchPictures();
    }
    if (oldPage !== 2 && newPage !== oldPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  bigImage = (largeImage = '') => {
    this.setState({ largeImage });
    console.log(largeImage)
    this.toggleModal();
  };
  fetchPictures = () => {
    const { page, artName } = this.state;
    const options = {
      page,
      artName, };
    this.setState({ isLoading: true });

    PixabayApi(options)
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
          totalLengh: pictures.length,
        }));
      })
      .catch(error => this.setState({ error: toast('Picture not found') }))
      .finally(() => this.setState({ isLoading: false }));
  };
  handleFormSubmit = artName => {
    this.setState({ artName: artName, page: 1, pictures: [], error: null });
  };
  render() {
    const {
      pictures,
      isLoading,
      error,
      showModal,
      largeImage,
      imgTags,
      totalLengh,
    } = this.state;

// console.log(this.bigImag())
    const btnEnable =
      pictures.length > 0 && !isLoading && error === null && totalLengh > 0;

    return (
      <Container>
          <Seachbar  onSubmit={this.handleFormSubmit} />
          {/* <PixabayApi /> */}
          {error && <h1>{error}</h1>}
          <ImageGallery pictures={pictures} bigImage={this.bigImage} />
            {isLoading && <Loader />}
            {btnEnable && <Button onClick={this.fetchPictures} />}
            {showModal && (
              <Modal showModal={this.bigImage}>
                  <img src={largeImage} alt={imgTags} />
              </Modal>
              )}
            <ToastContainer position="top-center" autoClose={3000} />
      </Container>
    );
  }
}
App.propTypes = {
  pictures: PropTypes.array,
  page: PropTypes.number,
  query: PropTypes.string,
  largeImage: PropTypes.string,
  imgTags: PropTypes.string,
  error: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
};
