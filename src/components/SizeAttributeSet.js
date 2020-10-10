import React, { useState, useEffect } from 'react';
import FormProduct from '../components/sizeBasedForm';

import {
  CardHeader,
  CardBody,
  Input,
  Card,
  Row,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import axios from 'axios';

const SizeAttributeSet = () => {
  useEffect(() => {
    const url = 'http://localhost:4321/sizeatrribute/getall?';
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setItems(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const [activeTab, setActiveTab] = useState(null);
  const [modal, setModal] = useState(false);
  const [newTitle, setNewTitle] = useState();
  const [showToggle, setShowToggle] = useState();
  const [items, setItems] = useState([]);

  const [title, setTitle] = useState();
  const [isActive, setIsActive] = useState(false);
  const [price, setPrice] = useState();
  const [dimension, setDismension] = useState();
  const [tooltipContent, setToolTipContent] = useState();
  const [Description, setDescription] = useState();

  const setIsActiveOrNot = () => {
    var value = false;
    if (isActive) {
      value = false;
    } else {
      value = true;
    }
    setIsActive(value);
  };

  const handleTabChange = key => {
    if (key === activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(key);
    }
  };

  const addNewSize = () => {
    const url =
      'http://localhost:4321/sizeatrribute/upload?title=' +
      title +
      '&isActive=' +
      isActive +
      '&price=' +
      price +
      '&dimension=' +
      dimension +
      '&tooltip_content=' +
      tooltipContent +
      '&description=' +
      Description;
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setItems(res.data.products);
        setTitle('');
        setActiveTab(false);
        setPrice('');
        setDismension('');
        setToolTipContent('');
        setDescription('');
        setShowToggle(false);
      })
      .catch(err => console.log(err));
    // var value = items.length + 1;
    // console.log('value:', value.toString());

    // var obj = { name: newTitle, key: value.toString() };
    // setItems([...items, obj]);
    // console.log('value:', items);

    // setShowToggle(false);
  };

  const ShowToggle = value => {
    setShowToggle(value);
  };
  return (
    <Card>
      <CardHeader>
        Size{' '}
        <Button
          style={styles.addNewBtn}
          className="parimary-btn"
          onClick={() => ShowToggle(true)}
        >
          Add New{' '}
          <Modal isOpen={showToggle}>
            <ModalHeader>Add New Size Attribute</ModalHeader>
            <ModalBody>
              <Input
                style={styles.titleInput}
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />

              <div className="form-group-inline">
                <input
                  style={{ marginTop: '15px' }}
                  type="checkbox"
                  checked={isActive}
                  aria-label="Global"
                  onChange={e => setIsActiveOrNot()}
                />

                <label style={{ marginTop: '15px', marginLeft: '10px' }}>
                  is Active
                </label>
              </div>
              <Input
                style={styles.titleInput}
                value={price}
                placeholder="Price"
                onChange={e => setPrice(e.target.value)}
              />

              <Input
                style={styles.titleInput}
                value={dimension}
                placeholder="Dimension"
                onChange={e => setDismension(e.target.value)}
              />
              <Input
                style={styles.titleInput}
                value={tooltipContent}
                placeholder="Tool Tip Content"
                onChange={e => setToolTipContent(e.target.value)}
              />

              <textarea
                style={styles.descriptionInput}
                class="form-control"
                aria-label="With textarea"
                placeholder="Description"
                value={Description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => addNewSize()}>
                Add
              </Button>{' '}
              <Button color="secondary" onClick={() => ShowToggle(false)}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Button>
      </CardHeader>
      <CardBody>
        {items.map(attr => {
          return (
            <Row>
              <FormProduct
                name={attr.title}
                key={attr.id}
                obj={attr}
                myKey={attr.id}
                activeTab={activeTab}
                handleTabChange={handleTabChange}
              />
            </Row>
          );
        })}
      </CardBody>
    </Card>
  );
};

const styles = {
  titleInput: {
    marginTop: '10px',
    marginBottom: '5px',
  },
  descriptionInput: {
    marginTop: '5px',
    marginBottom: '10px',
  },
  card: {
    width: '100%',
  },
  listItem: {
    padding: '10px',
    marginLeft: '30px',
    marginRight: '30px',
    width: '400px',
    background: '#c4c4c4',
    border: '1px solid #c4c4c4',
    borderRadius: '3px',
  },
  layoutPad: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
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
  addNewBtn: {
    float: 'right',
  },
};

export default SizeAttributeSet;
