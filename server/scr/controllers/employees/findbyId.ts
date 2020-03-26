import express, {Request, Response} from 'express';
import {employees} from '../../fakeData/employee.json';
import {Employee}  from '../../models/employee';

export default ((req: Request, res: Response) => {
      const id: string = req.params.id;
      const employeefound : Employee = employees.find(employee => employee.id === id);

      if (!employeefound){
          return res.sendStatus(404);
      }

      res.status(200).json(employeefound);

});