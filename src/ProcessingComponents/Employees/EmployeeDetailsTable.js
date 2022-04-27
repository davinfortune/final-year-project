import {React,useState, useEffect} from 'react';
import CurrentUser from '../Database/CurrentUser';
import CurrentEmployee from './EmployeeCurrent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import EmployeeRow from './EmployeeRow';

function EmployeeDetailsTable() {

    const [user, setUser] = useState("");
    const [open, setOpen] = useState(false);
    const [employee, setEmployee] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    useEffect(() => {
       async function getUser() {
           const user = await CurrentUser();
           setUser(user);
       };
       getUser();
    }, [])
    
    useEffect(() => {
        async function getEmployee() {
            const employee = await CurrentEmployee();
            setEmployee(employee);
        }
        getEmployee();
     }, [])

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

if(employee == null){
    console.log("loading...");
} else {
    var ratings = employee.perweekinfo;

    return (
        <div class = "employeeTable">
            <table id = "employeeTable">
                  <thead>
                      <tr>
                          <th>Hours</th>
                          <th>Rated Performance</th>
                      </tr>
                  </thead>
                  <tbody id = "tbNames">
                      {ratings.map((val, key) => {
                          return (
                                <tr key={key}>
                                    <td>{val.perweekinfo[0].hours}</td>
                                    <td>{val.perweekinfo[0].ratedperformance}</td>
                                    <td>
                                    <IconButton aria-label="delete" color="secondary" onClick={handleOpen}>
                                        <DeleteIcon theme={Theme} color="primary"/>
                                    </IconButton>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                        timeout: 1250,
                                        }}
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Are you Sure?
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 5 }}>
                                                Your about to Delete {val.fullname} !!!!
                                            </Typography>
                                            <Stack mt={5} direction="row" spacing={4}>
                                                <Button variant="outlined" color = "error" startIcon={<DeleteIcon theme={Theme} color="primary" />}>
                                                    Delete
                                                </Button>
                                                <Button  onClick={handleClose}>
                                                    No they are great!!
                                                </Button>
                                            </Stack>
                                        </Box>
                                    </Modal>
                                    </td>
                                </tr>
                          )
                      })}
                      
                  </tbody>
            </table>
        </div>
  
    );
  }
}


export default EmployeeDetailsTable;