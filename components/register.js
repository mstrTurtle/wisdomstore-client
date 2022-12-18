import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import MyModal from './modal';
import axios from 'axios';
export default function FormPropsTextFields({onSuccess}) {
  const [open, setOpen] = React.useState(false);
  const [fail,setFail] = React.useState(false);
  var name = React.useRef('')
  var password = React.useRef('')
  var email = React.useRef('')

  var register = (name,password,email)=>{
    console.log(name)
    console.log(password)
    console.log(email)
    axios.get('/myapi/register',{
      params:{
        name:name,
        password:password,
        email:email,
        role:'common',
      }
    }).then((resp)=>{
      if(resp.data.status=='Ok'){
          setOpen(true) ;
          localStorage.setItem('user_id',resp.data.user_id)
      }else{
          setFail(true)
      }
    }).catch(function (error) {
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
        <div>注册成功!</div>
        <Button variant="contained" onClick={() => { setOpen(false);onSuccess(); }}>好</Button>
      </MyModal>
      <MyModal open={fail}>
        <div>注册失败!</div>
        <Button variant="contained" onClick={() => { setFail(false) }}>好</Button>
      </MyModal>
      <div>
        <TextField
          id="outlined-helperText"
          label="用户名"
          helperText="请输入良好账户名"
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
      </div><div>
        <TextField
          id="outlined-input"
          label="邮箱"
          inputRef={email}
        />
      </div>
      <div>
        <Stack direction={'row'} spacing={2}>
        <Button variant='contained' onClick={() => {register(name.current.value,password.current.value,email.current.value)}}>提交</Button>
        <Button variant='contained' onClick={() => {onSuccess() }}>取消</Button>
        </Stack>
      </div>

    </Box>
  );
}