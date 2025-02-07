import React, { FC } from 'react';
import styles from './HeaderProducts.module.scss';

interface HeaderProductsProps {
  title?: string;
}

export const HeaderProducts: FC<HeaderProductsProps> = ({ title = 'Products' }) => {
  return (
    <div className={styles.HeaderProducts}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
