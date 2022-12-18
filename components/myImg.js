import { Modal, Box } from "@mui/material";
import Button from "@mui/material";

export default function MyImg({ src }) {
    return <img src={src} style={'max-width:100%;max-height:100%;object-fit: contain'}/> 
}