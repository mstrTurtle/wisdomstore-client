import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import MyModal from './modal';
import axios from 'axios';
export default function FormPropsTextFields({onSuccess}) {
  const [open, setOpen] = React.useState(false);
  var name = React.useRef('')
  var password = React.useRef('')
  var login = (name,password)=>{
        console.log(name)
        console.log(password)
        axios.get('http://localhost:8000/login',{
        params:{
            name:name,
            password:password,
        }
        }).then((resp)=>{
            setOpen(true) ;
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
        <div>登录成功!</div>
        <Button variant="contained" onClick={() => { setOpen(false);onSuccess(); }}>好</Button>
      </MyModal>
      <div>
        <TextField
          id="outlined-helperText"
          label="用户名"
          defaultValue="Default Value"
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