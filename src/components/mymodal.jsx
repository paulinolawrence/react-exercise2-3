import React, {useContext} from 'react';
import { ShopContext } from "../context/shop-context";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CheckoutItem } from '../pages/checkout-item/checkout-item';
import { useNavigate } from "react-router-dom";

export const MyModal = (props) => {
  const { cartItems, getTotalCartAmount, checkout, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount().toFixed(2);
  const navigate = useNavigate();
  let totalItems = 0;
  for (const item in cartItems){
    if (cartItems[item] > 0){
      totalItems += cartItems[item];
    }
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Item Summary:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CheckoutItem data={product} key={product.id}/>
            }
          })}
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Col xs={6} md={8}>
              <b>Total Items: {totalItems}</b><br/>
              <b>Total Amount: ${totalAmount}</b>
            </Col>
            <Col xs={6} md={4}>
              <Button variant='success' onClick={() => {checkout();navigate("/")}}>Proced To Check Out</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}
