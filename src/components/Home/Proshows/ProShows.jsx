import "./Proshow.css";

const ProShows = () => {
  return (
    <div
      id="proshows"
      className="flex flex-col  text-white items-center px-5 stretch-to-screen pt-8"
    >
      <div className="main text-6xl md:7xl mb-5 ">
        <span className="font-bold text-5xl capitalize text-white">HIGHLIGHT EVENTS</span>
      </div>
      <div className="proshow-cards">
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          {/* <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          /> */}
          <img
            src={require("../../../assets/jonita.webp")}
            alt="Padharo Sa"
            className="z-0 rounded-xl"
            style={{
              objectFit: 'contain',
            }}
          />
          <div className="z-10 flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              PADHARO SA!
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              Advitya'24
            </h1>

            <h1 className="  text-md text-center font-bold tracking-widest content">
              (Flagship Event)
            </h1>
          </div>
        </div>
        
          
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          {/* <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          /> */}
          <img
            src={require("../../../assets/siana.webp")}
            alt=""
            className="z-0 rounded-xl"
            style={{
              height: '80%',
              position: 'relative',
              top: '-80px',
              objectFit: 'contain',
            }}
          />
          <div className="z-10 flex flex-col absolute bg-black rounded-lg px-3 py-2 opacity-80">
            <h1 className="  text-3xl text-center font-bold tracking-widest content opacity-100">
              UPCOMING EVENT
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content opacity-100">
              BE READY!!
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content opacity-100">
              (October 2024)
            </h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProShows;

