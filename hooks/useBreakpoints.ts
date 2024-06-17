import { useState, useEffect } from 'react';

interface SizeType {
  only: boolean;
  down: boolean;
  up: boolean;
}

const useBreakpoints = () => {
  const [isFk, setIsFk] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isTk, setIsTk] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isHd, setIsHd] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isXxl, setIsXxl] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isXl, setIsXl] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isLg, setIsLg] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isMd, setIsMd] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isSm, setIsSm] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });
  const [isXs, setIsXs] = useState<SizeType>({
    only: false,
    down: false,
    up: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsFk({
        only: window.innerWidth > 2560 && window.innerWidth <= 3840,
        down: window.innerWidth <= 3840,
        up: window.innerWidth > 2560,
      });
      setIsTk({
        only: window.innerWidth > 1920 && window.innerWidth <= 2560,
        down: window.innerWidth <= 2560,
        up: window.innerWidth > 1920,
      });
      setIsHd({
        only: window.innerWidth > 1600 && window.innerWidth <= 1920,
        down: window.innerWidth <= 1920,
        up: window.innerWidth > 1600,
      });
      setIsXxl({
        only: window.innerWidth > 1366 && window.innerWidth <= 1600,
        down: window.innerWidth <= 1600,
        up: window.innerWidth > 1366,
      });
      setIsXl({
        only: window.innerWidth > 1200 && window.innerWidth <= 1366,
        down: window.innerWidth <= 1366,
        up: window.innerWidth > 1200,
      });
      setIsLg({
        only: window.innerWidth > 1024 && window.innerWidth <= 1200,
        down: window.innerWidth <= 1200,
        up: window.innerWidth > 1024,
      });
      setIsMd({
        only: window.innerWidth > 768 && window.innerWidth <= 1024,
        down: window.innerWidth <= 1024,
        up: window.innerWidth > 768,
      });
      setIsSm({
        only: window.innerWidth > 480 && window.innerWidth <= 768,
        down: window.innerWidth <= 768,
        up: window.innerWidth > 480,
      });
      setIsXs({
        only: window.innerWidth <= 480,
        down: window.innerWidth <= 480,
        up: true,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isFk, isTk, isHd, isXxl, isXl, isLg, isMd, isSm, isXs };
};

export default useBreakpoints;
