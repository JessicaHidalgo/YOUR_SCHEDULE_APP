import express from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employeeRoutes' ;
import taskRoutes from './routes/taskRouter';

const app : express.Application = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/employees',employeeRoutes);
app.use('/task',taskRoutes);

export default app;