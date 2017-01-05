import React,{Component} from 'react';
import Title from './title';
export default class Header extends Component
    {
        
        
        render(){
            console.log(this.props.title);
            return(<Title title={this.props.title}/>);
        }
        
    }

