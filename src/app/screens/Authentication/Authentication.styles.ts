import { makeStyles } from '@material-ui/core';
import background from '../../../assets/background.png'

export const useAuthStyles = () => {
    return makeStyles(theme => ({
        authentication: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${ background })`,
            backgroundColor: theme.palette.primary.main
        },
        paper: {
            padding: theme.spacing(5),
            [theme.breakpoints.down('sm')]: {
                height: '100%',
                padding: theme.spacing(2)
            }
        },
        formContainer: {
            marginTop: theme.spacing(0),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(3),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
            padding: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    }))();
}
