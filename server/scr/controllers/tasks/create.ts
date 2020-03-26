import  {Request, Response} from 'express';
import {task} from '../../fakeData/task.json';
import {Tasks} from '../../models/task';

export default ((req: Request, res: Response) => {
    const taskcreate : Tasks = req.body;
    task.push(taskcreate);  
    res.status(201).json(taskcreate);
});