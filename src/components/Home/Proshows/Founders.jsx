import "./Proshow.css"; 

const Founders = () => {
    return (
      <div id="founders" className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8">
        <div className="main text-6xl md:7xl mb-5 text-white">
          <span className="socod text-left">OUR FOUNDERS</span>
        </div>
        <div className="proshow-cards">
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
            <img
              className="-z-10 absolute proshows-bg rounded-xl"
              alt="background-jonita"
              src={require("../../../assets/bg-2.webp")}
            />
            <img
              src={require("../../../assets/yuvraj.webp")}
              alt="Yuvraj"
              className="z-0 rounded-xl"
            />
            <div className="z-10  flex flex-col absolute my-4">
              <h1 className="  text-3xl text-center font-bold tracking-widest content">
                YUVRAJ SINGH RATHORE
              </h1>
              <h1 className="  text-md text-center font-bold tracking-widest content">
                FOUNDER
              </h1>
            </div>
          </div>
        <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
            <img
              className="-z-10 absolute proshows-bg rounded-xl"
              alt="background-raina"
              src={require("../../../assets/bg-1.webp")}
            />
            <img
              src={require("../../../assets/mukesh.webp")}
              alt="MUKESH"
              className="z-0 rounded-xl"
            />
            <div className="z-10  flex flex-col absolute my-4">
              <h1 className="  text-3xl text-center font-bold tracking-widest content">
                MUKESH RANWA
              </h1>
              <h1 className="  text-md text-center font-bold tracking-widest content">
                CO-FOUNDER
              </h1>
            </div>
          </div>
          
          
          
          
          
        </div>
      </div>
      
    );
    
  };
  
  
  export default Founders;
  
