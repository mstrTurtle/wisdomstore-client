import { Button } from "@mui/material";
import Login from "./login";
import MyModal from "./modal";
import Register from "./register";
import React from "react";
import Router from "next/router";
export default function UserStatus({logined}) {

    const [login, setLogin] = React.useState(false)
    const [register, setRegister] = React.useState(false)

    return logined ? <>
        <p>用户在线</p>
    </>:<>
        <Button onClick={()=>{setLogin(true)}}>登录</Button>
        <Button onClick={()=>{setRegister(true)}}>注册</Button>
        <MyModal open={register}>
            <Register onSuccess={()=>{setRegister(false)}}></Register>
        </MyModal>
        <MyModal open={login}>
            <Login onSuccess={()=>{setLogin(false);Router.reload(window.location.pathname);}}></Login>
        </MyModal>
    </>
}