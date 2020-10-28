
import './App.css';
import React, { Component } from 'react';
import done from './checked.png';
import deleteicon from './trash.png';

class App extends Component {
  state = { input:"",
    tasks:[
      
    ]
   }


  adder = () =>{
    if(this.state.input!=""){
    this.setState({
      tasks:[...this.state.tasks,{
        id:this.state.tasks.length+1,
        task:this.state.input,
        status:0.3
      }],
      input:""
    
    })};
  }


  inputhandler = (e) => {
    this.setState({input:e.target.value});
  }





  delete = (e) => {
    
    this.setState({
      tasks:this.state.tasks.filter(task => task.id!=e.target.getAttribute("delhelper"))
    })
  }


  done = (e) => {
   let id = e.target.getAttribute("checkhelper");
    for(var i=0;i<this.state.tasks.length;i++){
      if(this.state.tasks[i].id == id){
        let tasks = [ ...this.state.tasks ];
        if(this.state.tasks[i].status == 0.3){
          
tasks[i] = {...tasks[i], status: 1};
this.setState({ tasks });
        }
        else{
          tasks[i] = {...tasks[i], status: 0.3};
this.setState({ tasks });
        }
      }
    }



  }
  
  


  render() {
    let taskrender; 
    if(this.state.tasks.length == 0){
      taskrender = <p className="notask">No tasks here</p>

    }
    else taskrender = (<div className="boxlist"> 
    {this.state.tasks.map(taskobj => (<div className="list">
              <div className="whattask text-left" style={{opacity:1.3-taskobj.status}}>
                 {taskobj.task}
              </div>
              <div className="icons"> 
                <img src={done} width="30" height=  "30" alt="marked done" id="done" checkhelper={taskobj.id} onClick={this.done} style={{opacity:taskobj.status}}/>
                  <img src={deleteicon} width="30" height="30" alt="delete task" id="delete" onClick={this.delete} delhelper={taskobj.id}/>
              </div>
          </div>))}
  </div>);
    return (
      <div className="container text-center">
      <h1 className="title">
        To-Do List

      </h1>
      <div className="form">

        <input type="text" placeholder="Enter a New Task" onChange={this.inputhandler} value={this.state.input}/>
        <button className="btn btn-success" id="addbtn" onClick={this.adder}>Add</button>
        
        </div>
        {taskrender}
    </div>
      );
  }
}
 
export default App;

