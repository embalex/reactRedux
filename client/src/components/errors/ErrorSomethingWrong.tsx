import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Button } from '../Button';
import { Error } from './Error';


interface IProps {
    className?: string;

    onRouteToHome: () => void;
    onRefresh: () => void;
}

const useClasses = makeStyles((theme) => ({
    buttonBlock: {
        marginTop: theme.calculateSpacing(4),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        width: theme.calculateSpacing(25),
        '&:not(:last-child)': {
            marginBottom: theme.calculateSpacing(2),
        },
    },
}));

export const ErrorSomethingWrong: React.FC<IProps> = ({
    onRouteToHome,
    onRefresh,
    className,
}) => {
    const classes = useClasses({});

    return (
        <Error
            title="Something went wrong"
            description="Unknown error"
            className={className}
        >
            <div className={classes.buttonBlock}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={onRouteToHome}
                >
                    Home
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={onRefresh}
                >
                    Refresh Page
                </Button>
            </div>
        </Error>
    );
};
