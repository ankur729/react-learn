//We are now creating a component . This component should produce some HTML code ..!

//Take this component and convert it into HTML and put it into DOM..

import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import YTsearch from  'youtube-api-search';
import SearchBar from './components/search_bar';     
import VideoList from './components/video_list';
const API_KEY='AIzaSyCK5cGp4pElUxd6R9L0kfFso7MPSVvRER4';



class App extends Component
    {
        constructor(props){
            super(props);
            
            this.state={videos:[]};
       
        
        YTsearch({key:API_KEY,term:'file tracking system'},function(videos){
                    
                    this.setState({videos});
                    
                });
         }
    
   

render() {
    return (<div>
            <h1>Hi works.</h1>
            <SearchBar />
            <VideoList videos={this.state.videos}/>
        </div>);
}
         
}   
ReactDOM.render(<App />,document.querySelector('.container'));
