import React, { useState, useRef } from "react";
import Loader from "react-loader-spinner";
import constRequestData from "../data/dataForRequest.json";
import fetchImages from "../services/fetchImages";
import searchParams from "../services/searchParams";
import smoothScroll from "../services/smoothScroll";
import ImageGallery from "./imageGallery/ImageGallery";
import Modal from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";

const initData = {
  images: [],
  query: "",
  modalData: "",
  isLoading: false,
};

const App = () => {
  const [state, setState] = useState({ ...initData });
  const page = useRef(1);

  const getImages = async (query) => {
    const dataForFetch = prepareDataForRequest(query);

    try {
      loaderStatusToggler();
      const res = await fetchImages(dataForFetch);
      const prepareedImagesData = res.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
      addImagesToState(prepareedImagesData);
    } catch (error) {
      console.log(error);
    } finally {
      smoothScroll();
      loaderStatusToggler();
    }
  };

  const addImagesToState = (newImagesArr) => {
    if (page.current === 1) {
      setState((prev) => ({ ...prev, images: [...newImagesArr] }));
      return;
    }
    setState((prev) => ({
      ...prev,
      images: [...prev.images, ...newImagesArr],
    }));
  };

  const onSubmite = (query) => {
    resetPageBeforeSubmit();
    setState((prev) => ({ ...prev, query }));
    getImages(query);
  };

  const onShowMoreBtn = () => {
    const { query } = state;
    increasePageNumber();
    getImages(query);
  };

  const onImgClick = (imgForModal) => {
    setState((prev) => ({ ...prev, modalData: imgForModal }));
  };

  const onModalClosing = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      setState((prev) => ({ ...prev, modalData: "" }));
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

  const loaderStatusToggler = () => {
    setState((prev) => ({ ...prev, isLoading: !prev.isLoading }));
  };

  const { images, isLoading, modalData } = state;

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
