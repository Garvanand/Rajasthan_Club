import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from "react";
import NavBar from './NavBar';

const Landing = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        console.log('Audio played successfully');
      }).catch(error => {
        console.error('Error playing audio:', error);
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      id="landing" 
      className="h-[100svh] bg-cover bg-center" 
      style={{ backgroundImage: `url(${require('../../assets/img_7552-copy.webp')})` }}
    >
      <audio ref={audioRef} src="/welcome-audio11.mp3" preload="auto" />
      <div className="flex flex-col items-center justify-between stretch-to-screen py-7 text-black mx-3">
      <div className="absolute top-2 left-3 p-4 bg-white bg-opacity-40 border border-gray-300 rounded-md">
  <img
    src={require("../../assets/rec-logo.webp")}
    className="h-15 w-40 cursor-pointer"
    alt="Logo"
  />
</div>
<br></br>

        <NavBar />
        <div className="flex flex-col items-center gap-y-8 px-[0.5rem] text-center">
        <img
        src={require("../../assets/logo1.webp")}
        className="h-52 w-auto cursor-pointer" // Increased size for better visibility
        alt="Main Logo"
        onClick={handlePlayAudio}
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.8))', // Strong shadow for better contrast
          marginBottom: '20px'
        }}
      />
          <h2 className="font-bold text-2xl capitalize text-white"
    style={{
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Add shadow to make it pop against the background
    }}>
  The true essence of Rajasthani Culture in VIT!
</h2>
<h2 className="font-semibold text-2xl capitalize text-white"
    style={{
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Same shadow for consistency
    }}>
  Since 2023
</h2>
          <div className="flex flex-col justify-center items-center">
          <button
  type="button"
  onClick={() => navigate("/events")}
  className="px-6 py-3 text-white bg-[#ff6600] hover:bg-[#ff8533] duration-200 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:duration-500"
>
  <div className="main text-lg">
    <span className="socod text-left">EXPLORE EVENTS</span>
  </div>
</button>

<button
  type="button"
  onClick={() => navigate("/buytickets")}
  className="mt-5 px-6 py-3 text-white bg-[#0066ff] hover:bg-[#3399ff] duration-200 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:duration-500"
>
  <div className="main text-lg">
    <span className="socod text-left">BUY TICKETS</span>
  </div>
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
