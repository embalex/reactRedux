import { MAX_YEAR, MIN_YEAR } from '../model';


interface IForm {
    min?: string;
    max?: string;
}

const fieldValidate = (value: string | undefined): string | null => {
    if (value === undefined) {
        return 'Required';
    }

    if (Number(value) < MIN_YEAR) {
        return `Should be >= ${MIN_YEAR}`;
    }

    if (Number(value) > MAX_YEAR) {
        return `Should be <= ${MAX_YEAR}`;
    }

    return null;
};


export const validator = (value?: IForm): {} => {
    const minFieldValidationError = fieldValidate(value?.min);
    const maxFieldValidationError = fieldValidate(value?.max);

    if ((minFieldValidationError !== null) || (maxFieldValidationError !== null)) {
        return {
            min: minFieldValidationError,
            max: maxFieldValidationError,
        };
    }

    return {};
};
