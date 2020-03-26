import {Request, Response} from 'express';
import {employees} from '../../fakeData/employee.json';

export default(req: Request,res: Response)=>{
    res.status(200).json(employees);
};
