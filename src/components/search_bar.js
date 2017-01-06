import React,{Component} from 'react'

class SearchBar extends Component{
    
    constructor(props){
       
        super(props);
         console.log(props);
        this.state={term:''};
        
        
    }
    
    render()
    {
        return(
            <div className="search-bar">
            <input
                onChange={event=>this.onInputChange(event.target.value)}
           />
            
            </div>
            );


    }
    
    onInputChange(term)
    {
        console.log('I AM THE ONE WHO CALLED');
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
   
}

export default SearchBar;
//
//   return(
//            <div className="search-bar">
//            <input
//            value={this.state.term}
//            onChange={event=>this.setState({term:event.target.value})}/>
//            Value of state is : {this.state.term}
//            </div>
//            );