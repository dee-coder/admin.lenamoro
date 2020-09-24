import React from 'react';
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
} from 'reactstrap';

const FormProduct = ({ name, myKey, handleTabChange, activeTab }) => {
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
  };
  return (
    <div>
      <Row>
        <Col>
          <div style={styles.listItem} onClick={() => handleTabChange(myKey)}>
            {name}
          </div>

          <Collapse isOpen={myKey === activeTab} style={styles.layoutPad}>
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
            <Input style={styles.titleInput} placeholder="Price" />

            <Input style={styles.titleInput} placeholder="Dimension" />
            <Input style={styles.titleInput} placeholder="Tool Tip Content" />

            <textarea
              style={styles.descriptionInput}
              class="form-control"
              aria-label="With textarea"
              placeholder="Description"
            ></textarea>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default FormProduct;
