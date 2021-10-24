import React from 'react';
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';

const UpdateUser = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light my-3 rounded shadow p-2">
            <h3 className="text-center">Edit User</h3>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            className="bg-light my-3 rounded shadow p-2"
          >
            <Form className="m-5">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UpdateUser;
