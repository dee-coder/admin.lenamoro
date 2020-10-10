import React, { useEffect, useState } from 'react';
import {
  CardBody,
  CardHeader,
  Input,
  Row,
  Col,
  Card,
  Collapse,
  DropdownToggle,
  Dropdown,
  FormGroup,
  Button,
  Label,
} from 'reactstrap';

import axios from 'axios';

const SizeFormForProduct = ({
  name,
  myKey,
  handleTabChange,
  activeTab,
  obj,
  selectedSizeAttributes,
  setSelectedSizeAttributes
}) => {
  useEffect(() => {
    setTitle(obj.title);
    setPrice(obj.price);
    setDimension(obj.dimension);
    setTooltip(obj.tooltip_content);
    setDescription(obj.description);
  }, []);
  const [isGlobal, setIsGlobal] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [dimension, setDimension] = useState();
  const [tooltip, setTooltip] = useState();
  const [description, setDescription] = useState();

  

  const handleCheck = () => {
    if (isGlobal) {
      setIsGlobal(false);
    } else {
      setIsGlobal(true);
      getGlobalDetails(obj.id);
    }
  };

  const handleCheckActive = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  function getGlobalDetails(id) {
    axios
      .get('http://localhost:4321/sizeatrribute/get?id=' + id)
      .then(response => {
        if (response.data.status === 'ok') {
          setTitle(response.data.products.title);
          setPrice(response.data.products.price);
          setDimension(response.data.products.dimension);
          setTooltip(response.data.products.tooltip_content);
          setDescription(response.data.products.description);
        }
        console.log(response);
        //setShowToggle(false);
      })
      .catch(error => {});
  }

  return (
    <div>
      <Row>
        <Col>
          <div style={styles.listItem} onClick={() => handleTabChange(myKey)}>
            {name}
            {myKey === activeTab && (
              <i
                style={{ color: '#000', float: 'right' }}
                class="fas fa-sort-up"
              ></i>
            )}

            {myKey != activeTab && (
              <i
                style={{ color: '#000', float: 'right' }}
                class="fas fa-caret-down"
              ></i>
            )}
          </div>

          <Collapse isOpen={myKey === activeTab} style={styles.layoutPad}>
            <div className="form-group-inline">
              <input
                style={{ marginTop: '15px', marginLeft: '15px' }}
                type="checkbox"
                aria-label="Global"
                onChange={e => handleCheck()}
                checked={isGlobal}
              />
              <label style={{ marginTop: '15px', marginLeft: '10px' }}>
                isGlobal
              </label>

              <input
                style={{ marginTop: '15px', marginLeft: '15px' }}
                type="checkbox"
                aria-label="isActive"
                onChange={e => handleCheckActive()}
                checked={isActive}
              />
              <label style={{ marginTop: '15px', marginLeft: '10px' }}>
                isActive
              </label>
            </div>

            <Label> Price</Label>
            <Input
              style={styles.titleInput}
              placeholder="Price"
              value={price}
              onChange={e => setTitle(e.target.value)}
              disabled={isGlobal ? 'disabled' : ''}
            />
            <Label> Dimension</Label>

            <Input
              style={styles.titleInput}
              placeholder="Dimension"
              value={dimension}
              onChange={e => setDimension(e.target.value)}
              disabled={isGlobal ? 'disabled' : ''}
            />
            <Label> Tool Tip Content</Label>

            <Input
              style={styles.titleInput}
              placeholder="Tool Tip Content"
              value={tooltip}
              onChange={e => setTooltip(e.target.value)}
              disabled={isGlobal ? 'disabled' : ''}
            />
            <Label> Description</Label>

            <textarea
              style={styles.descriptionInput}
              class="form-control"
              aria-label="With textarea"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              disabled={isGlobal ? 'disabled' : ''}
            ></textarea>
            <FormGroup inline>
              <Button color="primary"> Save</Button>
            </FormGroup>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  titleInput: {
    marginTop: '0px',
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
};

export default SizeFormForProduct;
