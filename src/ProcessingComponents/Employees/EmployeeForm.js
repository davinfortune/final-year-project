import {React, useState, useEffect} from 'react';
import ColoredLine from '../../StyleCompenents/ColoredLine';
import CurrentUser from '../Database/CurrentUser';


function EmployeeForm() {
  const [user, setUser] = useState(null);

  useEffect(() => {
     async function getUser() {
         const user = await CurrentUser();
         setUser(user);
     }
     getUser();
  }, [])

    const [fullname, setfullname] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [hourlyrate, sethourlyrate] = useState("");
    const [hours, sethours] = useState("");
    const [email, setemail] = useState("");
    const d = new Date();
    let month = d.getMonth();
    let year = d.getYear();
    var oneJan = new Date(d.getFullYear(),0,1);
    var numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
    var week = Math.ceil(( d.getDay() + 1 + numberOfDays) / 7);


  const handleOnSubmit = async (e) => {




          e.preventDefault();
          let result = await fetch(
          'https://final-year-project-davin.herokuapp.com/addemployee', {
              method: "post",
              body: JSON.stringify({ user, fullname, phonenumber, hourlyrate, hours, email, month, year, week }),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          result = await result.json();
          console.warn(result);
          if (result) {
              alert("Data saved succesfully");
              window.location.href = '/';
          }
  }

  if(user == null){
      console.log("loading");
  } else {
    return (
        <>
            <div className = "formInput">
                <label>Full Name</label>
                <input type="text" placeholder="Gordon Ramsey" required
                value={fullname} onChange={(e) => setfullname(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Telephone</label>
                <input type="text" placeholder="083 000 1111" required
                value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Email</label>
                <input type="text" placeholder="greatemployee@gmail.com" required
                value={email} onChange={(e) => setemail(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Hourly Rate</label>
                <input type="text" placeholder="€ 12.22" required
                value={hourlyrate} onChange={(e) => sethourlyrate(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Hours Per Week</label>
                <input type="text" placeholder="34" required
                value={hours} onChange={(e) => sethours(e.target.value)} />
            </div>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" id="addEmployeeButton"
                onClick={handleOnSubmit}>Add Employee</button>

    
        </>
    );
  }
}

export default EmployeeForm;