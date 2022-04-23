import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

function Registered() {
  return (
    <div>
      <h1>Registered Page</h1>
      <Link to="/"><Button>Home</Button></Link>
    </div>
  );
}

export default Registered;