import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ModalImage from './ModalImage/ModalImage';
import imageApi from '../service/api';

function App() {
  const [images, setImages] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  function fetchImage() {
    setLoading(true);
    imageApi(keyword, page)
      .then(data => {
        setImages(images => [...images, ...data.hits]);
        setPage(page => page + 1);
        isLastPage(data);
        console.log(data);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (!keyword) {
      return;
    }

    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useEffect(() => {
    if (page > 2) {
      scrollDown();
    }
  }, [page]);

  const onSubmitForm = query => {
    setKeyword(query);
    setPage(1);
    setImages([]);
    setLoading(false);
  };

  const hideLargeImage = () => {
    setLargeImageURL(null);
  };

  const isLastPage = data => {
    const perPage = 12;
    const dif = data.totalHits - perPage * page;

    if (dif <= 0) {
      setLastPage(true);
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Searchbar onSubmitForm={onSubmitForm} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setLargeImageURL} />
      )}
      {largeImageURL && (
        <Modal onCloseModal={hideLargeImage}>
          <ModalImage largeImage={largeImageURL} />
        </Modal>
      )}
      {images.length > 0 && !lastPage && !loading && (
        <Button text="Load more" buttonAction={fetchImage} />
      )}
      {loading && <Loader />}
      {error && <p>ERROR</p>}
    </>
  );
}

export default App;
