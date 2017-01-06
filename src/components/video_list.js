import React,{Component} from 'react';
import VideoListItem from './video_list_item';


const VideoList=(props)=>{
    
    console.log(props);
    console.log('this is video list');
    const videoItems=props.videos.map((video)=>{
       
        return <VideoListItem 
       
       onVideoSelect={props.onVideoSelect}
       
       key={video.etag}
       
       video={video} 
       
       />
    });
    
    return(
        <ul className="col-md-8 list-group">
        {videoItems}
        </ul>
    );
}

export default VideoList;