import React, { FC, ReactElement } from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  children: ReactElement;
  isActive: boolean;
}

export const Loading: FC<LoadingProps> = ({ children, isActive }) => {
  if (isActive) {
    return <div className={styles.Loading} />;
  }

  return children;
};
