import React, { Component } from 'react'
import './Form.css';

export class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:"",
            eMail:"",
            gender:'',
            contactNo:'',
            message:'',
        }
    }
    handelUsernameChange=(event)=>{
        this.setState({
            userName:event.target.value
        })

    }
    handelMessage=(event)=>{
        this.setState({
            message:event.target.value
        })
    }
    handelGender=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
    handelContactNo=(event)=>{
        this.setState({
            contactNo:event.target.value
        })
    }
    handelEmail=(event)=>{
        this.setState({
            eMail:event.target.value
        })
    }
    handelSubmit=(event)=>{
        console.log(`${this.state.userName}`)
        console.log(`${this.state.eMail}`)
        console.log(`${this.state.contactNo}`)
        console.log(`${this.state.gender}`)
        console.log(`${this.state.message}`)
        event.preventDefault()
    }
  render() 
  {
    return (
        <form onSubmit={this.handelSubmit}>
            <div>
                <h1>FORM</h1>
                <label>Name</label>
                <input type='text' value={this.state.userName} onChange={this.handelUsernameChange}/>  
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={this.state.eMail} onChange={this.handelEmail}></input>
            </div>
            <div>
                <label>Contact No</label>
                <input type="text" value={this.state.contactNo} onChange={this.handelContactNo}></input>
            </div>
            <div>
                <label>Gender</label>
                <select value={this.state.gender} onChange={this.handelGender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div>
                <label>Message</label>
                <textarea value={this.state.message} onChange={this.handelMessage}></textarea>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form