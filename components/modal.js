import { Modal, Box } from "@mui/material";
import Button from "@mui/material";

export default function MyModal({ children, open, onConfirm }) {
    return <Modal open={open} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ background:'white', padding:'3px', borderRadius:'3px' }}>
            {children}
        </Box>
    </Modal>
}