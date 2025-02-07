import { FC, useState } from "react";
import { EViewType, TViewType } from "shared/libs/types";
import styles from "./Products.module.scss";
import {
  HeaderProducts,
  ProductsList,
  SwitcherMode,
} from "components/products/ui";

export const Products: FC = () => {
  const [viewType, setViewType] = useState<TViewType>(EViewType.LIST);

  const switchView = () => {
    switch (viewType) {
      case EViewType.GRID: {
        setViewType(EViewType.LIST);
        break;
      }
      case EViewType.LIST: {
        setViewType(EViewType.GRID);
        break;
      }
    }
  };

  return (
    <main className={styles.products}>
      <HeaderProducts />
      <SwitcherMode switchFn={switchView} view={viewType} />
      <ProductsList viewType={viewType} />
    </main>
  );
};
