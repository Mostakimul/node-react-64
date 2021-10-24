import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Error = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light my-3 rounded shadow p-2">
            <h3 className="text-center">Error Page</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error;
