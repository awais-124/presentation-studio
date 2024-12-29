import React from 'react';
import classes from './Modal.module.css';
import { slidesLinks } from '../../helpers/constants';


function Modal({ category, closeModal }) {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className={classes.modalOverlay} onClick={closeModal}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.modalTitle}>{category.name}</h2>
        <p className={classes.modalDescription}>
          Slides for {category.name}. Explore now!
        </p>
        <div className={classes.slidesContainer}>
          {slidesLinks[category.name]?.map((item) => (
            <div className={classes.slideCard} key={item.id}>
              <div
                className={classes.thumbnail}
                style={{ backgroundColor: getRandomColor() }}
                onClick={() => window.open(item.link, '_blank')}
              >
                {item.title}
              </div>
              <p className={classes.title}>{item.title}</p>
              <a
                href={item.download_link}
                className={classes.downloadButton}
                download
              >
                Download
              </a>
            </div>
          ))}
        </div>
        <button className={classes.closeButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
