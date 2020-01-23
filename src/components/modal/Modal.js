import React, { Component } from "react";
import styles from "./modal.module.css";

export default class Modal extends Component {
  handleKeyPress = event => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (Number(event.target.id) !== Number(this.props.object.id)) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyPress);
  }

  render() {
    const { object, id } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img
            src={object.largeImageURL}
            alt=""
            id={id}
            width="800"
            height="600"
          />
        </div>
      </div>
    );
  }
}
