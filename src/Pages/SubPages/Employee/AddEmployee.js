import {React, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CurrentUser from '../../../ProcessingComponents/Database/CurrentUser';
import EmployeeForm from '../../../ProcessingComponents/Employees/EmployeeForm';
import '../../../CSS/SubPage/AddEmployee.css';
import Menu from '../../../ProcessingComponents/Menu/Menu';

const AddEmployee = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
     async function getUser() {
         const user = await CurrentUser();
         setUser(user);
     }
     getUser();
  }, [])
  
 if(user == null){

 } else {
  console.log(user);
  return (
    <div>
      <div class = "eaBackground"></div>
      <div class = "addEmployeeContainer">
        <h1>Add Employee Page</h1>
        <div class = "coreContent">
          <form action = "">
              <EmployeeForm/>
          </form>
        </div>
      </div>
      <Menu page = "employees"/>
    </div>
  );

 }
}

export default AddEmployee;