import {React, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import CurrentUser from '../ProcessingComponents/Database/CurrentUser';

const Dashboard = props => {
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
      <h1>Dashboard Page</h1>
      <Link to="/"><Button variant="outline-secondary">Go Back</Button></Link>
    </div>
  );

 }
}

export default Dashboard;