//We are now creating a component . This component should produce some HTML code ..!

//Take this component and convert it into HTML and put it into DOM..
import _ from 'lodash';
import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import YTsearch from  'youtube-api-search';
import SearchBar from './components/search_bar';     
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Header from './components/header';

const API_KEY='AIzaSyCK5cGp4pElUxd6R9L0kfFso7MPSVvRER4';



class App extends Component
    {
        constructor(props){
            super(props);
            
            this.state={
                
                videos:[],
                selectedVideo:null,
                data:'temp data',
                title:'helow TITLE I AM BASIC'
            
            };
        
            this.videosearch('surfboards');
        }
           videosearch(term)
        {
            console.log('testing serach'+term);
        YTsearch({key:API_KEY,term:term},(videos)=>{
                    
                    this.setState({
                        
                        videos:videos,
                        selectedVideo:videos[0]
                    
                    });
                    
                });
       
        }
    
onvents() {
      this.setState({data: 'Data updated...'})
   }
        
changeTitle(value){
    console.log('value');
    this.setState({title:value});
}
//        <Header changeTitle={this.changeTitle.bind(this)} />
//            <h1>Hi works.</h1>
//                 <button onClick = {this.onvents.bind(this)}>CLICK</button>
//            <h4>{this.state.data}</h4>
//                    
render() {
    return (<div>
         
                 
            <SearchBar onSearchTermChange={ter=>this.videosearch(ter)}/>
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
