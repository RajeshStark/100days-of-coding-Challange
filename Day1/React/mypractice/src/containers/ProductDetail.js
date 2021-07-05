import React, { useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { selectedProducts, removeSelectedProduct } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'

export default function ProductDetails() {
  const product = useSelector((state) => state.product)
  const { productId } = useParams()
  const dispatch = useDispatch();


  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err)
      })
    dispatch(selectedProducts(response.data))
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])
  const { id, title, image, price, category } = product;
  return (
    <div style={{ margin: 10, borderColor: "black", borderWidth: 1 }}>
      {Object.keys(product).length === 0 ? (
        <center>
          <h1 style={{marginTop: 100}}>Loading.....</h1>
        </center>
      ): (
        <Card style={{margin: 100}}>
        <Card.Img style={{ width: '20%' }} variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title style={{fontSize: 24, fontWeight: 'bold'}}>{title}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
          <Card.Text>
            ${price}
          </Card.Text>
        </Card.Body>
      </Card>
      )}
    </div>
  );
}
