import React, { PureComponent } from "react";

interface ICounterClassProps {
  minCount: number;
  maxCount: number;
}

interface ICounterClassState {
  count: number;
  hasError: boolean;
}

export default class CounterClass extends PureComponent<
  ICounterClassProps,
  ICounterClassState
> {
  constructor(props: ICounterClassProps) {
    super(props);

    this.state = {
      count: 0,
      hasError: false,
    };
  }

  public componentDidMount = () => {
    this.setState({ count: 77 });
  };

  public componentDidUpdate = (prevProps: ICounterClassProps) => {
    this.setState({ count: this.props.minCount ?? 0 });
  };

  private handleIncrement = () => {
    const { count } = this.state;
    const { maxCount } = this.props;
    if (count < maxCount) {
      this.setState({ count: count + 1, hasError: false });
    } else {
      this.setState({ hasError: true });
    }
  };

  private handleDecrement = () => {
    const { count } = this.state;
    const { minCount } = this.props;
    count > minCount
      ? this.setState({ count: count - 1, hasError: false })
      : this.setState({ hasError: true });
  };

  private handleReset = () => {
    this.setState({ count: this.props.minCount, hasError: false });
  };

  public render() {
    const { hasError, count } = this.state;
    return (
      <React.Fragment>
        <div className="counter">
          <p className="counter-title">{count}</p>
          <div className="counter-actions-container">
            <button
              className="counter-action"
              onClick={this.handleIncrement}
              type="button"
            >
              Increment
            </button>
            <button
              className="counter-action"
              onClick={this.handleDecrement}
              type="button"
            >
              Decrement
            </button>
            <button
              className="counter-action"
              onClick={this.handleReset}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
        {hasError && (
          <div className="counter-error-message">
            <span>{`Hey Dude you can't go above ${this.props.maxCount} or less than ${this.props.minCount} ...`}</span>
          </div>
        )}
      </React.Fragment>
    );
  }
}
