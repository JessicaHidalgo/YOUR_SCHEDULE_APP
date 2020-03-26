import express, {Request, Response} from 'express';
import {employees} from '../../fakeData/employee.json';
import {Employee} from '../../models/employee';

export default (req: Request, res: Response)=>{
    const employee : Employee = req.body;
    const index = employees.findIndex(e => e.id === employee.id);

    if(index < 0){
        return res.sendStatus(404);
    }

    employees.splice(index,1,employee);
    res.status(200).json(employee);
}