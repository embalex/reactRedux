import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import { ISpacing } from './theme/utils/spacing';


declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        calculateSpacing: ISpacing;
    }
    interface ThemeOptions {
        calculateSpacing: ISpacing;
    }
}
