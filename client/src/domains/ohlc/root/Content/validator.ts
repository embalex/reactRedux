import { MAX_YEAR, MIN_YEAR } from '../model';


interface IForm {
    min?: string;
    max?: string;
}

const yearValidate = (value: string | undefined): string | null => {
    if (value === undefined) {
        return null;
    }

    if (!Number.isInteger(Number(value))) {
        return 'Should be a integer';
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
    const minFieldValidationError = yearValidate(value?.min);
    const maxFieldValidationError = yearValidate(value?.max);

    if ((minFieldValidationError !== null) || (maxFieldValidationError !== null)) {
        return {
            min: minFieldValidationError,
            max: maxFieldValidationError,
        };
    }

    return {};
};
