import React, {useContext} from 'react'
import { ShopContext } from "../../context/shop-context";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './checkout-item.css';
import { Container } from 'react-bootstrap';

export const CheckoutItem = (props) => {
    const { id, productName, price, productImg } = props.data;
    const { cartItems, } = useContext(ShopContext);
  return (
    <div className='checkOutItem'>
        <Container>
            <Row>
                <Col xs={4} md={3}>
                    <img src={productImg} alt="Not available"/>   
                </Col>
    
                <Col xs={4} md={4}>
                    <p>
                        <b>{productName}</b>
                    </p>
                </Col>
                <Col xs={2} md={3}>
                    <p> Price: ${price}</p>
                </Col>
                <Col xs={2} md={2}>
                    <p> Qty: {cartItems[id]}</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
