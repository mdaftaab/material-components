// src/App.js
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function DrawerM() {
    const [open, setOpen] = useState(false);

    const handleToggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={handleToggleDrawer}>Toggle Drawer</Button>
            <Drawer anchor="left" open={open} onClose={handleToggleDrawer}>
                <div>Drawer Content</div>
            </Drawer>
        </div>
    );
}

export default DrawerM;
