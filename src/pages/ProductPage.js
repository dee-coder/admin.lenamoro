import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

import Page from 'components/Page';
const ProductPage = () => {
  const styles = {
    container: {
      padding: '20px',
    },
    titleInput: {
      marginTop: '10px',
      marginBottom: '5px',
    },
    descriptionInput: {
      marginTop: '5px',
      marginBottom: '10px',
    },
  };

  const [image, setImage] = useState(null);
  const [expend, setExpend] = useState(false);

  return (
    <Page title="Products" breadcrumbs={[{ name: 'Products', active: true }]}>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Add a new Product</CardHeader>
            <CardBody>
              <input
                type="file"
                name="Upload Image"
                onChange={e => setImage(e.target.files[0])}
              />
              <Input style={styles.titleInput} placeholder="Title" />
              <textarea
                style={styles.descriptionInput}
                class="form-control"
                aria-label="With textarea"
                placeholder="Description"
              ></textarea>
            </CardBody>
          </Card>
        </Col>{' '}
        <Col md={6}>
          <Card>
            <CardHeader>Size</CardHeader>
            <CardBody>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setExpend(true);
                  }}
                >
                  Small
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setExpend(true);
                  }}
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setExpend(true);
                  }}
                >
                  Large
                </button>
              </div>
              {expend && (
                <div>
                  <div className="form-group-inline">
                    <input
                      style={{ marginTop: '15px' }}
                      type="checkbox"
                      aria-label="Global"
                    />
                    <label style={{ marginTop: '15px', marginLeft: '10px' }}>
                      Global
                    </label>
                    <input
                      style={{ marginTop: '15px', marginLeft: '15px' }}
                      type="checkbox"
                      aria-label="Global"
                    />
                    <label style={{ marginTop: '15px', marginLeft: '10px' }}>
                      is Active
                    </label>
                  </div>
                  <Input style={styles.titleInput} placeholder="Dimension" />
                  <Input
                    style={styles.titleInput}
                    placeholder="Tool Tip Content"
                  />

                  <textarea
                    style={styles.descriptionInput}
                    class="form-control"
                    aria-label="With textarea"
                    placeholder="Description"
                  ></textarea>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>{' '}
      </Row>
    </Page>
  );
};

export default ProductPage;
