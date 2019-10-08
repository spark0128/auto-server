/**
 * External dependencies
 */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

/**
 * Internal dependencies
 */
import './db';
import getUserRoutes from './routes/users';
import getCarRoutes from './routes/cars';
import getBrandRoutes from './routes/brands';
import getAuthRoutes from './routes/auth';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
getAuthRoutes(app);
getUserRoutes(app);
getCarRoutes(app);
getBrandRoutes(app);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`The app is listening on ${port}`);
});
