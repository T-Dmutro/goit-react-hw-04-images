// import styles from './ModalWindow.styled.js';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import {Overlay,Modaldiv} from './ModalWindow.styled'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }
  hendelKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.showModal();
    }
  };
  hendelBecdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.showModal();
    }
  };

  render() {
    return createPortal(
      <Overlay  onClick={this.hendelBecdropClick}>
        <Modaldiv >{this.props.children}</Modaldiv>
      </Overlay>,
      modalRoot,
    );
  }
}
