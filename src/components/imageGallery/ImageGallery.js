import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import styles from "./imageGallery.module.css";
import Modal from "../modal/Modal";

const ImageGallery = ({ images, onOpen, onClose, isModalOpen, id, object }) => (
  <ul className={styles.ImageGallery}>
    {isModalOpen && <Modal id={id} object={object} onClose={onClose} />}
    {images.map(image => (
      <ImageGalleryItem
        id={image.id}
        onOpen={onOpen}
        src={image.webformatURL}
        key={image.id}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  object: PropTypes.object
};

export default ImageGallery;
