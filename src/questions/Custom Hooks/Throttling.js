import { useEffect } from 'react';
import { useRef, useCallback } from 'react';

// Custom hook to throttle function calls
function useThrottle(callback, delay) {
  // Ref to store the timestamp of the last call
  const lastCall = useRef(0);

  return useCallback((...args) => {
    // Get the current timestamp
    const now = Date.now();
    // Check if the time since the last call is greater than the delay
    if (now - lastCall.current >= delay) {
      // Update the last call timestamp
      lastCall.current = now;
      // Call the provided callback function with the arguments
      callback(...args);
    }
  }, [callback, delay]);
}


export default function Throttling() {
  // Throttled scroll handler to limit the frequency of scroll position logging
  const handleScroll = useThrottle(() => {
    console.log('Scroll position:', window.scrollY);
    // Perform expensive operation like API call or DOM update
  }, 1000); // Throttle delay set to 1000 milliseconds

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <div style={{ height: '200vh' }}>Scroll down to see the effect!</div>;
}
