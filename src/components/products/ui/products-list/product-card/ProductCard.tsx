import React, { FC, useState } from 'react';
import styles from './ProductCard.module.scss';
import { Product } from 'shared/libs/types';
import { ReactComponent as Favourite } from 'assets/img/favourite.svg';

interface ProductCardProps {
  data: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const { id, title, price, thumbnail } = data;

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const addToFavourite = () => {
    setIsFavourite(true);
  };

  const removeToFavourite = () => {
    setIsFavourite(false);
  };

  return (
    <li className={styles.ProductCard} key={id}>
      <div className={styles.ProductCard_Image}>
        <img src={thumbnail} alt={title} />
        <Favourite className={styles.ProductCard_Fav} data-is-active={isFavourite} />
      </div>

      <div className="">
        <div className={styles.ProductCard_Title}>{title}</div>
        <div className={styles.ProductCard_Price}>{price} $</div>
        {!isFavourite ? (
          <button className={styles.ProductCard_Button} onClick={addToFavourite}>
            Добавить в избарнное
          </button>
        ) : (
          <button className={styles.ProductCard_Button} onClick={removeToFavourite}>
            Убрать из избарнного
          </button>
        )}
      </div>
    </li>
  );
};
