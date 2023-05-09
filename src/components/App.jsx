// import React, { Component, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Seachbar from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import PixabayApi from './Pixabay/PixabayAPI';
import Button from './Button/Button';
import Modal from './ModalWindow/ModalWindow';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';
import { Container } from './Loader/App.styled.js';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


export default function App() {
  const [artName, setArtName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [imgTags, setImgTags] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalLengh, setTotalLengh] = useState(0);
  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [artName, page]);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const bigImage = (largeImage = '') => {
    if (largeImage) {
      setLargeImage(largeImage);
      // console.log(largeImage)
    }
    toggleModal();
  };
  useEffect(() => {
    if (!artName) {
      return;
    };
    const feachPictures = () => {
      setIsLoading(true);
      PixabayApi({artName: artName, page})
        .then(data => {
            setPictures(prevPictures => [...prevPictures, ...data])
            // setPage(prevState => prevState.page + 1);
            setTotalLengh(data.length);
            if (page > 1) {
              window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',})}
        })
        .catch(error => {
          setError(toast('Picture not found'(error.message))
          )})
        .finally(() => setIsLoading(false));
    };
    feachPictures();
  }, [artName, page])
 
  const btnEnable =
    pictures.length > 0 && !isLoading && error === null && totalLengh > 0;

  const handleFormSubmit = name => {
    setArtName(name);
    setPage(1);
    setPictures([]);
    setError(null);
    setImgTags('');
    setLargeImage('');
    setTotalLengh(0);
    setIsLoading(false);
    };
    const loadMoreBtnClick = () => {
      setPage(prevPage => prevPage + 1);
    }
  // console.log(pictures);

  return (
    <Container>
      <Seachbar onSubmit={handleFormSubmit} />
      {/* <PixabayApi /> */}
      {error && <h1>{error}</h1>}
      <ImageGallery pictures={pictures} bigImage={bigImage} />
      {isLoading && <Loader />}
      {btnEnable && <Button onClick={loadMoreBtnClick} />}
      {showModal && (
        <Modal showModal={bigImage}>
          <img src={largeImage} alt={imgTags} />
        </Modal>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
    </Container>
  );
}

App.propTypes = {
  // pictures: PropTypes.array,
  page: PropTypes.number,
  query: PropTypes.string,
  largeImage: PropTypes.string,
  imgTags: PropTypes.string,
  error: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
};
