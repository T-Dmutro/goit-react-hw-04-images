import PropTypes from 'prop-types';
import {ImageGalleryItems,ImageGalleryItemImage} from './ImageGalleryItem.styled.js'
export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <ImageGalleryItems >
      <ImageGalleryItemImage
        src={image}
        alt=""
        onClick={onClick}
      />
    </ImageGalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  bigImage: PropTypes.func,
};
