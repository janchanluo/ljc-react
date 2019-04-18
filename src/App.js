import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem'
class App extends Component {
    constructor(prop){
        super(prop);
        this.state={
            list:["hello","world"],
            val:''
        }
        this.addChange=this.addChange.bind(this)
    }
    addClick(){
        const list =[...this.state.list,this.state.val]
        this.setState({
            list
        })
        this.state.val=''
    }
    addChange(ev){
        this.setState({
            val : ev.target.value
        })
    }
    del(index){
        const list = [...this.state.list];
        console.log(index)
        list.splice(index,1)
        this.setState({
            list
        })
    }
    render() {
        return ( <div className = "App" >
            <input type = "text" onChange={this.addChange}  value={this.state.val}/ >
            <button className="btn" onClick={this.addClick.bind(this)}>点击</button>
                <ul>
                    {
                       this.state.list.map((item,index)=>{
                        return <TodoItem content={item} key={index} index={index}  del ={this.del.bind(this)}/>
                    })
                    }
                    
                </ul>
              
            </div>

        );
    }
}
export default App;