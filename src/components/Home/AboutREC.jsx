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
        Warm Rakshabandhan wishes from Mharo Rajasthan Club! As we celebrate this special day, we embrace the vibrant colors and rich traditions of Rajasthan, reflecting the deep bonds of love and protection. May your Rakhi be adorned with the same warmth and affection that defines our beautiful culture. Here’s to a day filled with joy, cherished moments, and the enduring spirit of sibling love. Happy Rakshabandhan from our Rajasthani family to yours!
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
