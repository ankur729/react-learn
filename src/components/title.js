import React,{Component} from 'react';

export default class title extends Component{
    
    render(){
        
        return(<div><h1>{this.props.title}</h1><h3>{this.props.title2}</h3></div>);
    }
}