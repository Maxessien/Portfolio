'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowSize } from '../store/slices/windowSizeSlice';

export function WindowSizeListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return null;
}
