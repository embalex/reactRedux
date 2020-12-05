import { createMuiTheme } from '@material-ui/core';

import { createSpacingCalculator } from './utils/spacing';


const MODULE_SIZE = 8;

export const theme = createMuiTheme({
    calculateSpacing: createSpacingCalculator(MODULE_SIZE),
});
