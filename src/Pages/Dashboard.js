import {React, useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import CurrentUser from '../ProcessingComponents/Database/CurrentUser';
import Menu from '../ProcessingComponents/Menu/Menu';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, ScatterChart, Scatter, ComposedChart,
  Line, CartesianGrid } from 'recharts';
  import Stack from '@mui/material/Stack';
  import { createTheme } from '@mui/material/styles';
import '../CSS/Dashboard.css';

const Dashboard = props => {
  const [user, setUser] = useState(null);
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

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

  const databar = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const datascatter = [
    { index: 10000, red: 1643, blue: 790 },
    { index: 1666, red: 182, blue: 42 },
    { index: 625, red: 56, blue: 11 },
    // Calculation of line of best fit is not included in this demo
    { index: 300, redLine: 0 },
    { index: 10000, redLine: 1522 },
    { index: 600, blueLine: 0 },
    { index: 10000, blueLine: 678 },
  ];

  const datavar = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


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
      <div class = "dashboardContainer">
        <div class = "dashboardTitle">
          <h1>Dashboard Page</h1>
        </div>
        <div class = "dashboardContent">
          <div class = "topGroup">
            <div class = "dashboardContainerOne">
            <div class = "chartHolder">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={databar}>
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              </div>
              <div class = "legendHolderl">
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
            <div class = "dashboardContainerTwo">
            <div class = "chartHolder">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                  <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
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
          </div>
          <div class = "bottomGroup">
            <div class = "dashboardContainerThree">
            <div class = "chartHolder">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  width={500}
                  height={400}
                  data={datascatter}
                  margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <Tooltip />
                  <Legend />

                  <XAxis dataKey="index" type="number" label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }} />
                  <YAxis unit="ms" type="number" label={{ value: 'Time', angle: -90, position: 'insideLeft' }} />
                  <Scatter name="red" dataKey="red" fill="red" />
                  <Scatter name="blue" dataKey="blue" fill="blue" />
                  <Line dataKey="blueLine" stroke="blue" dot={false} activeDot={false} legendType="none" />
                  <Line dataKey="redLine" stroke="red" dot={false} activeDot={false} legendType="none" />
                </ComposedChart>
              </ResponsiveContainer>
              </div>
              <div class = "legendHolderl">
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
            <div class = "dashboardContainerFour">
            <div class = "chartHolder">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={datavar}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
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
          </div>
        </div>  
      </div>
      <Menu page="dashboard" />
    </div>
  );

 }
}

export default Dashboard;