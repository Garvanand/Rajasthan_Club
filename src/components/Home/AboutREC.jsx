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
          className="shadow-2xl rounded-xl z-10 neon-border"
          id="about-img"
          src={require("../../assets/gallery-imgs/rec7.gif")} // Update this line with the GIF file path
          alt="About REC"
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div className="main text-5xl">
          <span className="socod text-left">Fresh Updates!</span>
        </div>

        <p className="text-lg shadow-inner leading-loose">
          Warm greetings from Mharo Rajasthan Club of VIT! As we celebrate the vibrant festival of Hariyali Teej, we wish you all a joyous and prosperous occasion filled with the lush green hues of happiness and the refreshing spirit of togetherness. May this special day bring a wave of prosperity and positivity to your life. Enjoy the festivities and have a wonderful time with your loved ones!
        </p>
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
