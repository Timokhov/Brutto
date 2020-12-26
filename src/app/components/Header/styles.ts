import { makeStyles } from '@material-ui/core';
import { useIsMobile } from '../../hooks/useIsMobile';

export const useHeaderStyles = () => {
  const isMobile = useIsMobile();

  return makeStyles(theme => ({
    logo: {
      width: isMobile ? '4em' : '5em'
    },
    navigation: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    },
  }))();
}
