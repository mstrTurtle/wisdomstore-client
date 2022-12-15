import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MyModal from './modal';
export default function FormPropsTextFields() {
  const [open, setOpen] = React.useState(false);
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
                <Button variant="contained" onClick={() => { setOpen(false) }}>好</Button>
            </MyModal>
        <div>
        <TextField
          id="outlined-helperText"
          label="用户名"
          defaultValue="Default Value"
          helperText="请输入良好账户名"
        />
        </div><div>
         <TextField
          id="outlined-password-input"
          label="密码"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div>
            <Button variant='contained' onClick={()=>setOpen(true)}>提交</Button>
        </div>

    </Box>
  );
}