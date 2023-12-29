// src/App.js
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function GridM() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Paper>Item 1</Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Paper>Item 2</Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Paper>Item 2</Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Paper>Item 2</Paper>
            </Grid>
        </Grid>
    );
}

export default GridM;
