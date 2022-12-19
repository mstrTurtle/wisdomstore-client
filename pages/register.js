import FormPropsTextFields from "../components/register";
import { Box, Container } from "@mui/system";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from "react";
import MyModal from "../components/modal";

export default function Register() {
    return <Box>
        <Container maxWidth="sm">
            <h1>注册</h1>
            <FormPropsTextFields></FormPropsTextFields>
        </Container>
    </Box>
}