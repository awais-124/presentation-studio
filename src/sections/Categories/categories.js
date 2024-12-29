import React, { useState } from 'react';
import classes from './categories.module.css';

import Modal from './Modal';

import { categoriesData } from '../../helpers/constants';

function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const openModal = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCategory(null);
  };

  return (
    <>
      <section className={classes.categories}>
        <div className={classes.container}>
          <h2 className={classes.title}>Explore Categories</h2>
          <div className={classes.cardsContainer}>
            {categoriesData.map((category, index) => (
              <div
                key={index}
                className={classes.card}
                onClick={() => openModal(category)}
              >
                <h3 className={classes.cardTitle}>{category.name}</h3>
                <p className={classes.cardDescription}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <Modal category={currentCategory} closeModal={closeModal} />
      )}
    </>
  );
}

export default Categories;
