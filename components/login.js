import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import MyModal from './modal';
import axios from 'axios';
import { Router } from 'next/router';
export default function FormPropsTextFields({onSuccess,onFailure}) {
  const [open, setOpen] = React.useState(false);
  const [fail,setFail] = React.useState(false);
  var name = React.useRef('')
  var password = React.useRef('')
  var login = (name,password)=>{
        
        axios.get('myapi/login',{
        params:{
            name:name,
            password:password,
        }
        }).then((resp)=>{
            console.log(name)
            console.log(password)
            console.log('data:')
            console.log(resp.data)
            if(resp.data.status=='Ok'){
                setOpen(true) ;
                localStorage.setItem('user_id',resp.data.user_id)
                localStorage.setItem('user_name',resp.data.name)
                Router.reload(window.location.pathname);
            }else{
                setFail(true)
            }
        }).catch(function (error) {
            setFail(true)
            console.log(error);
        })
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <MyModal open={open}>
        <div>登录成功!</div>
        <Button variant="contained" onClick={() => { setOpen(false);onSuccess(); }}>好</Button>
      </MyModal>
      <MyModal open={fail}>
        <div>登录失败!</div>
        <Button variant="contained" onClick={() => { setFail(false) }}>好</Button>
      </MyModal>
      <div>
        <TextField
          id="outlined-helperText"
          label="用户名"
          defaultValue=""
          helperText="请输入账户名"
          inputRef={name}
        />
      </div><div>
        <TextField
          id="outlined-password-input"
          label="密码"
          type="password"
          autoComplete="current-password"
          inputRef={password}
        />
      </div>
      <div>
      <Stack direction={'row'} spacing={2}>
        <Button variant='contained' onClick={() => {login(name.current.value,password.current.value)}}>提交</Button>
        <Button variant='contained' onClick={() => {onSuccess() }}>取消</Button>
        </Stack>
      </div>

    </Box>
  );
}