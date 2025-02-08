import React, { FC, useEffect, useState } from "react";
import styles from "./ProductsList.module.scss";

import { ProductCard } from "./product-card/ProductCard";
import { Product, ProductData, TViewType } from "shared/libs/types";
import { GET_PRODUCTS } from "shared/libs/constants/api.constant";
import { Loading } from "shared/ui/";

interface ProductsListProps {
  viewType: TViewType;
}

export const ProductsList: FC<ProductsListProps> = ({ viewType }) => {
  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await fetch(GET_PRODUCTS);
      const products = await res.json();
      setData(products);
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Loading isActive={loading}>
      <ul className={styles.items} data-view-type={viewType}>
        <>
          {data?.products?.length ? (
            data.products.map((item: Product) => (
              <ProductCard data={item} key={item.id} />
            ))
          ) : (
            <li>Товаров нет</li>
          )}
        </>
      </ul>
    </Loading>
  );
};
