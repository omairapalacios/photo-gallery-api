import express from 'express';

const app = express();


// settings
app.set('port',process.env.PORT || 4000);

export default app;