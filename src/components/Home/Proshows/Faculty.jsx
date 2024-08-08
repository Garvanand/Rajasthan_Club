/* import "./Proshow.css"; */

const Faculty = () => {
    return (
      <div id="spotlight" className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8">
        <div className="main text-6xl md:7xl mb-5 text-white">
          <span className="socod text-left">FACULTY COORDINATOR</span>
        </div>
        <div className="proshow-cards">
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
            <img
              className="-z-10 absolute proshows-bg rounded-xl"
              alt="background-raina"
              src={require("../../../assets/bg-2.webp")}
            />
            <img
              src={require("../../../assets/rajpoot.webp")}
              alt="Rajpoot"
              className="z-0 rounded-xl"
            />
            <div className="z-10  flex flex-col absolute my-4">
              <h1 className="  text-3xl text-center font-bold tracking-widest content">
                Dr.C.S. RAJPOOT
              </h1>
              <h1 className="  text-md text-center font-bold tracking-widest content">
                FACULTY COORDINATOR
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
              src={require("../../../assets/trapti.webp")}
              alt="GVM"
              className="z-0 rounded-xl"
            />
            <div className="z-10  flex flex-col absolute my-4">
              <h1 className="  text-3xl text-center font-bold tracking-widest content">
                Dr.TRAPTI SHARMA
              </h1>
              <h1 className="  text-md text-center font-bold tracking-widest content">
                FACULTY-COORDINATOR
              </h1>
            </div>
          </div>
          
          
          
          
        </div>
      </div>
      
    );
    
  };
  
  
  export default Faculty;
  