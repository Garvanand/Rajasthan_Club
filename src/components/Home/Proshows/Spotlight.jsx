 import "./Proshow.css"; 

const Spotlight = () => {
  return (
    <div id="spotlight" className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8">
      <div className="main text-6xl md:7xl mb-5 text-white">
        <span className="socod text-left">OUR TEAM</span>
      </div>
      <div className="proshow-cards">
      <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-raina"
            src={require("../../../assets/bg-1.webp")}
          />
          <img
            src={require("../../../assets/raina-transformed.webp")}
            alt="Raina"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              HARSHVARDHAN SINGH
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              PRESIDENT
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-1.webp")}
          />
          <img
            src={require("../../../assets/GVM.webp")}
            alt="GVM"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              MOHIT KEELKA
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              VICE-PRESIDENT
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-1.webp")}
          />
          <img
            src={require("../../../assets/jagan-1.webp")}
            alt="Jonita"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
              DHEERAJ SARASWAT
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
              STUDENT-COORDINATOR
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/JEET.webp")}
            alt="GVM"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
            JITENDRA BHASKAR
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
            STUDENT-COORDINATOR
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/palak.webp")}
            alt="GVM"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
            PALAK DWIVEDI
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
            SECRETARY
            </h1>
          </div>
        </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
          <img
            className="-z-10 absolute proshows-bg rounded-xl"
            alt="background-jonita"
            src={require("../../../assets/bg-2.webp")}
          />
          <img
            src={require("../../../assets/amrita.webp")}
            alt="GVM"
            className="z-0 rounded-xl"
          />
          <div className="z-10  flex flex-col absolute my-4">
            <h1 className="  text-3xl text-center font-bold tracking-widest content">
            AMRITA NIRBHEEK
            </h1>
            <h1 className="  text-md text-center font-bold tracking-widest content">
            JOINT SECRETARY
            </h1>
          </div>
        </div>
        
        
      </div>
    </div>
    
  );
  
};


export default Spotlight;
