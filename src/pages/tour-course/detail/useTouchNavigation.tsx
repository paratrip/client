import { useState, useRef } from 'react';

const useTouchHandling = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>): void => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>): void => {
    currentY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (): void => {
    const diff = startY.current - currentY.current;
    if (Math.abs(diff) > 50) {
      setIsMinimized(diff > 0 ? false : true);
    }
  };

  return { isMinimized, handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useTouchHandling;
