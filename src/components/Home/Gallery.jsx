
const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex flex-col text-white items-center px-5 py-10 "
      >
      <div class="main text-6xl md:text-7xl mb-10">
        <span class="font-bold text-5xl capitalize text-white">GALLERY</span>
      </div>

      <div class="flex flex-col lg:flex-row lg:px-20">
        <div class="flex flex-col mb-0 basis-1/3">
        <img
            src={require("../../assets/gallery-imgs/andrea1.webp")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Padharo Sa"
          />
          
          <img
            src={require("../../assets/gallery-imgs/santhosh.webp")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700 object-cover"
            alt="Padharo Sa"
          />
        </div>

        <div className="flex flex-col lg:mx-3 mb-0 basis-1/3">
          <img
            src={require("../../assets/gallery-imgs/karthi.webp")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700 object-cover"
            alt="Padharo Sa"
          /> 

          <img
            src={require("../../assets/gallery-imgs/dj.webp")}
            className="w-100 shadow-lg  rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Padharo Sa"
          />
        </div>

        <div className="flex flex-col mb-0 basis-1/3">
          <img
            src={require("../../assets/gallery-imgs/jagan.webp")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Padharo Sa"
          />

          <img
            src={require("../../assets/gallery-imgs/bravo.webp")}
            className="w-100 shadow-lg rounded-xl mb-4 hover:opacity-75 duration-700"
            alt="Padharo Sa"
          /> 
        </div>
      </div>
    </div>
  );
};
export default Gallery;
