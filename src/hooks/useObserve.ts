import { useEffect, useCallback, useRef, useState } from 'react';

const useObServe = (observTarget: { current: any }, isLoading = false): number => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [page, setPage] = useState<number>(1);

  const obsHandler = useCallback((entries: any[]) => {
    const TARGET = entries[0];
    if (TARGET.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const TARGET = observTarget.current;
    if (TARGET && !isLoading) {
      observer.current = new IntersectionObserver(obsHandler, {
        rootMargin: '120px',
        threshold: 1,
      });
      observer.current.observe(TARGET);
    }
    return () => {
      if (!isLoading) {
        TARGET && observer.current?.unobserve(TARGET);
      }
    };
  }, [page, isLoading, obsHandler, observTarget]);

  return page;
};
export default useObServe;
