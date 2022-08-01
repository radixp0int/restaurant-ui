import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = React.useRef();
  const handlePlay = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={videoRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div
          className={playVideo ? 'flex__center' : 'app__video-overlay_circle flex__center'}
          onClick={handlePlay}
        >
          {playVideo
            ? <BsPauseFill color='#fff' fontSize={75} />
            : <BsFillPlayFill color='#fff' fontSize={75} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
