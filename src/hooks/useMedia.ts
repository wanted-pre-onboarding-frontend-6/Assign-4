import { useMediaQuery } from 'react-responsive';
import { size } from 'styles/media';

type useMediaHook = {
  isPc: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export const useMedia = (): useMediaHook => {
  const isPc = useMediaQuery({
    query: `(min-width:${size.desktopS}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width:${size.tablet}px) and (max-width:${size.desktopS}px)`,
  });
  const isMobile = useMediaQuery({
    query: `(max-width:${size.mobileL}px)`,
  });

  return { isPc, isTablet, isMobile };
};
