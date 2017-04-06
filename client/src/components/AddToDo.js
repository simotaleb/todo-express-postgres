import React from 'react';
import axios from 'axios';
let index = 0;

const api_todos = 'http://localhost:3500//api/v1/todos';
export default class AddToDo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            index: index,
            item: '',
            errorMessage: ''
        }
    }
     /*addItem = () => {
        
        index++;
        console.log(index);
        console.log('axiossss');
        console.log(this.state.item);
        axios.post('http://localhost:3500/api/v1/todos',{index:this.index, task:this.state.item})
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
     }*/
     async addItem() {
         this.index++;
         fetch('http://localhost:3500/api/v1/todos',{
             method: 'POST',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                 
                    'index': this.state.index,
                    'text': this.state.item
                
            })
            
         }).then((response)=> {
                console.log(response);
            });
     }
     async getdata(){
         try{
             let response = await fetch('http://localhost:3500/api/v1/todos');
             let responseJSON = await response.json();
             console.log(responseJSON);
         }catch(error){
             console.log(error);
         }
     }

    handleTaskChange = (event) => this.setState({item: event.target.value});
    handleAddClick = (event) => {
       if(this.state.item.length===0){
           this.setState({errorMessage: 'Task cannot be empty'});
       }else{
            index++;
            this.setState({index: index});
            console.log(this.state.index)
            let item = {index: this.state.index, task: this.state.item};
            this.props.onAddItem(this.state.item);
            this.setState({item: '', errorMessage: ''});
            this.addItem();
            this.getdata();
            console.log('done');
            
       }
        
            
    }
    render(){
        return(
            <div>
                <label>Task:</label>
                <input type="text" value={this.state.item} placeholder="TASK" onChange={this.handleTaskChange}/>
                <label style={{color: 'red'}}>{this.state.errorMessage}</label>
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        );
    }
}