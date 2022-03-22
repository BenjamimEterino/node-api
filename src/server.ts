import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routes from './routes';
import env from './config/env';

const app = express();

app.use(cors());

app.use(express.json())

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(env.port, () => {
    console.log(`Server started on port ${env.port}!`);
});

