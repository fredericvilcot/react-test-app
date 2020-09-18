import React, { useEffect, useLayoutEffect, useState } from "react";

import "./counter.css";

export const CounterFunction = ({ maxCount, minCount }) => {
  const [count, setCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleIncrement = () => {
    if (count < maxCount) {
      setCount(count + 1);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleDecrement = () => {
    if (count > minCount) {
      setCount(count - 1);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleReset = () => {
    setCount(minCount);
    setHasError(false);
  };

  useEffect(() => {
    setCount(7777777777);
    return () => {
      setCount(0);
    };
  }, []);

  useLayoutEffect(() => {
    setCount(minCount);
  }, [minCount]);

  return (
    <React.Fragment>
      <div className="counter">
        <p className="counter-title">{count}</p>
        <div className="counter-actions-container">
          <button
            className="counter-action"
            onClick={handleIncrement}
            type="button"
          >
            Increment
          </button>
          <button
            className="counter-action"
            onClick={handleDecrement}
            type="button"
          >
            Decrement
          </button>
          <button
            className="counter-action"
            onClick={handleReset}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="counter-error-message">
        {hasError && (
          <span>{`Hey Dude tou can't go above ${maxCount} or less than ${minCount}`}</span>
        )}
      </div>
    </React.Fragment>
  );
};
