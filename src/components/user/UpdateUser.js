import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [updateMsg, setUpdateMsg] = useState('');

  useEffect(() => {
    fetchSingleUser(id);
  }, []);
  const fetchSingleUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  };
  // handle update with server
  const updateUser = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/update/${id}`,
        user
      );
      if (response.data.modifiedCount > 0) {
        setUpdateMsg('User Update Successfully!');
        // setUser({});
      }
    } catch (error) {
      console.log(error);
    }
  };
  // handle namechange
  const handleName = (e) => {
    const updatedName = e.target.value;
    const updatedUser = { name: updatedName, email: user.email };
    setUser(updatedUser);
  };
  // handle email change
  const handleEmail = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = { name: user.name, email: updatedEmail };
    setUser(updatedUser);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light my-3 rounded shadow p-2">
            <h3 className="text-center">Edit User: {user.name}</h3>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            className="bg-light my-3 rounded shadow p-2"
          >
            {updateMsg && <Alert variant="success">{updateMsg} </Alert>}
            <Form onSubmit={handleSubmit} className="m-5">
              <FloatingLabel
                controlId="floatingInput"
                label="Your Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  onChange={handleName}
                  value={user.name || ''}
                  placeholder="John Doe"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  onChange={handleEmail}
                  value={user.email || ''}
                  placeholder="Email"
                />
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
