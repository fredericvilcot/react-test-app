import React, { useEffect, useLayoutEffect, useState } from "react";

import "./counter.css";

interface ICounterFunctionProps {
  maxCount: number;
  minCount: number;
}

export const CounterFunction: React.FC<ICounterFunctionProps> = (
  props: ICounterFunctionProps
) => {
  const [count, setCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleIncrement = (): void => {
    if (count < props.maxCount) {
      setCount(count + 1);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleDecrement = (): void => {
    if (count > props.minCount) {
      setCount(count - 1);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleReset = (): void => {
    setCount(props.minCount);
    setHasError(false);
  };

  useEffect(() => {
    setCount(77);
    return () => {
      setCount(0);
    };
  }, []);

  useLayoutEffect(() => {
    setCount(props.minCount);
  }, [props.minCount]);

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
      {hasError && (
        <div className="counter-error-message">
          <span>{`Hey Dude you can't go above ${props.maxCount} or less than ${props.minCount}`}</span>
        </div>
      )}
    </React.Fragment>
  );
};
