import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light my-3 rounded shadow p-2">
            <h3 className="text-center">All User</h3>
          </Col>
        </Row>
        <Row>
          <Col className="bg-light my-3 rounded shadow p-2">
            <Table responsive striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>mark@gmail.com</td>
                  <td>
                    <Button
                      as={Link}
                      to="/edit-user"
                      variant="info"
                      size="sm"
                      className="mx-1"
                    >
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" className="mx-1">
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
