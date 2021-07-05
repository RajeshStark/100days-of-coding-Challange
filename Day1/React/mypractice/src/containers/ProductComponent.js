import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { useHistory } from "react-router-dom";


export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const history = useHistory();

  const routeChange = (id) =>{ 
    let path = `/product/${id}`; 
    history.push(path);
  }

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div style={{ width: '120px', margin: 10, borderColor: "black", borderWidth: 1 }} key={id} onClick={() => routeChange(id)}>
        <Card>
          <Card.Img style={{ width: '100px' }} variant="top" src={image} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {category}
            </Card.Text>
            <Card.Text>
              ${price}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  })
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
      {renderList}
    </div>
  );
}
