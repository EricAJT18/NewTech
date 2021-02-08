import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditEmployee = (props) => {
  const { editEmployee: editEmployee, employees : employee } = useContext(GlobalContext);
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentEmployeeId = props.match.params.id;

  useEffect(() => {
    const employeeId = currentEmployeeId;
    const selectedEmployee = employees.find(employee => employee.id === employeeId);
    setSelectedEmployee(selectedEmployee);
  }, [currentEmployeeId, employees])

  const onChange = (e) => {
    setSelectedEmployee({ ...selectedEmployee, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedEmployee);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedEmployee.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}