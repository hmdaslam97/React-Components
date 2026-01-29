import React, { useEffect, useRef, useState } from 'react';

  const CalculatingWidth = () => {
    const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
    const elementRef = useRef(null);
  
    useEffect(() => {
      const updateElementSize = () => {
        if (elementRef.current) {
          const { width, height } = elementRef.current.getBoundingClientRect();
          setElementSize({ width, height });
        }
      };
  
      window.addEventListener('resize', updateElementSize);
      updateElementSize();
  
      return () => {window.removeEventListener('resize', updateElementSize);};
    }, []);
  
    return (
      <div ref={elementRef}>
        <p>Element width: {elementSize.width}px</p>
        <p>Element height: {elementSize.height}px</p>
      </div>
    );
  };
  
export default CalculatingWidth
