import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      description: "",
      startDate: new Date(),
      endDate: new Date()
    }
  }

  onChange= (e)=>{
    const {name, value}= e.target;
    this.setState({
      [name]: value
    });
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };
  onSubmit = (e)  =>{
    e.preventDefault();
    const {task} = this.state;
    axios.post('http://localhost:9000/employee/create',{id: new Date().valueOf().toString(),task})
  }


  render() {

    const { description, startDate, endDate } = this.state;
    return (
      <>
         
        <td>
          
          <label>Description</label>
          <div>
            <input onChange={this.onChange} value={description} name="description"></input>
          </div>
        </td>
           <td>
            <label>Start Date</label>
          <div>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              value={startDate}
              name="startDate"
            />
          </div>
        </td>
        <td>
          <label>End Date</label>
          <div>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              value={endDate}
              name="endDate"
            />
          </div>
        </td>
        <td>
          <button onSubmit={this.onSubmit} >Submit</button>
        </td>
      </>
    );
  }
}

export default Add;
