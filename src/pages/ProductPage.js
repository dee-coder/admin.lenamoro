import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  CardHeader,
  CardBody,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';

import Page from 'components/Page';
import FormProduct from '../components/sizeBasedForm';
const ProductPage = () => {
  const styles = {
    container: {
      padding: '20px',
    },
    activeTab: {
      border: '1px solid #000',
    },
    tab: {
      '&:hover': {
        cursor: 'pointer',
      },
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

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [activeTab, setActiveTab] = useState('1');

  //for small
  const [isGlobalsmall, setIsGlobalsmall] = useState(false);
  const [isActivesmall, setIsActiveSmall] = useState(false);
  const [diemensionSmall, setDimensionSmall] = useState();
  const [toolTipSmall, setToolTipSmall] = useState();
  const [descrptionSmall, setDescriptionSmall] = useState();

  //for medium
  const [isGlobalmedium, setIsGlobalmedium] = useState(false);
  const [isActivemedium, setIsActivemedium] = useState(false);
  const [diemensionmedium, setDimensionmedium] = useState();
  const [toolTipmedium, setToolTipmedium] = useState();
  const [descrptionmedium, setDescriptionmedium] = useState();
  //for large
  const [isGloballarge, setIsGloballarge] = useState(false);
  const [isActivelarge, setIsActivelarge] = useState(false);
  const [diemensionlarge, setDimensionlarge] = useState();
  const [toolTiplarge, setToolTiplarge] = useState();
  const [descrptionlarge, setDescriptionlarge] = useState();

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
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={activeTab === '1' ? styles.activeTab : 'tab'}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      Small
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '2' ? styles.activeTab : 'tab'}
                      onClick={() => {
                        toggle('2');
                      }}
                    >
                      Medium
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activeTab === '3' ? styles.activeTab : 'tab'}
                      onClick={() => {
                        toggle('3');
                      }}
                    >
                      Large
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <FormProduct />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <FormProduct />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <FormProduct />
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </CardBody>
          </Card>
        </Col>{' '}
      </Row>
    </Page>
  );
};

export default ProductPage;
