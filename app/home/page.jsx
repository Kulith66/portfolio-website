import { FiDownload } from "react-icons/fi";
import Photo from "../photo/page";
import Social from "../social/page";

const Home = () => {
  return (
    <section className="min-h-screen bg-black flex items-center">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between xl:pt-8 xl:pb-24  mb-20 ml-24">
          {/* Text and photo container */}
          <div className="flex flex-col xl:flex-columns items-start xl:items-center w-full xl:w-auto">
            <div className="text-left w-full xl:w-1/2 text-white">
              {/* Text section */}
              <span>Software Developer</span>
              <h1 className="h1">
                Hello I'm <br />
                <span className="text-blue-600">Kulith Sathnindu</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I'm a passionate software developer with a knack for creating
                innovative solutions to complex problems.
              </p>
              <div className="flex flex-col xl:flex-row items-start xl:items-center gap-8">
                <button className="text-white hover:bg-blue-400 border border-blue-400 hover:border-blue-600 shadow-lg px-4 py-1 rounded-full font-semibold transition-all">
                  <span className="flex xl:flex-row gap-2">
                    <FiDownload className="text-xl mt-1.5" /> Download CV
                  </span>
                </button>
                
              </div>
            
           
          </div>
          <div className=" flex-col mb-8 xl:mb-0 mt-10">
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-blue-400 rounded-full flex justify-center items-center text-blue-400 text-base hover:bg-blue-400 hover:text-primary hover:transition-all duration-500"
            />
            
          </div>
           {/* Photo section */}
          
        </div>
        
      </div>
      </div><div className="w-full xl:w-1/2 xl:ml-8 text-white  mr-20 mb-40 " >
              <Photo />
            </div>
    </section>
  );
};

export default Home;
