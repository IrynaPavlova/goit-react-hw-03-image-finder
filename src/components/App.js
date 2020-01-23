import React, { Component } from "react";
import styles from "./app.module.css";
import * as imageApi from "../services/image-api";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SearchBar from "./searchbar/SearchBar";
import Button from "./button/Button";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    isModalOpen: false,
    value: "",
    id: null,
    object: {}
  };

  fetchImages = value => {
    this.setState({ isLoading: true });
    imageApi
      .fetchImages(value, this.state.page)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1
        }));
      })
      .catch(e => console.log(e))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      if (prevState.value !== this.state.value) {
        this.setState({ images: [], page: 1 });
      }
    }
    if (this.state.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchImages(this.state.value);
  };

  openModal = e => {
    const [object] = this.state.images.filter(
      item => item.id === Number(e.target.id)
    );
    this.setState({ isModalOpen: true, id: e.target.id, object: object });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  onLoad = () => {
    this.fetchImages(this.state.value, this.state.page);
  };

  render() {
    const { images, isLoading, isModalOpen, id, value, object } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar
          value={value}
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={3000}
          />
        ) : (
          <ImageGallery
            object={object}
            images={images}
            onOpen={this.openModal}
            onClose={this.closeModal}
            isModalOpen={isModalOpen}
            id={id}
          />
        )}
        {images.length > 0 && <Button onLoad={this.onLoad} />}
      </div>
    );
  }
}
