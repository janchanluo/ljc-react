import React, { Component } from 'react';

class List extends Component {
    constructor(prop){
        super(prop)

    }
    componentDidMount (){
     console.log(this.props.location.query.name)
    }
    render() {
        return(
        <div>
            list{   this.props.match.params.id}
        </div>
        )
               
       
     

    }
}
export default  List