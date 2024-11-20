  /* import "./Proshow.css"; */

  const Website = () => {
      return (
        <div id="spotlight" className="flex flex-col  text-white items-center px-5 stretch-to-screen mt-8">
          <div className="main text-6xl md:7xl mb-5 text-white">
            <span className="font-bold text-5xl capitalize text-white">DIGITAL PRESENCE MANAGERS</span>
          </div>
          <div className="proshow-cards">
          <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
              <img
                className="-z-10 absolute proshows-bg rounded-xl"
                alt="background-raina"
                src={require("../../../assets/bg-2.webp")}
              />
              <img
                src={require("../../../assets/garv.webp")}
                alt="garv"
                className="z-0 rounded-xl"
              />
              <div className="z-10  flex flex-col absolute my-4">
                <h1 className="  text-3xl text-center font-bold tracking-widest content">
                  GARV ANAND
                </h1>
                <h1 className="  text-md text-center font-bold tracking-widest content">
                  HEAD & CREATOR
                </h1>
              </div>
            </div>
            <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
              <img
                className="-z-10 absolute proshows-bg rounded-xl"
                alt="background"
                src={require("../../../assets/bg-2.webp")}
              />
              <img
                src={require("../../../assets/mudit.webp")}
                alt="mudit"
                className="z-0 rounded-xl"
              />
              <div className="z-10  flex flex-col absolute my-4">
                <h1 className="  text-3xl text-center font-bold tracking-widest content">
                  MUDIT SHARMA
                </h1>
                <h1 className="  text-md text-center font-bold tracking-widest content">
                  MEMBER
                </h1>
              </div>
            </div>
            <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
              <img
                className="-z-10 absolute proshows-bg rounded-xl"
                alt="background-raina"
                src={require("../../../assets/bg-2.webp")}
              />
              <img
                src={require("../../../assets/vansh.webp")}
                alt="garv"
                className="z-0 rounded-xl"
              />
              <div className="z-10  flex flex-col absolute my-4">
                <h1 className="  text-3xl text-center font-bold tracking-widest content">
                  VANSH KASHYAP
                </h1>
                <h1 className="  text-md text-center font-bold tracking-widest content">
                  MEMBER
                </h1>
              </div>
              
            </div>
            <div className="proshow-card relative flex flex-col justify-end items-center rounded-xl">
              <img
                className="-z-10 absolute proshows-bg rounded-xl"
                alt="background-raina"
                src={require("../../../assets/bg-2.webp")}
              />
              <img
                src={require("../../../assets/vishal.webp")}
                alt="garv"
                className="z-0 rounded-xl"
              />
              <div className="z-10  flex flex-col absolute my-4">
                <h1 className="  text-3xl text-center font-bold tracking-widest content">
                  VISHAL SONI
                </h1>
                <h1 className="  text-md text-center font-bold tracking-widest content">
                  MEMBER
                </h1>
              </div>
              
            </div>
            
          </div>
        </div>
        
      );
      
    };
    
    
    export default Website;
    
