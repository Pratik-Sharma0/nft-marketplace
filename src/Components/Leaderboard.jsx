import React from "react";

const Leaderboard = () => {
  return (
    <>
      <div className="lg:mt-10 lg:mx-[5%] mx-[10%] mt-[15%] font-spectral lg:w-[90%] w-[180%] ">
        <h2 style={{ color: "#e36414" }} className="font-semibold text-2xl">
          Leaderboard
        </h2>
        <div className="flex justify-center gap-[10%] mt-[5%] lg:mt-0">
          <span
            style={{ color: "#e36414", borderBottomColor: "#e36414" }}
            className="border-b-2 w-[14%] text-center"
          >
            Monthly
          </span>
          <span>All Time</span>
        </div>
        <hr />
        <div className="border mt-[5%]">
          <div className="flex mt-[3%] justify-between mx-5 ">
            <span
              style={{ color: "#e36414" }}
              className="font-semibold text-2xl"
            >
              Top 100
            </span>
            <span className="font-semibold border px-5 py-1">
              <span style={{ color: "#e36414" }}>&lt;&nbsp;</span> 3 of 20{" "}
              <span style={{ color: "#e36414" }}>&nbsp;&gt;</span>
            </span>
          </div>
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #04
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/4.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Ronald Richards</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white whitespace-nowrap font-semibold text-2xl py-2 px-4 rounded-full md:ml-[25%] lg:ml-10 ml-[10%]"
            >
              34 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%]" />
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #05
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/5.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Theresa Webb</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white whitespace-nowrap font-semibold text-2xl md:ml-[25%]  py-2 px-4 rounded-full lg:ml-10 ml-[10%]"
            >
              28 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%]" />
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #06
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/6.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Piyanat Natakul</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white font-semibold whitespace-nowrap md:ml-[25%]  text-2xl py-2 px-4 rounded-full lg:ml-10 ml-[10%]"
            >
              24 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%]" />
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #07
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/7.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Nattha Srifatavee</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white font-semibold whitespace-nowrap md:ml-[25%]  text-2xl py-2 px-4 rounded-full lg:ml-10 ml-[10%]"
            >
              20 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%]" />
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #08
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/8.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Apinya Serarttana</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white font-semibold whitespace-nowrap md:ml-[25%]  text-2xl py-2 px-4 rounded-full lg:ml-10 ml-[10%]"
            >
              16 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%]" />
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #09
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/9.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Voranee Peeyarat</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white font-semibold whitespace-nowrap text-2xl md:ml-[25%]  py-2 px-4 rounded-full lg:ml-10 ml-[10%]"
            >
              12 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%]" />
          <div className="flex mt-[3%] mx-5 items-center">
            <div
              style={{ backgroundColor: "#fce5cd" }}
              className=" text-2xl font-semibold rounded-md py-4"
            >
              <span className="px-3" style={{ color: "#e36414" }}>
                #10
              </span>
            </div>
            <div className="mx-5 lg:w-[80%] w-[60%] flex items-center gap-5">
              <div>
                <img className="" src="/images/10.png" alt="pic" />
              </div>

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-3xl">Saranya Kuntara</div>
                <div
                  style={{ fontSize: "14px", color: "#6a6a6a" }}
                  className="flex font-semibold flex-wrap"
                >
                  <div className="flex whitespace-nowrap border-r-2 lg:pr-8 pr-2">
                    Comments <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>336</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:pr-8 pr-2 border-r-2 lg:ml-8 ml-2">
                    Interests / Videos <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>839</span>
                  </div>
                  <div className="flex whitespace-nowrap lg:ml-8 ml-2">
                    NFT Sell / Purchase <span className="lg:mx-4 mx-1">-</span>
                    <span style={{ color: "#e36414" }}>201</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#e36414" }}
              className="text-white whitespace-nowrap font-semibold text-2xl md:ml-[25%]  py-2 px-4 rounded-full lg:ml-10 ml-[10%]"
            >
              08 XP
            </button>
          </div>
          <hr className="mx-5 mt-[3%] mb-[5%]" />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
