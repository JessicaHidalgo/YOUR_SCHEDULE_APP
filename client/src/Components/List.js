import React from "react";
import {Button} from 'reactstrap';
import axios from "axios";
import moment from 'moment';
import { useHistory, useParams } from "react-router";


//variable for my url

const url ='http://localhost:9000/timer';
const ListTasks = props => {
  const [tasks, setTasks] = React.useState([]);
  const history = useHistory();
  const {employee_id} = useParams();
  React.useEffect(() => {
    axios
      .get(url, {
        params: { employee_id }
      })
      .then(res => {
        setTasks(res.data.timers);
      });
  }, []);

  const onDelete = id => {
    axios
      .delete(url,{params:{task_id:id}})
      .then(response => {
        console.log(response);
        let newTaskarray = tasks.filter((task)=>{
            return  task.id != id 
        })
        setTasks(newTaskarray)
        
      })
      .catch(err => console.log(err));
  };

  return (
    <ul>
      {tasks.map(task => (
        <div className='taskContainer'>
          <div><h6>Title:</h6>{task.tittle}</div>
          <div><h6>Description:</h6>{task.description}</div>
         
          <div><h6>Start Date:</h6>{moment(task.star_date).format('YYYY-MM-DD')}</div>
          <div><h6>End Date:</h6>{moment(task.end_date).format('YYYY-MM-DD')}</div>
          <Button outline color="danger" onClick={() => onDelete(task.id)}>Delete</Button>
        </div>
      ))}
    </ul>
  );
 
};

export default ListTasks;
