import { useNavigate } from "react-router-dom";

const AboutREC = () => {
  const navigate = useNavigate();
  return (
    <div
      id="about-rec"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20"
    >
      <div
        id="left"
        className="basis-1/2 flex justify-center items-center video-border max-w-fit max-h-fit my-8"
      >
        <img
          className="shadow-[0_0_20px_10px_orange]"

          id="about-img"
          src={require("../../assets/gallery-imgs/rec7.gif")} // Update this line with the GIF file path
          alt="About REC"
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div className="main text-5xl">
          <span className="font-bold text-5xl capitalize text-white">Fresh Updates!</span>
        </div>

        <p className="text-lg shadow-inner leading-loose">
        नमस्कार, Mharo Rajasthan Club की ओर से आपको और आपके परिवार को गणेश चतुर्थी की ढेरों शुभकामनाएँ!

जैसे हमारे राजस्थान की भूमि रंग-बिरंगे लोक कला और संस्कृति से भरी हुई है, वैसे ही गणपति बप्पा आपके जीवन में खुशियों और समृद्धि की हर रंगत भरें। गणेशजी की कृपा से आपकी सारी मनोकामनाएँ पूरी हों और आपके जीवन में सुख-समृद्धि की छांव हमेशा बनी रहे।

साथ ही, गणपति बप्पा के आशीर्वाद से राजस्थान की खुशहाली और समृद्धि में चार चाँद लग जाएँ। आपकी हर राह हरी हो और आपके घर में सुख-शांति और उल्लास का दीप जलता रहे।

गणपति बप्पा मोरया!        </p>
        {/* Uncomment and use if you want a button */}
        {/* <button
          type="button"
          onClick={() => navigate("/about-rec")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#0099ff8a] duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod max-w-max"
        >
          <div className="main text-md">
            <span className="socod text-left">Show More</span>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default AboutREC;

