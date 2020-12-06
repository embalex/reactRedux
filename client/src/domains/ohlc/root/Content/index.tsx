import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { makeStyles } from '@material-ui/core';

import { Button, Typography } from 'clientSrc/components';

import { MAX_YEAR, MIN_YEAR } from '../model';
import { IRange } from '../model/types';
import { validator } from './validator';
import { YearInput } from './YearInput';
import { SubmitButton } from './SubmitButton';


interface IProps {
    onRequest: (value: IRange) => void;

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
    maxValue,
    minValue,
}) => {
    const classes = useClasses();
    const candleRangeInfo = ((minValue !== undefined) && (maxValue !== undefined))
        ? (
            <Typography variant="body1">
                {`min Low = ${minValue}, max High = ${maxValue}`}
            </Typography>
        ) : null;

    return (
        <FinalForm
            onSubmit={(values) => {
                onRequest({
                    min: values.min !== undefined ? Number(values.min) : MIN_YEAR,
                    max: values.max !== undefined ? Number(values.max) : MAX_YEAR,
                });
            }}
            validate={validator}
            initialValues={{
                min: String(minYear ?? MIN_YEAR),
                max: String(maxYear ?? MAX_YEAR),
            }}
            render={({ handleSubmit }) => (
                <div className={classes.root}>
                    <YearInput name="min" description="Year from" />
                    <YearInput name="max" description="Year to" />
                    {candleRangeInfo}
                    <SubmitButton />
                </div>
            )}
        />
    );
};
