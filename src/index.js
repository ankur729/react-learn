//We are now creating a component . This component should produce some HTML code ..!

//Take this component and convert it into HTML and put it into DOM..

import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import YTsearch from  'youtube-api-search';
import SearchBar from './components/search_bar';     
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY='AIzaSyCK5cGp4pElUxd6R9L0kfFso7MPSVvRER4';



class App extends Component
    {
        constructor(props){
            super(props);
            
            this.state={
                
                videos:[],
                selectedVideo:null
            
            };
       
        
        YTsearch({key:API_KEY,term:'file tracking system'},(videos)=>{
                    
                    this.setState({
                        
                        videos:videos,
                        selectedVideo:videos[0]
                    
                    });
                    
                });
         }
    
   

render() {
    return (<div>
            <h1>Hi works.</h1>
            
            <SearchBar />
            <VideoDetail
            
           
            video={this.state.selectedVideo} 
            
            />
            <VideoList
            
             onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>);
}
         
}   
ReactDOM.render(<App />,document.querySelector('.container'));
