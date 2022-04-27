import CurrentUser from '../../../ProcessingComponents/Database/CurrentUser';
import CurrentEmployee from '../../../ProcessingComponents/Employees/EmployeeCurrent';
import {React, useState, useEffect} from 'react';
import Menu from '../../../ProcessingComponents/Menu/Menu';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import EmployeeDetailsTable from '../../../ProcessingComponents/Employees/EmployeeDetailsTable';


import '../../../CSS/SubPage/DetailsEmployee.css';

function EmployeeDetails() {

  const [user, setUser] = useState(null);
  const [employee, setEmployee] = useState(null);

  const Theme = createTheme({
    palette: {
      primary: {
        light: '#e0f2f1',
        main: '#e0f2f1',
        dark: '#e0f2f1',
        contrastText: '#e0f2f1',
      },
      secondary: {
        light: '#e0f2f1',
        main: '#e0f2f1',
        dark: '#e0f2f1',
        contrastText: '#e0f2f1',
      },
    },
  });

  useEffect(() => {
     async function getUser() {
         const user = await CurrentUser();
         setUser(user);
     }
     getUser();
  }, [])

  useEffect(() => {
    async function getEmployee() {
        const employee = await CurrentEmployee();
        setEmployee(employee);
    }
    getEmployee();
 }, [])

 const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4,
    amt: 2100,
  },
];

 if(employee == null){ } else{
  return (
    <div>
      <div class = "detailsContainer">
        <div class = "centerWrapper">
            <div class = "detailsTitle">
              <div class = "detailsName">
                <h1>{employee.fullname}</h1>
                <p>{employee.email}</p>
                <p>{employee.phonenumber}</p>
                <p>€{employee.perweekinfo[0].hourlyrate}/hr</p>
              </div>
            </div>
            <div class = "detailsEmployeeContainer">
              <div class = "detailsChartContainer">
                <div class = "chartHolder">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={data}>
                      <YAxis />
                      <Line type="monotone" dataKey="pv" stroke="rgb(255,20,147)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div class = "legendHolder">
                            <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            >
                                    <Button aria-label="Employee" 
                                     theme={Theme}  sx={{ "&:hover": { color: "rgb(255,20,147)" } }}>
                                           W
                                    </Button>
                                    <hr/>
                                    <Button aria-label="Dashboard" 
                                    theme={Theme} sx={{ "&:hover": { color: "rgb(255,20,147)" } }}>
                                        M
                                    </Button>
                                    <hr/>
                                    <Button aria-label="Inventory" 
                                     theme={Theme} sx={{ "&:hover": { color: "rgb(255,20,147)" } }}>
                                      Y
                                    </Button>
                            </Stack>
                </div>
              </div>
              <div class = "ratingTableContainer">
                <h1>Current Weeks Performance</h1>
                  <form>
                    <div className = "formInput">
                      <label>Rating</label>
                      <Slider
                      aria-label="Rating"
                      defaultValue={5}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={1}
                      max={10}
                      theme={Theme}
                      sx={{ "&:hover": { color: "rgb(255,20,147)" } }}
                      />
                    </div>

                    <div class= "hoursInput">
                        <label>Hours</label>
                        <input type="text" placeholder="40" required />
                    </div>
                    <div class = "buttonContainer">
                    <button id = "submitRatingButton" >Add This Weeks Rating</button>
                  </div>
                  </form>
              </div>
              <div class = "allInfoContainer">
                <div class = "titleContainer">
                  <h1>Previous Performances</h1>
                </div>
                <div class = "performanceTableHolder">
                </div>

              </div>
            </div>
        </div>
      </div>
      <Menu page = "employees"/>
    </div>
  );
}
}

export default EmployeeDetails;