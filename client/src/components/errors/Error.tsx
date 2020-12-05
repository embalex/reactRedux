import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';


export interface IError {
    description: string;
    title: string;

    children?: React.ReactNode;
    className?: string;
}

const useClasses = makeStyles((theme) => ({
    root: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    title: {
        marginBottom: theme.calculateSpacing(2),
    },
}));

export const Error: React.FC<IError> = ({
    title,
    description,
    children,
    className,
}: IError) => {
    const classes = useClasses({});

    return (
        <div className={clsx(classes.root, className)}>
            <Typography variant="h5" className={classes.title}>{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            {children}
        </div>
    );
};
