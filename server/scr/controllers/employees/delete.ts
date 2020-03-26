import {Request, Response} from 'express';
import {employees} from '../../fakeData/employee.json';


export default (req: Request, res: Response)=>{
      const deleted : string = req.params.id;
      const deleteemployee: number = employees.findIndex(x => x.id === deleted);

      if (deleteemployee < 0){
          return res.sendStatus(404);
      }

      employees.splice(deleteemployee,1);
      res.sendStatus(200);

}