import BIRDS from 'vanta/dist/vanta.waves.min';
import * as THREE from "three";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import NavBar from './NavBar';

const Landing = () => {
  const navigate = useNavigate();
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
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

    // Initialize Vanta Effect
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          color: 'black',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="landing" ref={vantaRef} className="h-[100svh]">
      <audio ref={audioRef} src="/welcome-audio11.mp3" preload="auto" />
      <div className="flex flex-col items-center justify-between stretch-to-screen py-7 text-white mx-3">
        <div className="flex flex-col justify-center">
          <img
            src={require("../../assets/rec-logo.webp")}
            className="h-15 w-40 cursor-pointer"
            alt="Logo"
          />
        </div>
        
        <NavBar />
        <div className="flex flex-col items-center gap-y-8 px-[0.5rem] text-center">
          <img
            src={require("../../assets/logo1.webp")}
            className="h-40 lg:scale-125 md:h-64 w-auto cursor-pointer" // Add cursor-pointer for visual feedback
            alt="Main Logo"
            onClick={handlePlayAudio} // Add the onClick event here
          />
          <h2 className="font-semibold text-2xl capitalize">
            The true essence of Rajasthani Culture in VIT!
          </h2>
          <h2 className="font-semibold text-2xl capitalize">since 2023</h2>
          <div className="flex flex-col justify-center items-center">
            <button
              type="button"
              onClick={() => navigate("/events")}
              className="px-4 py-2 text-white hover:text-white hover:bg-[#0099ff8a] duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod max-w-max"
            >
              <div className="main text-md">
                <span className="socod text-left">EXPLORE EVENTS</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => navigate("/buytickets")}
              className="mt-5 px-4 py-2 text-white hover:text-white hover:bg-[#0099ff8a] duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod max-w-max"
            >
              <div className="main text-md">
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
