import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';


const useClasses = makeStyles(() => ({
    root: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export const Loader: React.FC = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
};
