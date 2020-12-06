import React from 'react';
import { useField } from 'react-final-form';
import { TextField, TextFieldProps } from '@material-ui/core';


export const FormInput: React.FC<TextFieldProps & { name: string }> = ({ name, ...rest }) => {
    const { input, meta } = useField<TextFieldProps>(name);
    const {
        value,
        onChange,
        onBlur,
        onFocus,
    } = input;
    const error = ((meta.touched || meta.active) && meta.error);

    return (
        <TextField
            value={value}
            onChange={onChange}
            error={!!error}
            onBlur={onBlur}
            onFocus={onFocus}
            helperText={error}
            {...rest}
        />
    );
};
