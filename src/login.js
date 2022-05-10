import Paper from '@mui/material/Paper'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Login() {

    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const navigate=useNavigate()
    return (
        <>

    <h1> Login Page </h1>

    <Paper elevation={10}>
  <div style={{backgroundColor:"beige"}}>
  <label >Enter User Id</label><br/>
     <input type='text' onChange={(e)=>{
         setUserId(e.target.value)
     }} /><br/>
     <label>Enter Password</label><br/>
     <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/><br/>
     <input type='button' value='Login' onClick={()=>{

       axios.get(`http://localhost:8081/finduser/${userId}`)
            .then((res)=>{
                var data=res.data
                if(data.role==="admin")
                {
                        if(data.userEmail===userId && data.password===password )
                        {
                            sessionStorage.setItem("username",data.userEmail)
                    navigate("/home")        
                        }
                        else
                        {
                            setStatus("invalid details")
                        }
                }
                else if(data.role==="user")
                {

                    if(data.userEmail===userId && data.password===password )
                    {
                        sessionStorage.setItem("username",data.userEmail)
                navigate("/user")        
                    }
                    else
                    {
                        setStatus("invalid details")
                    }

            
                }
            })



     }} /><br/>
     {status}
  </div>
 

    </Paper>
    </>
    )
}

export default Login