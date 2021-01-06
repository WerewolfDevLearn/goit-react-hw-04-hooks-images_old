import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li key={image.id} className="ImageGalleryItem">
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            alt={image.tags}
            largeImageURL={image.largeImageURL}
            id={image.id}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
