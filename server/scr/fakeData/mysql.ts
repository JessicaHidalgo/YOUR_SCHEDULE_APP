import mysql from 'mysql'
import {Request,Response} from 'express';
import bodyParser from 'body-parser';
import app from '../app';

const SELECT_ALL_TASKS_QUERY= 'SELECT * FROM timer;';

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database:'worktrack'
});

connection.connect(err=>{
  if (err){
    return err
}});

console.log(connection)

app.get('/tasks',(req,res)=>{
  connection.query(SELECT_ALL_TASKS_QUERY,(err,results)=>{
    if(err){
      return res.send(err)
    }
    else{
      return res.json({
        data:results
      })
    }
  })
})
