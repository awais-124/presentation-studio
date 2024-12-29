import React from 'react';
import classes from './Modal.module.css';

const pptLinks = [
  'https://docs.google.com/presentation/d/1QhjkDJ94TBjQhB1vS5Gyr5uE9RUSWWKE/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1mvHmRB8SKR41PsbcRrAQoxr5HT9oIQMl/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1KFf6PawzoQj-gCOALKZzb2RiQX_kwUoz/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1oqP1WLKYZWreEkihOPr5bbDlbwrpGt2_/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1QoLpPxzr0hGtxwHuYeRccwA_dmTejGoM/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1iUNP1zvgjfXfpDU2aWbeWNEufijM_MO9/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1gn5oKXlEuddjX5qiQibvR0WsMv1mN-F9/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/18mIszmpDyJ8VvaXPXY7nIAY7DbOMsLQw/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1Rd-Ls1VGFGtWRlaHTVlNNrc7MVpLZUkA/edit?usp=drive_link',
  'https://docs.google.com/presentation/d/1HSyZF1QUAFUiM5EQDK7Te0ZoIJiFpefw/edit?usp=drive_link',
];

const downloadLinks = [
  'https://drive.google.com/uc?export=download&id=1QhjkDJ94TBjQhB1vS5Gyr5uE9RUSWWKE',
  'https://drive.google.com/uc?export=download&id=1mvHmRB8SKR41PsbcRrAQoxr5HT9oIQMl',
  'https://drive.google.com/uc?export=download&id=1KFf6PawzoQj-gCOALKZzb2RiQX_kwUoz',
  'https://drive.google.com/uc?export=download&id=1oqP1WLKYZWreEkihOPr5bbDlbwrpGt2_',
  'https://drive.google.com/uc?export=download&id=1QoLpPxzr0hGtxwHuYeRccwA_dmTejGoM',
  'https://drive.google.com/uc?export=download&id=1iUNP1zvgjfXfpDU2aWbeWNEufijM_MO9',
  'https://drive.google.com/uc?export=download&id=1gn5oKXlEuddjX5qiQibvR0WsMv1mN-F9',
  'https://drive.google.com/uc?export=download&id=18mIszmpDyJ8VvaXPXY7nIAY7DbOMsLQw',
  'https://drive.google.com/uc?export=download&id=1Rd-Ls1VGFGtWRlaHTVlNNrc7MVpLZUkA',
  'https://drive.google.com/uc?export=download&id=1HSyZF1QUAFUiM5EQDK7Te0ZoIJiFpefw',
];

function Modal({ category, closeModal }) {
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
          {pptLinks.map((link, index) => (
            <div className={classes.slideCard} key={index}>
              <div
                className={classes.thumbnail}
                onClick={() => window.open(link, '_blank')}
              >
                Slide {index + 1}
              </div>
              <p className={classes.title}>Title {index + 1}</p>
              <a
                href={downloadLinks[index]}
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