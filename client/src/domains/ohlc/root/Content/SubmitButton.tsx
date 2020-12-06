import React from 'react';
import { useForm, useFormState } from 'react-final-form';
import { makeStyles } from '@material-ui/core';

import { Button } from 'clientSrc/components';



const useClasses = makeStyles((theme) => ({
    root: {
        width: theme.calculateSpacing(28),
        marginTop: theme.calculateSpacing(5),
    },
}));
export const SubmitButton: React.FC = () => {
    const classes = useClasses();
    const { submit } = useForm();
    const { invalid } = useFormState();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.root}
            onClick={submit}
            disabled={invalid}
        >
            Get candle range
        </Button>
    );
};
