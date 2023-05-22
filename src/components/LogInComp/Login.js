import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import classes from '../LogInComp/Login.module.css';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center', backgroundColor: 'transparent'
}));

const Login = () => {

    // const initialValues = {username: "",password :""}

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [messageValidityUsername, setMessageValidityUsername] = useState('');
    const [messageValidityPassword, setMessageValidityPassword] = useState('');


    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        if (username.trim().length < 3){
            setMessageValidityUsername('Minimum 3 charachter requierd') 
        } 
        else {
            setMessageValidityUsername('');
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (password.trim().length < 3){
            setMessageValidityPassword('Minimum 3 charachter requierd');
        } else if(password.trim().length === ""){
            setMessageValidityPassword('Invalid');
        }  else if(password.trim().length > 8){
            setMessageValidityPassword('password can not exceed');
        }
        else {
            setMessageValidityPassword('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (username === 'username' && password === 'pass123') {
            console.log('Logged in successfully!');
            navigate('/App')

        } else {
            alert('Incorrect username or password');
        }


    };

    return (
        <Container maxWidth="sm">
            <Box sx={{mx: 'auto', flexGrow: 1, boxShadow: 3, borderRadius: 2, }} className={classes['form-wrapper']} noValidate
                autoComplete="off">
                <div className={classes.one}>
                    <h1>Log In</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item>
                                <TextField
                                    label="Username"
                                    type="text"
                                    id="username"
                                    helperText="Please enter your Username"
                                    variant="outlined"
                                    fullWidth
                                    value={username} onChange={handleUsernameChange}
                                />
                                <p style={{fontWeight:"bold"}} >{messageValidityUsername}</p>
                            </Item>
                        </Grid>

                        <Grid item xs={12}>
                            <Item>
                                <TextField
                                    label="Password"
                                    type="password"
                                    id="password"
                                    helperText="Please enter your Password"
                                    variant="outlined"
                                    fullWidth
                                    value={password} onChange={handlePasswordChange}
                                />
                                <p style={{fontWeight:"bold"}} >{messageValidityPassword}</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Button className={classes.submitBtn} variant="outlined" type="submit" value="Login">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
