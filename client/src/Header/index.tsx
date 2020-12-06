import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Typography } from 'clientSrc/components';


interface IProps {
    className?: string;
}

const useClasses = makeStyles((theme) => ({
    root: {
        height: theme.calculateSpacing(5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export const Header: React.FC<IProps> = ({ className }) => {
    const classes = useClasses();

    return (
        <div className={clsx(classes.root, className)}>
            <Typography variant="h6">
                React & redux test project
            </Typography>
        </div>
    );
};
