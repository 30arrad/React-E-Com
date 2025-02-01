import { useState } from "react";
import { Table, Container, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Watchlist = () => {
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
        
        
          const removeItem = (id) => {
            setCart(cart.filter(item => item.id !== id));
          };
        
        
          return (
            <Container className="mt-4 p-4 shadow-lg bg-white rounded">
              <h4 className="text-center mb-4">Watchlist</h4>
              <Table responsive striped bordered hover className="text-center">
                <thead className="bg-light">
                  <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
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
        
            </Container>
          );
        };
export default Watchlist;