import React, { Component } from 'react'
import Data from '../../static/data'
import formInput from '../../static/formData'
import './ScrumBoard.css'
import NavBar from './../nav copy/Navbar';
import MyTasks from '../Tasks/MyTasks';
import  AddTask  from './AddTask';
import Users from '../Users/Users';
import axios from 'axios';

export class ScrumBoard extends Component {

  constructor(props){
    super(props);
    
    this.state={
        data:formInput,
        isOpen:false,
        tasks:[]
    }
  }

  addTask=(task) => {
    task.id = Math.random().toString(36).slice(2,9)
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
  })
  }

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter(task =>{
      return task.id !== id
    })
    this.setState({
      tasks
    })
  }

  componentDidMount(){
    axios.get("http://liveapi.chatscrum.com/scrum/api/scrumgoals")
    .then(res => {
      console.log(res)
      this.setState({
        tasks:res.data,
      })
    })
  }

 
  render() {
    console.log('logged in as ', Data.fullname)

    return (
      <div className='scrumboard'>
      <NavBar />
        <p id='info'>Hello {Data.fullname}, Welcome to your scrumboard</p>

        <MyTasks data={this.state.tasks} deleteTask={this.deleteTask} />

        <AddTask addTask={this.addTask} />

        <Users />

      </div>
    )
  }
}

export default ScrumBoard