import React,{ useEffect, useState } from 'react'; 
import Amplify, { selectInput } from "aws-amplify"
import awsconfig from "./aws-exports";
//import logo from './logo.svg';
//import { withAuthenticator, AmplifyButton, AmplifySignUp } from '@aws-amplify/ui-react';
import './App.css';
//import {Link} from "react-router-dom"; 
import Axios from 'axios' 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';

Amplify.configure(awsconfig);
// 고착 컴포넌트 


function App({value, onChange,onCreate,onKeyPress}){
    let[로그,상태] =useState(['인스턴스id','상태']);
    let 사이트이름 = 'AWS EC2 로그인 툴';
    let post2 = {color : 'blue', fintSize :'30px', align :'center'}
    const [data,setData] = useState(null);

        const getjoke = () => {
          Axios.get("https://2rsabyd7k1.execute-api.ap-northeast-2.amazonaws.com/default/etc-start-test").then((respones)=>{
            console.log(respones);
          }
          );
        }

        const getjoke2 = () => {
          Axios.get("https://q7yeczn68k.execute-api.ap-northeast-2.amazonaws.com/default/ec2-stop-test").then((respones)=>{
            console.log(respones);
          }
          );
        }

        var myVar = setInterval(function() { 
          Axios.get("https://avqsgl136b.execute-api.ap-northeast-2.amazonaws.com/default/EC2-State-python").then((respones)=>{
            setData(respones.data);
          }
          );
            }, 15000);

        
  return (
    <div className="App">
      <div className="black-nav">
            <div style={post2}>{사이트이름}</div>
      </div>
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon/>
          </Avatar>
      </Box>    
          <Typography variant="h5" align="center" component="h1">
              Sign in
          </Typography>

      <div className = "list">
        <h3>{로그[0]} </h3>
        <div>
        <div>
          <TextField id="standard-basic" label="인스턴스 id 입력" variant="standard" size ='large'/>   
        </div>
        </div>
        <p>서버상태</p>
        <div>
          <Chip label={data}/>
        </div>
        
        
        <div>
          <h1></h1>
        </div>
      </div>
        <Button variant="contained" onClick={getjoke} size = 'large'>켜기</Button>
      <div>
        　
      </div>
      <div>
        <Button variant="contained" onClick={getjoke2} size='large'>끄기</Button>
      </div>
    </div>
  );
}



export default App;
