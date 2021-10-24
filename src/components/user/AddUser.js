import axios from 'axios';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMsg, setSuccessMsg] = useState('');
  const onSubmit = (user) => {
    axios
      .post('http://localhost:8000/user', user)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          setSuccessMsg('Data Inserted Successfully!!');
        }
        reset({});
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(user);
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-light my-3 rounded shadow p-2">
            <h3 className="text-center">Add New User</h3>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            className="bg-light my-3 rounded shadow p-2"
          >
            {successMsg && <Alert variant="success">{successMsg} </Alert>}
            <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
              <FloatingLabel
                controlId="floatingInput"
                label="Your Name"
                className="mb-3"
              >
                <Form.Control
                  {...register('name', { required: true, maxLength: 20 })}
                  type="text"
                  placeholder="John doe"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  {...register('email', { required: true })}
                  type="email"
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

export default AddUser;
