import React from 'react';

export default class ToDoList extends React.Component{
    constructor(props){
        super(props);
    }   
    render(){
        const list = [];
        let cpt = 0;
        this.props.data.forEach((item)=>{
            list.push(<li key={cpt}>{item}</li>);
            cpt++;
        });
        return(
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}