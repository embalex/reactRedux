import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { makeStyles } from '@material-ui/core';

import { Button } from 'clientSrc/components';

import { MAX_YEAR, MIN_YEAR } from '../model';
import { validator } from './validator';
import { YearInput } from './YearInput';


interface IProps {
    onRequest: (value: unknown) => void;

    minYear?: number;
    maxYear?: number;
    minValue?: number;
    maxValue?: number;
}

const useClasses = makeStyles((theme) => ({
    root: {
        padding: theme.calculateSpacing(10),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: theme.calculateSpacing(28),
        marginTop: theme.calculateSpacing(5),
    },
    inputBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}));

export const Content: React.FC<IProps> = ({
    onRequest,
    minYear,
    maxYear,
}) => {
    const classes = useClasses();

    return (
        <FinalForm
            onSubmit={onRequest}
            validate={validator}
            initialValues={{
                min: String(minYear ?? MIN_YEAR),
                max: String(maxYear ?? MAX_YEAR),
            }}
            render={({ handleSubmit }) => (
                <div className={classes.root}>
                    <YearInput name="min" description="Year from" />
                    <YearInput name="max" description="Year to" />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Home
                    </Button>
                </div>
            )}
        />
    );
};
