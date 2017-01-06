import React,{Component} from 'react';
import Title from './title';
export default class Header extends Component
    {
       handleChange(e) {
           const title=e.target.value;
        this.props.changeTitle(title);
           
       }
        
        render(){
           
            console.log(this.props.title);
            return(
                <div>
                <Title />
                <input onClick={this.handleChange.bind(this)}/>
                
                </div>
            );
        }
        
    }

