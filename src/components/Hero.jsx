import { PlaneCanvas } from ".";
import { FallguyCanvas } from ".";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[18%] sm:top-[19%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start">
        <div className="flex-1 lg:mb-0">
          <div className="keyboard-wrapper">
            <div className="keyboard">
              <span className="key">M</span>
              <span className="key">A</span>
              <span className="key">R</span>
              <span className="key">T</span>
              <span className="key">I</span>
              <span className="key">N</span>
              <br />
              <span className="key">L</span>
              <span className="key">Y</span>
            </div>
            <span className="parallax-role text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-4 lg:mt-6">
              Software Developer
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            I enjoy crafting responsive web applications that deliver seamless and engaging user experiences.
          </div>
        </div>
      </div>

      <img className="parallax__sun" src= {import.meta.env.BASE_URL + "/assets/parallax/sun.svg"} alt="" />
      <img className="parallax__backclouds" src={import.meta.env.BASE_URL + "/assets/parallax/backclouds.svg"} alt="" />
      <img className="parallax__city" src={import.meta.env.BASE_URL + "/assets/parallax/city.svg"} alt="" />
      <img className="parallax__middleclouds" src={import.meta.env.BASE_URL + "/assets/parallax/middleclouds.svg"} alt="" />
      <img className="parallax__frontclouds" src={import.meta.env.BASE_URL + "/assets/parallax/frontclouds.svg"} alt="" />
      <img className="parallax__mountain" src={import.meta.env.BASE_URL + "/assets/parallax/mountain.svg"} alt="" />

      <FallguyCanvas scrollContainer={scrollContainer} onLoad={() => console.log('Fallguy Model Loaded')}/>
      <PlaneCanvas scrollContainer={scrollContainer} onLoad={() => console.log('Plane Model Loaded')} />    
      </section>
  );
};

export default Hero;