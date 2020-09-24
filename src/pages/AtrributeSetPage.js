import React, { useState } from 'react';
import Page from 'components/Page';
import { Row, Col } from 'reactstrap';
import SizeAttributeSet from '../components/SizeAttributeSet';
import LicenseAttributeSet from '../components/LicensAttributeSet';

const AttributeSetPage = () => {
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

  return (
    <Page
      title="Attributes"
      breadcrumbs={[{ name: 'Attributes', active: true }]}
    >
      <Row>
        <Col md={6}>
          <SizeAttributeSet />
        </Col>
        <Col md={6}>
          <LicenseAttributeSet />
        </Col>
      </Row>
    </Page>
  );
};

export default AttributeSetPage;
