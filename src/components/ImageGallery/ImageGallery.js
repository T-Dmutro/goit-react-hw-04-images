import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem.js';
import PropTypes from 'prop-types';
import {ImageGallerys} from './ImageGallery.styled.js'

const ImageGallery = ({ pictures, bigImage }) => {
  return (
    <ImageGallerys >
      {pictures.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => bigImage(largeImageURL);
// console.log(largeImageURL)
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            onClick={handleItemClick}
          />
        );
      })}
    </ImageGallerys>
  );
};
ImageGallery.propTypes = {
  pictures: PropTypes.array,
  bigImage: PropTypes.func,
};

export default ImageGallery;
