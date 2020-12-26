import React, { useCallback, useState } from 'react';
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
import { useAuthStyles } from './styles';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../store/auth/flows';

const Authentication = () => {
  const classes = useAuthStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submit = useCallback((event: React.FormEvent) => {
    dispatch(authenticate(email, password));
    event.preventDefault();
  }, [email, password]);

  return (
    <div className={classes.authentication}>
      <Paper className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <div className={classes.formContainer}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={submit}>
              <TextField margin="normal"
                         fullWidth
                         id="email"
                         label="Email Address"
                         name="email"
                         autoComplete="off"
                         autoFocus
                         value={email}
                         onChange={(event) => setEmail(event.target.value)}
              />
              <TextField margin="normal"
                         fullWidth
                         name="password"
                         label="Password"
                         type="password"
                         id="password"
                         autoComplete="current-password"
                         value={password}
                         onChange={(event) => setPassword(event.target.value)}
              />
              <Grid container direction="column">
                <Grid item>
                  <Button className={classes.submit}
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary">
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
