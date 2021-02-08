import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const EmployeeList = () => {
  const { employee: employee, removeEmployee: removeEmployee } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {employee.length > 0 ? (
        <>
          {employee.map(employee => (
            <ListGroupItem className="d-flex" key={employee.id}>
              <strong>{employee.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${employee.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeEmployee(employee.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Employees</h4>
        )}
    </ListGroup>
  )
}