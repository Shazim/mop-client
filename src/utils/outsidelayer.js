import React, { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, close) {
  useEffect(() => {
    function handleClickOutside(event) {
      const targetClass =
        typeof event?.target?.className === 'string'
          ? event?.target.className
          : '';
      if (ref.current && !ref.current.contains(event.target)) {
        if (!targetClass?.includes('clickable')) close();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.close);

  return (
    <div className="w-100%" ref={wrapperRef}>
      {props.children}
    </div>
  );
}

export default OutsideAlerter;
