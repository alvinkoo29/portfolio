import './video.css';

function Video(props) {
  return (
    <div className = "video-preview">
      <div className = "top-container">
        <a href= {props.videoLink}>
          <img className = "thumbnail" src={props.thumbnail} alt="thumbnail"/>
          <div className = "video-time">{props.videoTime}</div>
        </a>
      </div>
      <div className = "bottom-container">
        <div className = "channel-pic">
          <a href= {props.channelLink}>
            <img  className = "profile-pic" src={props.channelPic} alt="profile picture"/>
          </a>
          <div className = "channel-summary">
            <img  className = "profile-pic" src={props.channelPic} alt="profile picture"/>
            <p className ="channel-author">{props.channelAuthor}</p>
            <p className = "video-subscribers">{props.videoSubscribers}</p>
          </div>
        </div>
        <div className = "video-info">
          <a href={props.videoLink}>
            <p className ="video-title">{props.videoTitle}</p>
          </a>
          <a href= {props.channelLink}>
            <p className ="channel-author">{props.channelAuthor}</p>
          </a>
          <p className ="video-stats">{props.videoStats}</p>
        </div>
      </div>
    </div>
  );
} 

export default Video;