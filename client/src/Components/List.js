import React,{Component} from 'react';
import {Row,Col,Container} from 'reactstrap';
import axios from 'axios';

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
        console.log(res);
        this.setState({tasks:res.data})
    })
}
render () {
 return (
      <ul>
          {this.state.tasks.map(task=><li>{task.tittle}</li>)}
      </ul>)

       };    
}


export default listTasks;