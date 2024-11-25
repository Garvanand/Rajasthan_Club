import "./Proshow.css";
import { useNavigate } from "react-router-dom";

const ProShows = () => {
  const navigate = useNavigate();

  return (
    <div id="proshows" className="flex flex-col text-white items-center px-5 pt-8">
      <div className="main text-6xl md:text-7xl mb-5">
        <span className="font-bold text-5xl capitalize">HIGHLIGHT EVENTS</span>
      </div>
      <div className="proshow-cards flex gap-4 justify-center">
        {/* First Proshow Card */}
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            src={require("../../../assets/jonita.webp")}
            alt="Padharo Sa Event"
            className="proshow-img rounded-xl"
          />
          <div className="z-10 flex flex-col absolute my-4 bg-black bg-opacity-70 px-4 py-3 rounded-lg">
            <h1 className="text-3xl text-center font-bold tracking-widest">PADHARO SA!</h1>
            <h2 className="text-md text-center font-bold tracking-widest">Advitya'24</h2>
            <h3 className="text-md text-center font-bold tracking-widest">(Flagship Event)</h3>
          </div>
        </div>

        {/* Second Proshow Card */}
        <div
          className="proshow-card relative flex flex-col justify-end items-center rounded-xl cursor-pointer"
          onClick={() => navigate("/buytickets")}
        >
          <img
            src={require("../../../assets/siana.webp")}
            alt="Thar Festival"
            className="proshow-img rounded-xl"
          />
          <div className="z-10 flex flex-col absolute bg-black rounded-lg px-3 py-2 opacity-80">
            <h1 className="text-3xl text-center font-bold tracking-widest opacity-100">THAR FESTIVAL</h1>
            <h2 className="text-md text-center font-bold tracking-widest opacity-100">True Essence of Desert Vibes!</h2>
            <h3 className="text-md text-center font-bold tracking-widest opacity-100">(4th December 2024)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProShows;
