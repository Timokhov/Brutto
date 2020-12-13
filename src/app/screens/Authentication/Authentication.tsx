import React from 'react';
import {
    Avatar,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useAuthStyles } from './Authentication.styles';

const Authentication = () => {
    const classes = useAuthStyles();
    return (
        <div className={ classes.authentication }>
            <Paper className={ classes.paper } square>
                <Container component="main" maxWidth="xs">
                    <div className={ classes.formContainer }>
                        <Avatar className={ classes.avatar }>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={ classes.form } noValidate>
                            <TextField margin="normal"
                                       required
                                       fullWidth
                                       id="email"
                                       label="Email Address"
                                       name="email"
                                       autoComplete="off"
                                       autoFocus
                            />
                            <TextField margin="normal"
                                       required
                                       fullWidth
                                       name="password"
                                       label="Password"
                                       type="password"
                                       id="password"
                                       autoComplete="current-password"
                            />
                            <Grid container direction="column">
                                <Grid item>
                                    <Button type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={ classes.submit }>
                                        Sign In
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="secondary">
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </Paper>
        </div>
    );
};

export default Authentication;
