import {Request, Response} from 'express';
import {task} from '../../fakeData/task.json';


export default (req: Request, res: Response)=>{
    console.log(req.params.id)
      const deleted : string = req.params.id;
      const deletetask: number = task.findIndex(x => x.id === deleted);

      if (deletetask < 0){
          return res.sendStatus(404);
      }

      task.splice(deletetask,1);
      res.sendStatus(200);

}