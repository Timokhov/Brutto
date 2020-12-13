import { makeStyles } from '@material-ui/core';

export const useAppStyles = () => {
    return makeStyles(theme => ({
        appGrid: {
            width: '100%',
            height: '100%'
        },
        content: {
            width: '100%',
            height: '100%'
        }
    }))();
}
