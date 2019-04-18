import React, { Component } from 'react';

class TodoItem extends Component {
    delClick(){
       this.props.del(this.props.index)
       console.log(this.props)
    }
    render() {
        return(
        <div>
            <li onClick={this.delClick.bind(this)}>{this.props.content}</li>
        </div>
        )
               
       
     

    }
}
export default  TodoItem