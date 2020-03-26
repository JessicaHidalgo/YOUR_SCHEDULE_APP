import express,{Router} from 'express';
import createEmployee from '../controllers/employees/create';
import deleteEmployee from '../controllers/employees/delete';
import listEmployees from '../controllers/employees/list';
import findByIds from '../controllers/employees/findbyId';
import updateEmployees from '../controllers/employees/update';
import LoginEmployees from '../controllers/employees/login';
const router : Router = express.Router();

router.post('/create', createEmployee);

router.delete('/delete/:id', deleteEmployee);

router.get('/list', listEmployees);

router.get('/find/:id',findByIds);

router.post('/update', updateEmployees);

router.post('/login', LoginEmployees);




export default router;