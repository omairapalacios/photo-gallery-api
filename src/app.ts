import express from 'express';
import morgan from 'morgan';
import path from 'path';

import indexRoutes from './routes/index';

const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.use(express.json());

// middlewares

app.use(morgan('dev'));
app.use('/api', indexRoutes);

// store public file

app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
