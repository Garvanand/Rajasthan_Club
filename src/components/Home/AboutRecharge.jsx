import video from "../../assets/video/about-video.mp4";
import { useNavigate } from "react-router-dom";

const AboutRecharge = () => {
  const navigate = useNavigate();

  return (
    <div
    style={{
      
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      
      

    }}
    
      id="about-recharge"
      className=" flex flex-col justify-center lg:flex-row items-center lg:items-center  gap-y-8   stretch-to-screen text-white p-10 lg:gap-x-20 bg-center font-bold text-2xl capitalize "
      
    >
      <div
        id="left"
        className="basis-1/2 order-last lg:order-first flex flex-col gap-y-5"
      >
        <div class="main text-5xl"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Add shadow to make it pop against the background
        }}>
          <span className="font-bold text-5xl capitalize text-white ">About Mharo Rajasthan Club</span>
        </div>

        <p className=" text-lg  shadow-inner leading-loose">
        At VIT University, the Mharo Rajasthan Club is one of the student-run cultural clubs. Its purpose is to celebrate and promote Rajasthani culture among the student body. The club organizes a variety of events, including cultural performances, traditional festivals, and workshops that showcase Rajasthani music, dance, art, and cuisine.

The club also serves as a platform for students from Rajasthan to connect with their heritage and share it with others on campus. They may host talks or discussions about Rajasthani history and traditions, and they often participate in university-wide cultural festivals and activities.
        </p>
        <button
          type="button"
          onClick={() => navigate("/about-recharge")}
          className="px-4 py-2 text-white bg-[#0066ff] duration-200 rounded-md font-medium max-w-max "

        >
          <div class="main text-md">
            <span className="font-bold">Show More</span>
          </div>
        </button>
      </div>

      <div id="right" className="basis-1/2 flex justify-center items-center video-border max-h-fit max-w-fit my-8">
        <video
         className="shadow-[0_0_20px_10px_orange]"
          loop
          autostart
          autoPlay
          muted
          src={video}
          type="video/mp4"
        />
      </div>
    </div>
  );
};

export default AboutRecharge;
