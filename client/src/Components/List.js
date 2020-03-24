import React,{Component} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class listTasks extends Component {
constructor(props) {
    super(props);
    this.state ={
    tasks:[]
}}

componentDidMount(){
    console.log('Fetching');
    axios.get('http://localhost:9000/timer',{params:{employee_id:2}})
    .then(res=>{
        console.log(res);
        this.setState({tasks:res.data.timers})
    }
    )
}

/*componentDidMount(){axios({
    method: 'get',
    url: 'http://localhost:9000/timer',
    data: {
      employee_id: 1
    }
  }).then(res=>{
      this.setState({tasks:res.data})
  });
}
*/
deleteTask(){
    axios.delete(`http://localhost:9000/task/delete/${this.state.id}`)
}

onDelete = (id) => {
    axios.delete(`http://localhost:9000/task/delete/${id}`)
    .then(response =>{
        this.props.history.push('/Add')

    }).catch (err =>console.log(err));
}

render () {
 return (
      <ul>
          {this.state.tasks.map((task)=>
          <div>
              <div>Title:{task.tittle}</div>
              <div>Description:{task.description}</div>
              <div>startDate:{task.star_date}</div>
              <div>endDate:{task.end_date}</div>
          <button onClick={() => this.onDelete(task.id)} >Delete</button>
          </div>)}
      </ul>)
//onClick={this.deleteTask.bind(this,index)}
       };    
}


export default withRouter( listTasks);