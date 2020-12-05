import React from 'react';


interface IProps {
    children: React.ReactNode;
    fallback: React.ElementType;
    onLogError?: (error: Error, errorInfo?: React.ErrorInfo) => void;
}

interface IState {
    hasError: boolean;
}

/**
 * Error boundaries do not catch errors for:
 *
 * Event handlers
 * Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
 * Server side rendering
 * Errors thrown in the error boundary itself (rather than its children)
 */
export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): IState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        const { onLogError } = this.props;
        if (onLogError) {
            onLogError(error, errorInfo);
        }
    }

    render(): React.ReactNode {
        const { children, fallback: Fallback } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return <Fallback />;
        }

        return children;
    }
}
