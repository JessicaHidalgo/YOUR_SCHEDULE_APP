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
    axios.get('http://localhost:9000/task/list')
    .then(res=>{

        this.setState({tasks:res.data})
    })
}

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
              <div>Tittle:{task.tittle}</div>
              <div>Description:{task.description}</div>
              <div>startDate:{task.startDate}</div>
              <div>endDate:{task.endDate}</div>
          <button onClick={() => this.onDelete(task.id)} >Delete</button>
          </div>)}
      </ul>)
//onClick={this.deleteTask.bind(this,index)}
       };    
}


export default withRouter( listTasks);