import express from 'express';
import setupMiddlewares from './middleware';
import setupRoutes from './routes';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
app.use(express.json());

export default app;
