import  {Request, Response} from 'express';
import {employees} from '../../fakeData/employee.json';
import {Employee} from '../../models/employee';

export default ((req: Request, res: Response) => {
    const employeecreate : Employee = req.body;
    employees.push(employeecreate);
    res.status(201).json(employeecreate);
});