import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row, Table } from 'react-bootstrap';
import UsersTable from './UsersTable';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState('');

  useEffect(() => {
    getUsers();
  }, [deleteMsg]);
  // getting all users
  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://guarded-wildwood-98662.herokuapp.com/users'
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a user
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://guarded-wildwood-98662.herokuapp.com/delete-user/${id}`
      );
      if (res.data.deletedCount === 1) {
        setDeleteMsg('User Deleted Successfully!');
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            {deleteMsg && <Alert variant="success">{deleteMsg} </Alert>}
            {users ? (
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
                  {users.map((user, index) => (
                    <UsersTable
                      key={user._id}
                      index={index}
                      user={user}
                      handleDelete={handleDelete}
                    ></UsersTable>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p>No users found!</p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
