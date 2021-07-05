import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err", err);
    })
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [])
  console.log("products" ,products);
  return (
   <div style={{marginTop: 100}}>
      <ProductComponent />
   </div>
  );
};

export default ProductListing;
