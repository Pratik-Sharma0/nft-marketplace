import React from "react";
import Leaderboard from "./Leaderboard";

const Banner = () => {
  return (
    <>
      <div className="mt-10 lg:mx-[5%] lg:w-[90%] w-[180%] mx-[10%] relative">
      <img
        src="/images/bg.png"
        alt="banner"
        className="md:w-full w-full h-[40vh] md:h-[45vh] lg:h-[60vh] rounded-md object-cover"
      />
      <img
        src="/images/Rectangle.png"
        alt="hero"
        className="absolute lg:top-0 lg:h-[34.7%] lg:right-[3%] lg:w-[36%] md:top-0 md:w-[38%] md:h-[36%] md:right-[2%] w-[48%] h-[35%] top-0 right-[-1%] object-cover"
      />
        <h2 className="text-white md:text-3xl text-xl font-medium absolute lg:top-[7%] top-[7%] lg:left-[3%] left-[3%] font-spectralSC">
          STELLAR ODYSSEY:
        </h2>
        <p className="text-white md:whitespace-nowrap lg:text-6xl md:text-6xl text-3xl font-medium absolute lg:top-[10%] top-[10%] lg:left-[3%] left-[3%] font-spectralSC">
          THE ETHEREAL VOYAGE
          <br /> OF A SPACE EXPLORE
        </p>
        <div
          style={{ backgroundColor: "#e36414" }}
          className="lg:w-[28%] md:my-2 w-[40%] p-[1.2%] rounded-md absolute lg:top-[21%] lg:left-[3%] top-[20%] left-[3%] font-spectral"
        >
          <div className="flex text-white justify-between items-center ">
            <div>
              <h3 style={{ fontSize: "10px" }}>Date</h3>
              <p className="text-lg font-sans">Jan 01,2023</p>
            </div>
            <div>
              <h3 style={{ fontSize: "10px" }} className="ml-7">
                Highest Bid
              </h3>
              <p className="text-lg">17.53 ETH</p>
            </div>
          </div>

          <button
            style={{ color: "#e36414" }}
            className="bg-white p-2 rounded-md w-[98%] mt-4 "
          >
            View Details
          </button>
        </div>
        <h2
          style={{ color: "#e36414" }}
          className="text-center font-semibold text-2xl mt-[5%] font-spectral"
        >
          Top Contributors of the Month
        </h2>
        <section className="flex justify-evenly mt-8 font-spectral gap-10">
          <div className="mt-[14%]">
            <h2
              style={{ color: "#e98343" }}
              className="text-center text-lg font-medium mb-2"
            >
              #2nd
            </h2>
            <div
              style={{ backgroundColor: "#e98343" }}
              className="p-4 rounded-3xl"
            >
              <img src="/images/top.png" alt="second" />
              <h3 className="text-white text-center text-3xl font-semibold">
                Courtney Henry
              </h3>
              <p className="text-center text-white ">Comments</p>
              <p className="text-center text-white text-xl font-medium">336</p>
              <hr className="border-white my-2" />
              <p className="text-center text-white ">Interests / Swifties</p>
              <p className="text-center text-white text-xl font-medium">839</p>
              <hr className="border-white my-2" />
              <p className="text-center text-white ">Marketplace Buy / Sell</p>
              <p className="text-center text-white text-xl font-medium">201</p>
            </div>

            <div className="w-[120%] h-[60%] bg-white rounded-full opacity-5 relative top-[-40%] "></div>
            <div className="w-[120%] h-[60%] bg-white rounded-full opacity-5 relative top-[-100%] left-[-20%] "></div>
          </div>
          <div>
            <h2
              style={{ color: "#e98343" }}
              className="text-center text-lg font-medium mb-2"
            >
              #1st
            </h2>
            <div
              style={{ backgroundColor: "#de6013" }}
              className="p-4 rounded-3xl"
            >
              <img src="/images/1st.png" alt="first" />
              <h3 className="text-white text-center text-3xl font-semibold">
                Kathtyn Murphy
              </h3>
              <p className="text-center text-white ">Comments</p>
              <p className="text-center text-white text-xl font-medium">336</p>
              <hr className="border-white my-2" />
              <p className="text-center text-white ">Interests / Swifties</p>
              <p className="text-center text-white text-xl font-medium">839</p>
              <hr className="border-white my-2" />
              <p className="text-center text-white ">Marketplace Buy / Sell</p>
              <p className="text-center text-white text-xl font-medium">201</p>
            </div>

            <div className="w-[120%] h-[60%] bg-white rounded-full opacity-5 relative top-[-30%] "></div>
            <div className="w-[120%] h-[60%] bg-white rounded-full opacity-5 relative top-[-90%] left-[-20%] "></div>
          </div>
          <div className="mt-[14%]">
            <h2
              style={{ color: "#e98343" }}
              className="text-center text-lg font-medium mb-2"
            >
              #3rd
            </h2>
            <div
              style={{ backgroundColor: "#f5b38a" }}
              className="p-4 rounded-3xl"
            >
              <img src="/images/3rd.png" alt="third" />
              <h3 className="text-white text-center text-3xl font-semibold">
                Ronald Richards
              </h3>
              <p className="text-center text-white ">Comments</p>
              <p className="text-center text-white text-xl font-medium">336</p>
              <hr className="border-white my-2" />
              <p className="text-center text-white ">Interests / Swifties</p>
              <p className="text-center text-white text-xl font-medium">839</p>
              <hr className="border-white my-2" />
              <p className="text-center text-white ">Marketplace Buy / Sell</p>
              <p className="text-center text-white text-xl font-medium">201</p>
            </div>

            <div className="w-[120%] h-[60%] bg-white rounded-full opacity-5 relative top-[-40%] "></div>
            <div className="w-[120%] h-[60%] bg-white rounded-full opacity-5 relative top-[-100%] left-[-20%] "></div>
          </div>
        </section>
      </div>
      <Leaderboard />
    </>
  );
};

export default Banner;
