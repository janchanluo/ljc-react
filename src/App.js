import React, { Component } from 'react';
import { BrowserRouter, Router,Route, Link,IndexLink,withRouter,Switch} from "react-router-dom";
import './App.css';
import TodoItem from './TodoItem'
import Welcome from './component/Welcome'
import List from './component/List'
class App extends Component {
    constructor(prop){
        super(prop);
        this.state={
            list:["hello","world"],
            val:'',
            listA:['1','2','3','5'],
            lists:[]
        }
        this.addChange=this.addChange.bind(this)
    }
    componentDidMount() {
        fetch( 'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/')
        .then(res=>res.json())
        .then(data => {
            console.log(data)
          })
    }
    componentWillUnmount() {
    }
    addClick(){
        const list =[...this.state.list,this.state.val]
        this.setState({
            list,
            val:''
        })
    }
    forClick(){
       this.setState((state,props)=>({
            lists:state.listA.map((item)=>{
                return (
                    <p key={item}>{item}</p>
                )
            })
       }))
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
    routerUrl(){
        this.props.history.push({ pathname : '/aa' ,query : { name: ' sunny'} });
    }
    render() {

        let fors=  this.state.listA.map((item,index)=>{
            return (
                <li key={index}>{item}</li>
            )
        })
        return ( <div className = "App" >
            <input type = "text" onChange={this.addChange}  value={this.state.val}/ >
            <button className="btn" onClick={this.addClick.bind(this)}>点击</button>
            <button className="btn2" onClick={this.forClick.bind(this)}>for</button>
             <div>
                 { fors }
             </div>
                <ul>
                    {
                       this.state.list.map((item,index)=>{
                        return <TodoItem content={item} key={index} index={index}  del ={this.del.bind(this)}/>
                    })
                    }
                    
                </ul>
            
                <button onClick={this.routerUrl.bind(this)}>index</button>
        
                    <header>
                        <nav>
                        <ul>
                            <li> <Link to={{ pathname:'/list' , query : { name : 'sunny' }}}>list</Link></li>
                            <li><Link to='/about'>Welcome</Link></li>
                            <li><Link to='/list/a'>a</Link></li>
                            <li><Link to='/list/b'>b</Link></li>
                        </ul>
                        </nav>
                    </header>
                    <Route path="/list" component={List}/>
                        <Route path="/about" component={Welcome}/>  
                        <Route path="/aa" component={List}/>  
            </div>

        );
    }
}

export default withRouter(App);