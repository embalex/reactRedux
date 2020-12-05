import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';



const useClasses = makeStyles(() => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {},
    body: {
        flexGrow: 1,
    },
    footer: {},
}));

interface IProps {
    header: React.ReactNode;
    body: React.ReactNode;
    footer: React.ReactNode;

    className?: string;
    classes?: ReturnType<typeof useClasses>;
}


export const LayoutMain: React.FC<IProps> = ({
    header,
    body,
    footer,
    className,
    classes: passedClasses,
}) => {
    const classes = useClasses({ classes: passedClasses });

    return (
        <div className={clsx(classes.root, className)}>
            <div className={classes.header}>{header}</div>
            <div className={classes.body}>{body}</div>
            <div className={classes.footer}>{footer}</div>
        </div>
    );
};


