import {Request, Response} from 'express';
import {task} from '../../fakeData/task.json';

export default(req: Request,res: Response)=>{
    res.status(200).json(task);
};