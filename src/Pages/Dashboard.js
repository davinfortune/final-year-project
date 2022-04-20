import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link to="/"><Button variant="outline-secondary">Go Back</Button></Link>
    </div>
  );
}

export default Dashboard;