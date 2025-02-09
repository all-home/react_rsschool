import React from 'react';
import FallbackUI from './FallbackUI'; // Adjust the path as necessary

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('Error caught by ErrorBoundary:', error); // Log the error
    return {
      hasError: true,
      errorMessage: error.message || 'Something went wrong.',
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error logged:', error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <FallbackUI
          errorMessage={this.state.errorMessage}
          onRefresh={this.handleRefresh}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
