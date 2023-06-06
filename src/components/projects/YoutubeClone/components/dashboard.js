import './dashboard.css';
import Video from './video.js';
import video1 from "../images/thumbnail-1.jpg";
import channel1 from "../images/profile-1.jpg";
import video2 from "../images/thumbnail-2.jpg";
import channel2 from "../images/profile-2.jpg";
import video3 from "../images/thumbnail-3.jpg";
import channel3 from "../images/profile-3.jpg";
import video4 from "../images/thumbnail-4.jpg";
import channel4 from "../images/profile-4.jpg";
import video5 from "../images/thumbnail-5.jpg";
import channel5 from "../images/profile-5.jpg";
import video6 from "../images/thumbnail-6.jpg";
import channel6 from "../images/profile-6.jpg";

function Dashboard() {
  return (
    <div className = "dashboard">
      <Video 
      thumbnail = {video1}
      videoLink = "https://www.youtube.com/watch?v=50VNCymT-Cs"
      videoTitle = "Alec Benjamin - Let Me Down Slowly (Official Music Video)"
      videoTime = "2.57"
      videoSubscribers = "4.7M subscribers"
      videoStats = "415M views &#183; 4 years ago"
      channelAuthor = "Alec Benjamin"
      channelLink = "https://www.youtube.com/channel/UCtWBCzqucZXq0M8jsqunM0g"
      channelPic = {channel1}
      />
      
      <Video 
      thumbnail = {video2}
      videoLink = "https://www.youtube.com/watch?v=tA8AfQaUnXM"
      videoTitle = "Ella Henderson - Ghost (Official Video)"
      videoTime = "3.58"
      videoSubscribers = "628K subscribers"
      videoStats = "108M views &#183; 8 years ago"
      channelAuthor = "Ella Henderson"
      channelLink = "https://www.youtube.com/channel/UCudD8EgOQpI_-2bR8hSeJaQ"
      channelPic = {channel2}
      />

      <Video 
      thumbnail = {video3}
      videoLink = "https://www.youtube.com/watch?v=Xs0Lxif1u9E"
      videoTitle = "RADWIMPS - すずめ feat.十明 [Official Lyric Video]"
      videoTime = "3.57"
      videoSubscribers = "2.4M subscribers"
      videoStats = "515k views &#183; 3 days ago"
      channelAuthor = "RADWIMPS"
      channelLink = "https://www.youtube.com/channel/UCIVqvhyo8ttjYOmMJuhq_YQ"
      channelPic = {channel3}
      />

      <Video 
      thumbnail = {video4}
      videoLink = "https://www.youtube.com/watch?v=46fBE4qYBZ0"
      videoTitle = "Culture Code - Crying U Out (feat. Dani Poppit)"
      videoTime = "3.17"
      videoSubscribers = "12.8M subscribers"
      videoStats = "697K views &#183; 4 months ago"
      channelAuthor = "MrSuicideSheep"
      channelLink = "https://www.youtube.com/user/MrSuicideSheep"
      channelPic = {channel4}
      />

      <Video 
      thumbnail = {video5}
      videoLink = "https://www.youtube.com/watch?v=23g5HBOg3Ic"
      videoTitle = "Ed Sheeran, Pokémon - Celestial [Official Video]"
      videoTime = "4.23"
      videoSubscribers = "52.5M subscribers"
      videoStats = "3.5M views &#183; 2 days ago"
      channelAuthor = "Ed Sheeran"
      channelLink = "https://www.youtube.com/channel/UC0C-w0YjGpqDXGB8IHb662A"
      channelPic = {channel5}
      />

      <Video 
      thumbnail = {video6}
      videoLink = "https://www.youtube.com/watch?v=poZLiypLJzQ"
      videoTitle = "Sleeping With Sirens - If I'm James Dean, You're Audrey..."
      videoTime = "3.58"
      videoSubscribers = "2.8M subscribers"
      videoStats = "61M views &#183; 12 years ago"
      channelAuthor = "riserecords"
      channelLink = "https://www.youtube.com/user/riserecords"
      channelPic = {channel6}
      />

      </div>
  );
} 

export default Dashboard;