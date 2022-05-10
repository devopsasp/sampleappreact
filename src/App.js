import logo from './logo.svg';
import './App.css';
import {AppBar,Toolbar} from '@mui/material'
import Typography from '@mui/material/Typography'
import {Link,Outlet} from "react-router-dom"
import {Button} from "@mui/material"
import {Paper} from '@mui/material'
import ErrorBoundry from './errorboundry';
import { Avatar } from '@mui/material';
import {useNavigate} from 'react-router-dom'
function App() {

  var navigate=useNavigate()
  var user=sessionStorage.getItem("username")

   if(user!=null)
   {
    console.log(user)
    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <Avatar variant="square">
              {user.slice(0,2).toUpperCase()}
            </Avatar>
  
          <Typography>
            My Sample Project
          </Typography>
          <Link to="/home/view"><Button variant="contained">View Entries</Button></Link>
          <Link to="/home/add"><Button variant="contained">Add Entries</Button></Link>
          <Link to="/home/updatedelete"><Button variant="contained">Update/Delete</Button></Link>
          <Button variant="contained"  
          onClick={()=>{
            sessionStorage.clear()
            navigate("/")
          }}
          
          >Logout</Button>
          </Toolbar>
        </AppBar>
        <div style={{position:"relative",top:200}}>
          <Paper elevation={5}>
            <ErrorBoundry>          
   <Outlet/>
   </ErrorBoundry>
   </Paper>
        </div>
      </>
    );
   }
   else
   {
    
     return <h1>You have not logged in !!</h1>
   }

  
}

export default App;
