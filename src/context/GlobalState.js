import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  employees: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeEmployee = (id) => {
    dispatch({
      type: 'REMOVE_EMPLOYEE',
      payload: id
    })
  }

  const addEmployee = (employee) => {
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: employee
    })
  }

  const editEmployee = (employee) => {
    dispatch({
      type: 'EDIT_EMPLOYEE',
      payload: employee
    })
  }

  return (
    <GlobalContext.Provider value={{
      employees: state.employees,
      removeEmployee: removeEmployee,
      addEmployee: addEmployee,
      editEmployee: editEmployee
    }}>
      {children}
    </GlobalContext.Provider>
  )
}