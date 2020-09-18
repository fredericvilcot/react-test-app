import React, { PureComponent } from "react";

export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      hasError: false,
    };
  }

  componentDidMount = () => {
    this.setState({ count: 7777777777 });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.minCount !== this.props.minCount) {
      this.setState({ count: this.props.minCount ?? 0 });
    }
  };

  handleIncrement = () => {
    const { count } = this.state;
    const { maxCount } = this.props;
    if (count < maxCount) {
      this.setState({ count: count + 1, hasError: false });
    } else {
      this.setState({ hasError: true });
    }
  };

  handleDecrement = () => {
    const { count } = this.state;
    const { minCount } = this.props;
    if (count > minCount) {
      this.setState({ count: count - 1, hasError: false });
    } else {
      this.setState({ hasError: true });
    }
  };

  handleReset = () => {
    this.setState({ count: this.props.minCount, hasError: false });
  };

  render() {
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

        <div className="counter-error-message">
          {hasError && (
            <span>{`Hey Dude you can't go above ${this.props.maxCount} or less than ${this.props.minCount} ...`}</span>
          )}
        </div>
      </React.Fragment>
    );
  }
}
