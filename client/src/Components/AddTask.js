import React,{Component} from 'react'
import {Row,Col,Button} from 'reactstrap'

class addTask extends Component {
    render (){
        return (
          <div>
              <br/>
              <h1>Add a Task</h1>
              <form onSubmit ={this.onSubmit.bind(this)}>
               <div className="input-field">

               </div>
              </form>
          </div>

        )
    
    
} 
}
export default addTask;