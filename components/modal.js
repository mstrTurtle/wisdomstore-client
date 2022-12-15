import { Modal, Box } from "@mui/material";
import Button from "@mui/material";

export default function MyModal({ children, open, onConfirm }) {
    return <Modal open={open} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{  }}>
            {children}
        </Box>
    </Modal>
}