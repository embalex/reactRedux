import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Button } from '../Button';
import { Error } from './Error';



interface IProps {
    className?: string;

    onRouteToHome: () => void;
}

const useClasses = makeStyles((theme) => ({
    button: {
        width: theme.calculateSpacing(28),
        marginTop: theme.calculateSpacing(5),
    },
}));

export const ErrorNotFound: React.FC<IProps> = ({ onRouteToHome, className }) => {
    const classes = useClasses({});

    return (
        <Error
            title="Not found"
            description="Error code: 404"
            className={className}
        >
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={onRouteToHome}
            >
                Home
            </Button>
        </Error>
    );
};
