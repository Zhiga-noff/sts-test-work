import React, { FC } from 'react';
import styles from './SwitcherMode.module.scss';
import { EViewType, TViewType } from 'shared/libs/types';
import { SwitchButton } from './switch-button/SwitchButton';

interface SwitcherModeProps {
  switchFn: () => void;
  view: TViewType;
}

export const SwitcherMode: FC<SwitcherModeProps> = ({ switchFn, view }) => {
  const checkView = view === EViewType.LIST;

  return (
    <div className={styles.SwitcherMode}>
      <div className={styles.toggle}>
        <span>View:</span>
        <SwitchButton onClick={switchFn} data-is-active={checkView}>
          List
        </SwitchButton>
        <SwitchButton onClick={switchFn} data-is-active={!checkView}>
          Grid
        </SwitchButton>
      </div>
    </div>
  );
};
