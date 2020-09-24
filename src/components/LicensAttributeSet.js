import React, { useState } from 'react';

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
import LicenseForm from './LicenseBasedForm';

const LicenseAttributeSet = () => {
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
    addNewBtn: {
      float: 'right',
    },
  };

  const [activeTab, setActiveTab] = useState(null);
  const [modal, setModal] = useState(false);
  const [newTitle, setNewTitle] = useState();
  const [showToggle, setShowToggle] = useState();
  const [items, setItems] = useState([
    { name: 'Social License', key: '0' },
    { name: 'Editorial License', key: '1' },
    { name: 'Commercial License', key: '2' },
  ]);

  const handleTabChange = key => {
    if (key === activeTab) {
      setActiveTab(null);
    } else {
      setActiveTab(key);
    }
  };

  const addNewSize = () => {
    var value = items.length + 1;
    console.log('value:', value.toString());

    var obj = { name: newTitle, key: value.toString() };
    setItems([...items, obj]);
    console.log('value:', items);

    setShowToggle(false);
  };

  const ShowToggle = value => {
    setShowToggle(value);
  };
  return (
    <Card>
      <CardHeader>
        Licenses
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
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
              />
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
              <LicenseForm
                name={attr.name}
                key={attr.key}
                myKey={attr.key}
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

export default LicenseAttributeSet;
