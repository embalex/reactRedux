import express from 'express';

import { controller } from './controller';
import { Error } from './error';


const app = express();

app.use('/api', controller.ohlc);
app.use(Error.handler);

const port = 3000;
app.listen(port, () => {
    console.log(`Service started at http://localhost:${port}`);
});
