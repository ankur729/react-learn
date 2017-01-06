import React from 'react';

const VideoListItem =({video,onVideoSelect})=>{
   const imageUrl=video.snippet.thumbnails.default.url;
console.log('this is video list ITEM');
    return (
    <li onClick={()=>onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
        
        <div className="media-left">
         <a href={imageUrl}>   <img className="media-object" src={imageUrl} /></a>
        </div>
        
        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
        </div>
        
        </div>
        
        

        </li>
    );

}

export default VideoListItem;