import {React, useState, useEffect} from 'react';
import CurrentUser from '../ProcessingComponents/Database/CurrentUser';
import EmployeeTable from '../ProcessingComponents/Employees/EmployeeTable';
import Menu from '../ProcessingComponents/Menu/Menu';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material/styles';

import '../CSS/Employee.css';

const Employees = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
     async function getUser() {
         const user = await CurrentUser();
         setUser(user);
     }
     getUser()
  }, []);
  
  const Theme = createTheme({
    palette: {
      primary: {
        light: 'rgba(255,20,147, 0.55)',
        main: 'rgba(255,20,147, 0.55)',
        dark: 'rgba(255,20,147, 0.55)',
        contrastText: 'rgba(255,20,147, 0.55)',
      },
      secondary: {
        light: '#121212',
        main: '#121212',
        dark: '#121212',
        contrastText: '#121212',
      },
    },
  });

 if(user == null){

 } else {
  console.log(user);
  return (
    <div>
      <div class = "employeeContainer">
        <div class = "heading">
          <h1>Employees</h1>
        </div>
        <div class = "primary">
          <div class = "tableContainer">
            <EmployeeTable/>
          </div>
          <div class = "floatingButtonContainer">
            <Fab color="primary" aria-label="add" href='/addemployee' theme={Theme} sx={{ "&:hover": { color: "#e0f2f1" } }}>
              <AddIcon theme = {Theme} color="secondary"/>
            </Fab>
          </div>
        </div>
      </div>
      <Menu page = "employees"/>
    </div>
  );

 }
}

export default Employees;