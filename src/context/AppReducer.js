export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_EMPLOYEE':
        return {
          ...state,
          employees: state.employees.filter(employee => {
            return employee.id !== action.payload;
          })
        }
      case 'ADD_EMPLOYEE':
        return {
          ...state,
          employees: [action.payload, ...state.employees]
        }
      case 'EDIT_EMPLOYEE':
        const updateEmployees = action.payload;
  
        const updateEmployees = state.employees.map(employees => {
          if (employees.id === updateEmployees.id) {
            return updateEmployees;
          }
          return employee;
        })
        return {
          ...state,
          employees: updateEmployees
        }
  
      default:
        return state;
    }
  }