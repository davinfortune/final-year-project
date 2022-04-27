import React from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import { createTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import '../../CSS/Menu.css';




function Menu(props)  {

    const Theme = createTheme({
        palette: {
          primary: {
            light: 'rgba(0, 0, 0, 0.54)',
            main: 'rgba(0, 0, 0, 0.54)',
            dark: 'rgba(0, 0, 0, 0.54)',
            contrastText: 'rgba(0, 0, 0, 0.54)',
          },
          secondary: {
            light: '#e0f2f1',
            main: '#e0f2f1',
            dark: '#e0f2f1',
            contrastText: '#e0f2f1',
          },
        },
      });

    const [employeeColor, setEmployeeColor] = React.useState(true);
    const [dashboardColor, setDashboardColor] = React.useState(true);
    const [inventoryColor, setInventoryColor] = React.useState(true);

    const handleEmployees = (e) => {
        setEmployeeColor(!employeeColor);
        setDashboardColor(true);
        setInventoryColor(true);
    }
    const handleDashboard = (e) => {
        setDashboardColor(!dashboardColor);
        setInventoryColor(true);
        setEmployeeColor(true);
    }
    const handleInventory = (e) => {
        setInventoryColor(true);
        setEmployeeColor(true);
        setDashboardColor(true);
    }
    var page = props.page;
    if(page === "dashboard"){
    return (
            <div class = "wrapper">
                <Fade in={true} timeout={1250}>
                    <div class = 'nav-menu'>
                            <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={5}
                            >
                                    <IconButton aria-label="Employee" color={employeeColor ? "primary" : "secondary"} 
                                    onClick={handleEmployees} theme={Theme} href="/employees" sx={{ "&:hover": { color: "#e0f2f1" } }}>
                                            <PersonOutlinedIcon/>
                                    </IconButton>
                                    <hr/>
                                    <IconButton aria-label="Dashboard" color={dashboardColor ? "secondary" : "primary"  } 
                                    onClick={handleDashboard} theme={Theme} href="/dashboard" sx={{ "&:hover": { color: "#e0f2f1" } }}>
                                        <QueryStatsOutlinedIcon />
                                    </IconButton>
                                    <hr/>
                                    <IconButton aria-label="Inventory" color={inventoryColor ? "primary" : "secondary"} 
                                    onClick={handleInventory} theme={Theme}  sx={{ "&:hover": { color: "#e0f2f1" } }}>
                                        <InventoryOutlinedIcon />
                                    </IconButton>
                            </Stack>
                    </div>
                </Fade>
                <Fade in={true} timeout={1250}>
                    <div id = 'background-blurred'></div>
                </Fade>
                
            </div>
        
    );
    }
    if(page === "employees"){
        return (
            <div class = "wrapper">
                <Fade in={true} timeout={1250}>
                    <div class = 'nav-menu'>
        
                            <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={5}
                            >
                                    <IconButton aria-label="Employee" color={employeeColor ? "secondary" : "primary" } 
                                    onClick={handleEmployees} theme={Theme} href="/employees" sx={{ "&:hover": { color: "#e0f2f1" } }}>
                                            <PersonOutlinedIcon/>
                                    </IconButton>
                                    <hr/>
                                    <IconButton aria-label="Dashboard" color={dashboardColor ?  "primary" : "secondary"  } 
                                    onClick={handleDashboard} theme={Theme} href="/dashboard" sx={{ "&:hover": { color: "#e0f2f1" } }}>
                                        <QueryStatsOutlinedIcon />
                                    </IconButton>
                                    <hr/>
                                    <IconButton aria-label="Inventory" color={inventoryColor ? "primary" : "secondary"} 
                                    onClick={handleInventory} theme={Theme} sx={{ "&:hover": { color: "#e0f2f1" } }}>
                                        <InventoryOutlinedIcon />
                                    </IconButton>
                            </Stack>
                    </div>
                </Fade>
                <Fade in={true} timeout={1250}>
                    <div id = 'background-blurred'></div>
                </Fade>
            </div>
        );
        }
}

export default Menu;