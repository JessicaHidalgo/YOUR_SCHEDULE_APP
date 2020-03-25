import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useHistory, useParams } from "react-router";
const ListTasks = props => {
  const [tasks, setTasks] = React.useState([]);
  const history = useHistory();
  const {employee_id} = useParams();
  React.useEffect(() => {
    axios
      .get("http://localhost:9000/timer", {
        params: { employee_id }
      })
      .then(res => {
        setTasks(res.data.timers);
      });
  }, []);

  const onDelete = id => {
    axios
      .delete('http://localhost:9000/timer',{params:{task_id:id}})
      .then(response => {
        console.log(response);
        history.push("/Add");
      })
      .catch(err => console.log(err));
  };

  return (
    <ul>
      {tasks.map(task => (
        <div className='taskContainer'>
          <div>Title:{task.tittle}</div>
          <div>Description:{task.description}</div>
          <div>startDate:{task.star_date}</div>
          <div>endDate:{task.end_date}</div>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
  //onClick={this.deleteTask.bind(this,index)}
};

export default ListTasks;
