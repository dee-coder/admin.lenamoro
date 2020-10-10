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
  FormGroup,
  Button,
} from 'reactstrap';

const FormProduct = ({ name, myKey, handleTabChange, activeTab, obj }) => {
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
                checked={obj.isActive && true}
              />
              <label style={{ marginTop: '15px', marginLeft: '10px' }}>
                is Active
              </label>
            </div>
            <Input
              style={styles.titleInput}
              placeholder="Price"
              value={obj.price}
            />

            <Input
              style={styles.titleInput}
              placeholder="Dimension"
              value={obj.dimension}
            />
            <Input
              style={styles.titleInput}
              placeholder="Tool Tip Content"
              value={obj.tooltip_content}
            />

            <textarea
              style={styles.descriptionInput}
              class="form-control"
              aria-label="With textarea"
              placeholder="Description"
              value={obj.description}
            ></textarea>
            <FormGroup inline>
              <Button color="primary"> Save Changes</Button>
              <Button color="primary" style={{ marginLeft: '10px' }}>
                {' '}
                Discard
              </Button>
            </FormGroup>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default FormProduct;
