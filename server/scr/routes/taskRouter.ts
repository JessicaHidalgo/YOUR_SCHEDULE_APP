import express,{Router} from 'express';
import createTask from '../controllers/tasks/create';
import listTask from '../controllers/tasks/list';
import updateTask from '../controllers/tasks/update';
import deleteTask from '../controllers/tasks/delete';
//DRY principle 
const router : Router = express.Router();

router.post('/create', createTask);

router.get('/list',listTask);

router.post('/update',updateTask);

router.delete('/delete/:id',deleteTask);

export default router;