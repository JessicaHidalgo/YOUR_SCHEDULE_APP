
import express from 'express';

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