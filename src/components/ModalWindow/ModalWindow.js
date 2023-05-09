// import styles from './ModalWindow.styled.js';
import { createPortal } from 'react-dom';
import React from 'react';
import { useEffect } from 'react';
import {Overlay,Modaldiv} from './ModalWindow.styled'

const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.hendelKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hendelKeyDown);
//   }
//   hendelKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.showModal();
//     }
//   };
//   hendelBecdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.showModal();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay  onClick={this.hendelBecdropClick}>
//         <Modaldiv >{this.props.children}</Modaldiv>
//       </Overlay>,
//       modalRoot,
//     );
//   }
// }
export default function Modal ({children, showModal}){
  useEffect(() => {
    window.addEventListener("keydown", hendelKeyDown);

    return () => {
    window.removeEventListener("keydown", hendelKeyDown);
    };
});
const  hendelKeyDown = event => {
    if (event.code === 'Escape') { showModal() }
  };
const hendelBecdropClick = e=> {
    if (e.currentTarget === e.target) {showModal() }}


    return createPortal(
      <Overlay  onClick={hendelBecdropClick}>
        <Modaldiv >{children}</Modaldiv>
      </Overlay>,
      modalRoot,
    );
  };

