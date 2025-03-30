import "./App.css";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import LoadMoreBtn from "./LoadMoreBtn";
import ErrorMessage from "./ErrorMessage";
import ImageGallery from "./ImageGallery";
import { useState, useEffect } from "react";
import { fetchPhotosWithTopic } from "../search-api";
import ImageModal from "./ImageModal";
function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (topic) => {
    setPhotos([]);

    setSearch(topic);
    setPage(1);
  };

  useEffect(() => {
    if (search === "") {
      return;
    }

    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchPhotosWithTopic(search, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, search]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {error && <ErrorMessage />}
      {photos.length > 0 && <ImageGallery items={photos} openModal={openModal}/>}
      {loading && <Loader />}
      {photos.length > 0 && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} Page={page} />
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
