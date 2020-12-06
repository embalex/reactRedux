import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Button, Typography } from 'clientSrc/components';
import { ohlcModel } from 'clientSrc/domains/ohlc/root/model';
import {
    Error,
    makeContentResource,
    makeErrorResource,
    makeLoadingResource,
    makeUndefinedResource, useAction,
} from 'clientSrc/utils';


interface IProps {
    className?: string;
}

const useClasses = makeStyles((theme) => ({
    root: {
        height: theme.calculateSpacing(15),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        '&:not(:last-child)': {
            marginRight: theme.calculateSpacing(3),
        },
    },
}));

export const Footer: React.FC<IProps> = ({ className }) => {
    const classes = useClasses();
    const setReducedCandle = useAction(ohlcModel.action.setReducedCandle);
    const resourceValue = {
        year: {
            min: 2010,
            max: 2020,
        },
        value: {
            min: 10,
            max: 20,
        },
    };

    return (
        <div className={clsx(classes.root, className)}>
            <Typography variant="h6">
                Test panel. Press any key to test state
            </Typography>
            <div className={classes.buttons}>
                <Button
                    className={classes.button}
                    onClick={() => setReducedCandle(makeContentResource(resourceValue))}
                >
                    Set resource
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => setReducedCandle(makeLoadingResource())}
                >
                    Set loading
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => setReducedCandle(makeErrorResource(new Error.Argument('unknown')))}
                >
                    Set error
                </Button>
                <Button
                    className={classes.button}
                    onClick={() => setReducedCandle(makeUndefinedResource())}
                >
                    Set undefined
                </Button>
            </div>
        </div>
    );
};
