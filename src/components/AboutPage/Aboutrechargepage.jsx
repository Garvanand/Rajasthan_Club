import { useEffect } from "react";

const Aboutrechargepage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-col stretch-to-screen text-white items-center "
    >
      
      <div class="mt-16 text-7xl lg:mt-16 main text-center">
        <span class="socod">About Mahro Rajasthan Club</span>
      </div> 
      <p className="mx-10 my-10 lg:my-16 lg:mx-52 text-lg text-white justify-between max-w-4xl text-center lg:text-left">
      At VIT University, the Mahro Rajasthan Club is one of the student-run cultural clubs. Its purpose is to celebrate and promote Rajasthani culture among the student body. The club organizes a variety of events, including cultural performances, traditional festivals, and workshops that showcase Rajasthani music, dance, art, and cuisine.
      .<br></br>
      <br></br>The club also serves as a platform for students from Rajasthan to connect with their heritage and share it with others on campus. They may host talks or discussions about Rajasthani history and traditions, and they often participate in university-wide cultural festivals and activities.
        <br></br>
        <br></br>Beyond event hosting, the club provides a nurturing space for students from Rajasthan to connect with their roots and share their cultural pride with the broader campus community. It often organizes insightful talks and discussions on Rajasthani history, folklore, and traditions, fostering a deeper understanding and appreciation among all students.
        <br></br>
        <br></br>The Mahro Rajasthan Club also actively participates in university-wide cultural festivals and activities, showcasing the vibrant spirit of Rajasthan and contributing to the university's diverse cultural landscape. Its efforts ensure that the beauty and richness of Rajasthani culture are celebrated and embraced by students from all backgrounds.
      </p>
    </div>
  );
};

export default Aboutrechargepage;
