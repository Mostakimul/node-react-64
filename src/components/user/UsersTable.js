import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UsersTable = (props) => {
  const { _id, name, email } = props.user;
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
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
        <Button
          onClick={() => props.handleDelete(_id)}
          variant="danger"
          size="sm"
          className="my-1 md:mx-1 md:my-0"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UsersTable;
