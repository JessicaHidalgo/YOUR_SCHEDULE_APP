
import express, {Request, Response} from 'express';
import {task} from '../../fakeData/task.json';
import {Tasks} from '../../models/task';

export default (req: Request, res: Response)=>{
    const taskvariable: Tasks = req.body;
    const index = task.findIndex(e => e.id === taskvariable.id);

    if(index < 0){
        return res.sendStatus(404);
    }

   task.splice(index,1,taskvariable);
    res.status(200).json(taskvariable);
}


