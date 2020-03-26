import express, { request } from 'express';
import entryPoint from './scr/app';
import cors from 'cors';
const mysql =require('mysql');

var fs = require('fs');



const app: express.Application = express();
const port: number = 9000;

app.use(entryPoint);
app.use(cors());

app.listen(port, () => {
    console.log('Servidor iniciado' + port );
});

var connection  = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'worktrack'
   
});
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});




//Auth
const SELECT_AUTH_EMPLOYEE_QUERY='SELECT * FROM employee WHERE email = ? AND password = ?';

app.post('/auth', function(request, response) {
    console.log(connection);
    var email = request.body.email;
    var password = request.body.password;
    
	if (email && password) {
		connection.query(SELECT_AUTH_EMPLOYEE_QUERY, [email, password], function(error, results) {
            console.log(results);
			if (results.length > 0) {
				
                const res = {statuscode:200, employee:{'employee_id':results[0].id,'email':results[0].email}}
				response.send(res);
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

const SELECT_TIMER_BY_EMPLOYEE_QUERY='SELECT EMPLOYEE.ID, EMAIL,TIMER.* FROM TIMER INNER JOIN EMPLOYEE ON EMPLOYEE.ID= TIMER.EMPLOYEE_ID WHERE TIMER.EMPLOYEE_ID = ? ';
//INNER JOIN
app.get('/timer', function(request, response) {
    console.log (request);
    var employee_id = request.query.employee_id;
	
	if (employee_id) {
		connection.query(SELECT_TIMER_BY_EMPLOYEE_QUERY, [employee_id], function(error, results) {
            console.log(results);
			if (results!= undefined && results.length >0) {
				
                const res = {statuscode:200,'timers':results}
				response.send(res);
			} else {
				response.send({statuscode:200,Error: 'tasks not found'});
			}			
			response.end();
		});
	} else {
		response.send('Please !');
		response.end();
	}
});

const SELECT_ALL_EMPLOYEES_QUERY= 'SELECT * FROM employee';

console.log(connection)
app.get('/employee',(req,res)=>{
    connection.query(SELECT_ALL_EMPLOYEES_QUERY,(err,results)=>{
        if(err){
            return res.send(err)
        }else {
            return res.json ({
                data:results
            })
        }
    })
});
//INSERT TO TIMER

//const INSERT_TASKS_QUERY ='INSERT INTO timer (tittle,description,star_date,end_date,employee_id) VALUES (?)“, [timervariables]'
const INSERT_TASKS_QUERY ='INSERT INTO timer SET ?';
//INSERT INTO TIMER 

app.post('/timer',(req,res)=>{

    var timervariables=req.body;
    
    connection.query(INSERT_TASKS_QUERY,timervariables, (err,results)=>{
        if(err){
            return res.send(err)
        }else{
            return res.send('successfully added task');
        }
    })
});

//DELETE TASK 
const DELETE_TASK_BY_TASK_ID_QUERY='DELETE FROM TIMER WHERE ID=? ';

app.delete('/timer', function(request, response) {
    console.log (request);
    var task_id = request.query.task_id;
	
	if (task_id) {
		connection.query(DELETE_TASK_BY_TASK_ID_QUERY, [task_id], function(error, results) {
            console.log(results);
			if (results!= undefined) {
				
                const res = {statuscode:200,'timers':results}
				response.send(res);
			} else {
				response.send({statuscode:404,Error: 'tasks not found'});
			}			
			response.end();
		});
	} else {
		response.send('Please, specify  the task id in the URL!');
		response.end();
	}
});
