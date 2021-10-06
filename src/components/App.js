import React, { useState, useRef } from "react";
import Loader from "react-loader-spinner";
import initialData from "../data/initialData.json";
import constRequestData from "../data/dataForRequest.json";
import fetchImages from "../services/fetchImages";
import searchParams from "../services/searchParams";
import smoothScroll from "../services/smoothScroll";
import ImageGallery from "./imageGallery/ImageGallery";
import Modal from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";

const { imagesInit, queryInit, modalDataInit, isLoadingInit, pageInit } =
  initialData;

const App = () => {
  const [images, setImages] = useState(imagesInit);
  const [query, setQuery] = useState(queryInit);
  const [modalData, setModalData] = useState(modalDataInit);
  const [isLoading, setIsLoading] = useState(isLoadingInit);
  const page = useRef(pageInit);

  const getImages = async (query) => {
    const dataForFetch = prepareDataForRequest(query);

    try {
      loaderToggler();
      const res = await fetchImages(dataForFetch);
      const preparedImagesData = res.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
      addImagesToState(preparedImagesData);
    } catch (error) {
      console.log(error);
    } finally {
      smoothScroll();
      loaderToggler();
    }
  };

  const addImagesToState = (newImagesArr) => {
    if (page.current === 1) {
      setImages([...newImagesArr]);
      return;
    }
    setImages((prev) => [...prev, ...newImagesArr]);
  };

  const onSubmite = (query) => {
    resetPageBeforeSubmit();
    setQuery(query);
    getImages(query);
  };

  const onShowMoreBtn = () => {
    increasePageNumber();
    getImages(query);
  };

  const onImgClick = (imgForModal) => {
    setModalData(imgForModal);
  };

  const onModalClosing = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      setModalData(modalDataInit);
    }
  };

  const resetPageBeforeSubmit = () => {
    page.current = 1;
  };

  const prepareDataForRequest = (query) => {
    const curPage = page.current;
    const dataForRequest = { query, curPage, ...constRequestData };
    return searchParams(dataForRequest);
  };

  const increasePageNumber = () => {
    page.current += 1;
  };

  const loaderToggler = () => setIsLoading((prev) => !prev);

  return (
    <>
      <Searchbar onSubmite={onSubmite} />
      {isLoading && !images.length && (
        <Loader
          type="ThreeDots"
          color="#1539ad"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      <ImageGallery
        images={images}
        onShowMoreBtn={onShowMoreBtn}
        onImgClick={onImgClick}
        isLoading={isLoading}
      />
      {modalData && (
        <Modal imageURL={modalData} onModalClosing={onModalClosing} />
      )}
    </>
  );
};

export default App;
