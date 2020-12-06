import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Form, Typography } from 'clientSrc/components';


interface IProps {
    name: string;
    description: string;
}

const useClasses = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    description: {
        marginRight: theme.calculateSpacing(3),
        minWidth: theme.calculateSpacing(10),
    },
    inputField: {
        minHeight: theme.calculateSpacing(7),
    },
}));

export const YearInput: React.FC<IProps> = ({ name, description }) => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <Typography className={classes.description} variant="body1">
                {description}
            </Typography>
            <Form.Input className={classes.inputField} name={name} />
        </div>
    );
};
