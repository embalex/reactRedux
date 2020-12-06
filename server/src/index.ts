import express from 'express';

import { controller } from './controller';
import { Error } from './error';

// Require использую потому что нет типизации на параметры и по уму их надо пробрасывать через окружение.
const SETTINGS = require('../../constants.js');


const app = express();

app.use('/api', controller.ohlc);
app.use(Error.handler);

const port = SETTINGS.SERVER_PORT ?? 3001;
app.listen(port, () => {
    console.log(`Service started at http://localhost:${port}`);
});
