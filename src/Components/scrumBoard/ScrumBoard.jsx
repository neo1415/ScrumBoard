import React, { Component } from 'react'
import Data from '../../static/data'
import './ScrumBoard.css'

export class ScrumBoard extends Component {

  constructor(){
    super()
    
    this.state={
        data:Data,
        isOpen:false,
        tasks:null
    }
  }

  openModal=()=>{
    this.setState({
        isOpen:true
    })
  }

  closeModal=()=>{
    this.setState({
        isOpen:false
    })
  }

  handleChange=(e)=>{
    this.setState({
        tasks:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
        isOpen:false
    })
  }



  render() {
    console.log('logged in as ', Data.fullname)

    return (
      <div className='scrumboard'>
        <nav>
            <h1>CHATSCRUM</h1>
            <div className='var'>
                <p>User Type: {Data.usertype}</p>
                <p>Project Name:{ Data.projectname}</p>
            </div>
        </nav>

        <p id='info'>Hello {Data.fullname}, Welcome to your scrumboard</p>

        <div className='container'>
            <div className='weekly box'>
                <h3>Weekly Task</h3>
                <p id='box'>{this.state.tasks}</p>
            </div>
            <div className='daily box'>
                <h3>Daily Target</h3>
            </div>
        </div>

        <div id='modal' className={this.state.isOpen ? "show" : "hidden"}>
            <div className='header'>
                <h3>Add a new task</h3>
                <h3 id='close' onClick={()=>this.closeModal()}>X</h3>
            </div>

            <form onSubmit={this.handleSubmit}> 
                <input type='text' onChange={this.handleChange} />
                <button>Confirm</button>
            </form>
        </div>
        <button className='add' onClick={() => this.openModal()}>ADD TASK</button>
      </div>
    )
  }
}

export default ScrumBoard