import React, { useState, useEffect } from 'react';
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
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Label,
} from 'reactstrap';

import Page from 'components/Page';
import SizeFormForProduct from '../components/sizeBasedFormForProduct';
import axios from 'axios';
const AddNewProductPage = () => {
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
      marginTop: '0px',
      marginBottom: '5px',
    },
    descriptionInput: {
      marginTop: '5px',
      marginBottom: '10px',
    },
  };

  useEffect(() => {
    const url = 'http://localhost:4321/sizeatrribute/getall?';
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setSizeList(res.data.products);
        setSelectedSizeAttributes(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  //const [activeTab, setActiveTab] = useState('1');
  const [activeTab, setActiveTab] = useState(null);
  const [isglobal, isSetGlobal] = useState({});

  const [expend, setExpend] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  const [sizeList, setSizeList] = useState([]);

  const [title, setTitle] = useState();
  const [image, setImage] = useState(null);
  const [uploadNewImage, setUploadNewImage] = useState(null);
  const [price, setPrice] = useState();
  const [resolution, setResolution] = useState();
  const [size, setSize] = useState();
  const [Description, setDescription] = useState();
  const [disableFileds, setDisableField] = useState(true);
  const imgElement = React.useRef(null);

  const [selectedSizeAttributes,setSelectedSizeAttributes] = useState([]);

  const uploadAndUpdateProduct = () =>{
    sizeList()
  };

  const uploadImage = image => {
    setUploadNewImage(image);

    setImage(URL.createObjectURL(image));
    setTitle(image.name);
    setDisableField(false);
  };

  const onImgLoad = () => {
    var resoluionn =
      imgElement.current.naturalHeight + 'x' + imgElement.current.naturalWidth;
    setResolution(resoluionn);
  };

  const uploadAProduct = () => {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const formData = new FormData();
    formData.append('myImage', uploadNewImage);
    formData.append('title', title);
    formData.append('sizeAttr', size);
    formData.append('resoluion', resolution);
    formData.append('defaultprice', price);
    formData.append('description', Description);

    axios
      .post('http://localhost:4321/products/addnew', formData, config)
      .then(response => {
        if (response.data.status === 'ok') {
          setShowToggle(true);
          setTitle('');
          setImage(null);
          setPrice('');
          setResolution('');
          setDescription('');
          setSize('');
          setDisableField(true);
        }
        console.log(response);
        setShowToggle(false);
      })
      .catch(error => {});
  };

  const handleTabChange = key => {
    if (key === activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(key);
    }
  };

  return (
    <Page
      title="Add New Product"
      breadcrumbs={[{ name: 'Add New Product', active: true }]}
    >
      <Modal isOpen={showToggle}>
        <ModalHeader>Add New Product</ModalHeader>
        <ModalBody>
          <Label> Product added succesfully.</Label>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setShowToggle(false)}>
            Done
          </Button>{' '}
        </ModalFooter>
      </Modal>
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Add a new Product </CardHeader>
            <CardBody>
              {image != null && (
                <img
                  src={image}
                  width="250px"
                  height="250px"
                  ref={imgElement}
                  onLoad={() => onImgLoad()}
                />
              )}

              <Input
                style={{ marginTop: '10px', marginBottom: '10px' }}
                type="file"
                name="myImage"
                onChange={e => uploadImage(e.target.files[0])}
              />

              <Label>Title</Label>
              <Input
                style={styles.titleInput}
                placeholder="Title"
                value={title}
                disabled={disableFileds ? 'disabled' : ''}
                onChange={e => setTitle(e.target.value)}
              />
              <Label>Resolution</Label>

              <Input
                style={styles.titleInput}
                value={resolution}
                placeholder="Resolution"
                disabled={disableFileds ? 'disabled' : ''}
                onChange={e => setResolution(e.target.value)}
              />

              <Label>Description</Label>

              <textarea
                style={styles.descriptionInput}
                class="form-control"
                aria-label="With textarea"
                placeholder="Description"
                disabled={disableFileds ? 'disabled' : ''}
                value={Description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </CardBody>
          </Card>
        </Col>{' '}
        <Col md={6}>
          <Card>
            <CardHeader>Size</CardHeader>
            <CardBody>
              {sizeList.map(attr => {
                return (
                  <Row>
                    <SizeFormForProduct
                      name={attr.title}
                      key={attr.id}
                      obj={attr}
                      myKey={attr.id}
                      activeTab={activeTab}
                      handleTabChange={handleTabChange}
                      selectedSizeAttributes = {selectedSizeAttributes}
                      setSelectedSizeAttributes  = {selectedSizeAttributes}
                    />
                  </Row>
                );
              })}
            </CardBody>
          </Card>
        </Col>{' '}
      </Row>

      <Row>
        <Col>
          <Button color="primary" onClick={() => uploadAProduct()}>
            Add
          </Button>{' '}
        </Col>
      </Row>
    </Page>
  );
};

export default AddNewProductPage;
