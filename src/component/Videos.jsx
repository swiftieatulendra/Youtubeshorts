/*import React, { useRef, useState } from "react";
import './css/Video.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';


function Videos({ 
  id,
  src,
  channel,
  description,
  likes,
  dislike,
  comment,
  shares,
}) {
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);
 
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying((play) => !play);
    }
  };

  const handleSubscribe = () => {
    setSubs((sub) => !sub);
  };
  
  return (
    <div className="video">
      <video
         onClick={handleVideoPress}
        id={id}
        className="video__player"
        src={src}
        ref={videoRef}
        autoPlay muted
        loop
          />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon />
            <p>{likes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>{dislike}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>{comment}</p>
          </div>

          <div className="shortsVideoSideIcon">
            <SendIcon/ >
            <p>{shares}</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortDetails">
            <Avatar
            />
            <p>{channel}</p>
            <button
              style={{
                background: subs ? "hsla(0,0%,69.4%,.609)" : "red",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBE" : "SUBSCRIBED"}
            </button>
          </div>
          <div className="shortsDesc">
            
                  <p className="description">{description}</p>
               
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;

import React, { useRef, useState } from "react";
import './css/Video.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';

function Videos({ 
  id,
  src,
  channel,
  description,
}) {
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const videoRef = useRef(null);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
  };

  const handleDislike = () => {
    if (!isDisliked) {
      setDislikeCount(dislikeCount + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
    }
  };

  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleSubscribe = () => {
    setSubs(!subs);
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        id={id}
        className="video__player"
        src={src}
        ref={videoRef}
        autoPlay muted
        loop
      />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon" onClick={handleLike}>
            <ThumbUpIcon style={{ color: isLiked ? 'blue' : 'white' }} />
            <p>{likeCount}</p>
          </div>
          <div className="shortsVideoSideIcon" onClick={handleDislike}>
            <ThumbDownIcon style={{ color: isDisliked ? 'blue' : 'white' }} />
            <p>{dislikeCount}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>0</p>
          </div>
          <div className="shortsVideoSideIcon">
            <SendIcon />
            <p>0</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortDetails">
            <Avatar />
            <p>{channel}</p>
            <button
              style={{
                background: subs ? "hsla(0,0%,69.4%,.609)" : "red",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBE" : "SUBSCRIBED"}
            </button>
          </div>
          <div className="shortsDesc">
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;*/
import React, { useRef, useState } from "react";
import './css/Video.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';

function Videos({ 
  id,
  src,
  channel,
  description,
}) {
  const [playing, setPlaying] = useState(false);
  const [subs, setSubs] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const videoRef = useRef(null);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    } else {
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
  };

  const handleDislike = () => {
    if (!isDisliked) {
      setDislikeCount(dislikeCount + 1);
      setIsDisliked(true);
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
      setIsDisliked(false);
    }
  };

  const handleVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlaying(!playing);
  };

  const handleSubscribe = () => {
    setSubs(!subs);
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        id={id}
        className="video__player"
        src={src}
        ref={videoRef}
        autoPlay muted
        loop
      />

      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon" onClick={handleLike}>
            <ThumbUpIcon style={{ color: isLiked ? 'blue' : 'white' }} />
            <p>{likeCount}</p>
          </div>
          <div className="shortsVideoSideIcon" onClick={handleDislike}>
            <ThumbDownIcon style={{ color: isDisliked ? 'blue' : 'white' }} />
            <p>{dislikeCount}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>0</p>
          </div>
          <div className="shortsVideoSideIcon">
            <SendIcon />
            <p>0</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortDetails">
            <Avatar />
            <p>{channel}</p>
            <button
              style={{
                background: subs ? "hsla(0,0%,69.4%,.609)" : "red",
              }}
              onClick={handleSubscribe}
            >
              {subs ? "SUBSCRIBE" : "SUBSCRIBED"}
            </button>
          </div>
          <div className="shortsDesc">
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;









