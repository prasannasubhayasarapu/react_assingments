import React,{useRef,} from 'react'
import { UNSAFE_decodeViaTurboStream } from 'react-router-dom';
    const videoUrls=[
    "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"]
export const UseRefCompo = () => {

  const videoRef=useRef(null);
  const[videoIndex,useVideoIndex]=React.useState(0)
  const handlePlay=()=>{
    videoRef.current.play();
  }
   const handlePause=()=>{
    videoRef.current.pause();
  }
  const handleForward=()=>{
    videoRef.current.currentTime +=5;
  }

   const handleBackWard=()=>{
    videoRef.current.currentTime -=5;
  } 
  const handleNext=()=>{
    useVideoIndex((previndex)=>{return(previndex+1)%videoUrls.length})
  }
  const handlePrevious = () => {
    useVideoIndex((prevIndex) =>{return (prevIndex - 1 + videoUrls.length) % videoUrls.length});
  };
  return (
    <div>
      <div>
        <video ref={videoRef} src={videoUrls[videoIndex]}></video></div>
        <button onClick={handlePlay}>Play</button>
     <button onClick={handlePause}>Pause</button>
       <button onClick={handleForward}>Forward</button>
       <button onClick={handleBackWard}>Backward</button>
  
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

    </div>
    </div>
  )
}
export default UseRefCompo;