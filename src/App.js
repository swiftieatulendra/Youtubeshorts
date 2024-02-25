import {useEffect , useState} from "react";
import Video from './component/Videos'
import './App.css';
import ytVideos from "./component/Video";

function App() {
  const [video, setYtVideo] = useState([0]);

  useEffect(() => {
      setYtVideo(ytVideos); 
  }, []);
  return (
    <div className="App">
      <div className="app__videos">
      {video.map((vid)=>(
        <Video id={vid._id}
            src={vid.url}
            channel={vid.channel}
            description={vid.description}
            
            shares={vid.shares}
            comment={vid.comment} />
      ))} 
      </div>
    </div>
    
  );
}

export default App;



