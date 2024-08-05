import { useNavigate } from "react-router-dom";


const AboutREC = () => {
  const navigate = useNavigate();
  return (
    <div
      id="about-rec"
      className="flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8 stretch-to-screen text-white p-10 lg:gap-x-20 "
    >
      <div
        id="left"
        className="basis-1/2 flex justify-center items-center video-border max-w-fit max-h-fit my-8"
      >

        <img
          className="shadow-2xl  rounded-xl  z-10 neon-border "
          id="about-img"
          src={require("../../assets/gallery-imgs/rec7.webp")}
          alt=""
        />
      </div>

      <div id="right" className="basis-1/2 flex flex-col gap-y-5">
        <div class="main text-5xl">
          <span class="socod text-left">About Mahro Rajasthan Club</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
        At VIT University, the Mahro Rajasthan Club is one of the student-run cultural clubs. Its purpose is to celebrate and promote Rajasthani culture among the student body. The club organizes a variety of events, including cultural performances, traditional festivals, and workshops that showcase Rajasthani music, dance, art, and cuisine.

The club also serves as a platform for students from Rajasthan to connect with their heritage and share it with others on campus. They may host talks or discussions about Rajasthani history and traditions, and they often participate in university-wide cultural festivals and activities.
        </p>
        <button
          type="button"
          onClick={() => navigate("/about-rec")}
          className="px-4 py-2 text-white hover:text-white hover:bg-[#0099ff8a] duration-200 rounded-md font-medium hover:duration-500 px neon-btn-socod max-w-max"
        >
          <div class="main text-md">
            <span class="socod text-left">Show More</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutREC;
