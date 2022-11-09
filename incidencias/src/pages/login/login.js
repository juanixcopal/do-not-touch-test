import '../../styles/staff/login.css'
import React from "react";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Login = () => {
    const theme = createTheme();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            user: data.get('user'),
            password: data.get('password'),
        });
    }
    return (
        <ThemeProvider theme={theme} >
            <Container component="main" maxWidth='xs' >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
                        <LockPersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="user"
                            label="Usuario"
                            name="user"
                            autoComplete="user"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default Login;