import React, { useState, useEffect } from "react";
import { Header } from '@components/Header';
import { ProductList } from "@components/ProductList";
import { FilterOptions } from "@components/FilterOptions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@redux/thunks/data.thunks";
import {Loader} from '../../components/Loader';
import './Products.css';

const Products = ({category}) => {
  const [filters, setFilters] = useState({ size: "", price: "" });
  const { items,loading } = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await dispatch(fetchData(category));
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, [dispatch,category]);

  const filteredProducts = items.filter((product) => (
    (!filters.size || product.size === filters.size) &&
    (!filters.price ||
      (product.new_price >= parseInt(filters.price.split("-")[0], 10) &&
       product.new_price <= parseInt(filters.price.split("-")[1], 10)))
  ));
console.log(loading);
  return (
    <div>
      <Header />
      {loading && <Loader/>}
      <div className="products" style={{ display: "flex" }}>
        <FilterOptions onFilterChange={handleFilterChange} />
        <ProductList products={filteredProducts} />
      </div>
      
    </div>
  );
};

export default Products;
