import React, { Component } from "react";
import Loader from "react-loader-spinner";
import constRequestData from "../data/dataForRequest.json";
import fetchImages from "../services/fetchImages";
import searchParams from "../services/searchParams";
import smoothScroll from "../services/smoothScroll";
import ImageGallery from "./imageGallery/ImageGallery";
import Modal from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";

class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    modalData: "",
    isLoading: false,
  };

  getImages = async () => {
    const { query } = this.state;
    const dataForFetch = await this.prepareDataForRequest(query);

    try {
      this.loaderStatusToggler();
      const res = await fetchImages(dataForFetch);
      const prepareedImagesData = res.hits.map(
        ({ id, webformatURL, largeImageURL, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
      this.addImagesToState(prepareedImagesData);
    } catch (error) {
      console.log(error);
    } finally {
      smoothScroll();
      this.loaderStatusToggler();
    }
  };

  addImagesToState = (newImagesArr) => {
    if (this.state.page === 1) {
      this.setState({ images: [...newImagesArr] });
      return;
    }
    this.setState((prev) => ({ images: [...prev.images, ...newImagesArr] }));
  };

  onSubmite = async (query) => {
    await this.resetPageBeforeSubmit();
    this.setState({ query });
    this.getImages();
  };

  onShowMoreBtn = async () => {
    const { query } = this.state;
    await this.increasePageNumber();
    this.getImages(query);
  };

  onImgClick = (imgForModal) => {
    this.setState({ modalData: imgForModal });
  };

  onModalClosing = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.setState({ modalData: "" });
    }
  };

  resetPageBeforeSubmit = async () => {
    this.setState({ page: 1 });
  };

  prepareDataForRequest = async (query) => {
    const { page } = this.state;
    const dataForRequest = { query, page, ...constRequestData };
    return searchParams(dataForRequest);
  };

  increasePageNumber = async () => {
    this.setState({ page: this.state.page + 1 });
  };

  loaderStatusToggler = () => {
    const loaderStatus = this.state.isLoading;
    this.setState({ isLoading: !loaderStatus });
  };

  render() {
    const { images, isLoading, modalData } = this.state;
    return (
      <>
        <Searchbar onSubmite={this.onSubmite} />
        {isLoading && !images.length && (
          <Loader
            type="ThreeDots"
            color="#1539ad"
            height={100}
            width={100}
            timeout={5000}
          />
        )}
        <ImageGallery
          images={images}
          onShowMoreBtn={this.onShowMoreBtn}
          onImgClick={this.onImgClick}
          isLoading={isLoading}
        />
        {modalData && (
          <Modal imageURL={modalData} onModalClosing={this.onModalClosing} />
        )}
      </>
    );
  }
}

export default App;
