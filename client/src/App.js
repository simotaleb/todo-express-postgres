import React from 'react';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

  handleAddItem = (item) => {
   this.setState((state)=>{
     state.data = state.data.concat([item]);
   })
  }

  render(){
    return(
      <div>
          <h1>To Do App!</h1>
          <AddToDo onAddItem={this.handleAddItem}/>
          <ToDoList data={this.state.data}/>
      </div>
    );
  }
}