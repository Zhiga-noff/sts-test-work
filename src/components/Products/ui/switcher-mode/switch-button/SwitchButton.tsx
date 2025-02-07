import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './SwitchButton.module.scss';
import { classNames } from 'shared/libs/utils';

interface SwitchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SwitchButton: FC<SwitchButtonProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <button className={classNames(styles.SwitchButton, {}, [className])} {...props}>
      {children}
    </button>
  );
};
