import React,{Component} from 'react';
import Header from './header';
export default class Layout extends Component
    {
       
        render(){
             const title="this is 1 title";
             const title2="this is 2 title";
              return(
                    <div>
                        <Header title={title}/>
                  
                        <Header title={title2}/>
                    </div>
              );
        }
        
    }

