import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CardBody,
  Card,
  Row,
  Col,
  Container,
  CardImg,
  CardTitle,
  Button,
} from 'reactstrap';

import Page from 'components/Page';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4321/products/getall')
      .then(res => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <Page title="Products" breadcrumbs={[{ name: 'Products', active: true }]}>
      <Container>
        <Row>
          {products.map(product => {
            return (
              <Col lg={6}>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={'http://localhost:4321/' + product.Path}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{product.Title}</CardTitle>

                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Page>
  );
};

export default ProductPage;
