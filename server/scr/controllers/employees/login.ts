
import express, { Request, Response } from 'express';
import { employees } from '../../fakeData/employee.json';
import { Employee } from '../../models/employee';

export default (req: Request, res: Response) => {
    const findId: Employee = req.body;
    const employeeIndex = employees.findIndex(e => e.email == findId.email);

    if (employeeIndex < 0) {
        return res.sendStatus(404);
    }
    //Esta es mi referencia de mi password real
    const realEmployee = employees[employeeIndex];
    if (realEmployee.password !== findId.password) {
        return res.sendStatus(401);
    }

    return res.status(200).json(realEmployee);
}
