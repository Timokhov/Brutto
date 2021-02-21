import { useWindowWidth } from '@react-hook/window-size'

export const useIsMobile = () => {
  const screenWidth = useWindowWidth();

  return screenWidth < 1024
};
