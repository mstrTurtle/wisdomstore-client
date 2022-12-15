import { Box, Container } from "@mui/system";
import { Fragment } from "react";
import Backend from "../components/backend";
import Detail from "../components/detail";
import NavBar from "../components/nav";

export default function Register() {
    return <Fragment>
     <Box>
        
        <Container maxWidth="sm">
        <NavBar></NavBar>
            <h1>后端</h1>
            <Backend></Backend>
           
        </Container>
    </Box></Fragment>
}