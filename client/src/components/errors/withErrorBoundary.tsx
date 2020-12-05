import React from 'react';

import { ErrorBoundary } from './ErrorBoundary';


export const withErrorBoundary = <P extends {}>(
    Component: React.ComponentType<P>,
    fallback: React.ElementType,
): React.FC<P> => {
    const WrappedComponent: React.FC<P> = (props: P): React.ReactElement<P> => (
        <ErrorBoundary fallback={fallback}>
            <Component {...props} />
        </ErrorBoundary>
    );

    WrappedComponent.displayName = `ErrorBoundary(${Component.displayName})`;

    return WrappedComponent;
};
