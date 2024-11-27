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
          src={require("../../assets/thar.webp")} // Update this line with the GIF file path
          alt="About REC"
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div className="main text-5xl">
          <span className="font-bold text-5xl capitalize text-white">Fresh Updates!</span>
        </div>

        <p className="text-lg shadow-inner leading-loose">
        Join us for Thar Fest, a vibrant cultural celebration hosted by Mharo Rajasthan Club at the Open Air Auditorium on December 4th. Immerse yourself in the rich heritage of Rajasthan through live music, traditional dance, and delicious regional cuisine. Experience the vibrant colors, sounds, and spirit of the Thar Desert as we bring together local artists and performers for an unforgettable evening. Don't miss this opportunity to celebrate Rajasthan's unique culture with us. Book your tickets now through the link above and secure your spot for this exciting event!      </p>
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

