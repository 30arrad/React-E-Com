import { useState } from "react";
import { Table, Button, Form, Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
  const [cart, setCart] = useState([
          {
            id: 1,
            item_Name: "Premium Heavy Rib Fabric Polo - Arctic",
            item_img: "Images/Hoodies/H-1.jpg",
            item_Old_Price: 1700,
            item_Price: 1390,
            size: "XL",
            item_item_Category : `HOODIES` ,
            quantity: 1,
          },
          {
            id: 2,
            item_Name: "Mens Premium T-Shirt - Hope",
            item_img: "Images/Jackets/J-1.jpg",
            item_Old_Price: 710,
            item_Price: 630,
            size: "M",
            item_item_Category : `HOODIES` ,
            quantity: 1,
          },
        ]);
      
        const updateQuantity = (id, qty) => {
          setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
          ));
        };
      
        const removeItem = (id) => {
          setCart(cart.filter(item => item.id !== id));
        };
      
        const totalAmount = cart.reduce((sum, item) => sum + item.item_Price * item.quantity, 0);
      
        return (
          <Container className="mt-4 p-4 shadow-lg bg-white rounded">
            <h4 className="text-center mb-4">Shopping Cart</h4>
            <Table responsive striped bordered hover className="text-center">
              <thead className="bg-light">
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center">
                      <Image src={item.item_img} alt="Product Image" width={50} height={50} rounded />
                      <span className="ms-3">{item.item_Name}</span>
                    </td>
                    <td>
                      {item.item_Old_Price && <del className="text-muted">৳{item.item_Old_Price}</del>}{" "}
                      <span className="fw-bold text-primary">৳{item.item_Price}</span>
                    </td>
                    <td>{item.size}</td>
                    <td>
                      <Form.Control 
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        style={{ width: "70px", textAlign: "center", margin: "auto" }}
                      />
                    </td>
                    <td className="fw-bold">৳{item.item_Price * item.quantity}</td>
                    <td >
                        <div className="BAGBUTTON">
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
                        <button className="btn btn-primary">Add to Card</button>
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
      
            {/* Total Amount */}
            <Row className="mt-3">
              <Col className="text-end">
                <h5>Total Amount: <span className="text-success fw-bold">৳{totalAmount}</span></h5>
              </Col>
            </Row>
      
            {/* Buttons */}
            <Row className="mt-3">
              <Col className="BAGBUTTON">
                <Button variant="success" className="me-3">Place Order</Button>
                <Button variant="warning" href="">Continue Shopping</Button>
              </Col>
            </Row>
          </Container>
  );
};

export default Card;
