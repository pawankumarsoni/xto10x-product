import React, { useEffect, useState, useCallback, useMemo } from "react";

import ProductFilter from "../../Components/Filter/ProductFilter";
import Card from "../../Components/SingleProduct/Card";

function List() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterKeys, setFilteredKeys] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((result) => {
        return result.json();
      })
      .catch((e) => alert(e))
      .then((data) => {
        setProducts(data?.products);
        setFilteredProducts(data?.products);
      })
      .catch((e) => alert(e));
  }, []);

  useEffect(() => {
    const allProducts = [...products];
    if (filterKeys.length === 0) {
      setFilteredProducts(products);
    } else {
      const filteredList = allProducts.filter((item) => {
        return filterKeys.includes(item.category);
      });
      setFilteredProducts(filteredList);
    }
  }, [filterKeys]);

  const handleFilter = useCallback(({ type, value }) => {
    if (type === "category") {
      if (document.getElementById(value).checked) {
        setFilteredKeys((filterKeys) => [...filterKeys, value]);
      } else {
        setFilteredKeys((filterKeys) =>
          filterKeys.filter((item) => item !== value)
        );
      }
    }
  }, []);

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  return (
    <>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-lg-3">
            <ProductFilter {...{ categories, handleFilter }} />
          </div>
          <div className="col-lg-9">
            <div className="row g-4">
              {filteredProducts.map((product) => {
                return <Card key={product.productId} {...{ product }} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
