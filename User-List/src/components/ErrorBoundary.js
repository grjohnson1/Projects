import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false, errorMessage: '' };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong:</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;