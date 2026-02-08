"use client";

import { useState } from "react";

export default function Home() {


  const steps = [
    {
      question: "Will You Be My Valentine?",
      buttons: ["Yes, I Do", "Obviously!"],
    },
    {
      question: "Are You Really Sure? 💖",
      buttons: ["100% Yes", "Absolutely"],
    },
    {
      question: "Forever & Always? 💍",
      buttons: ["Forever ❤️", "Till Eternity"],
    },
    {
      question: "Yay! I Knew It 😍",
      buttons: ["💖", "💖"],
    },
  ];



  const [showLetter, setShowLetter] = useState(false);
  const [step, setStep] = useState(0);
  const handleClick = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <section className="relative w-full h-2500 overflow-hidden ">
        
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/back_forever.png')",
          }}
        />

       
        <div className="relative z-10 flex flex-col  h-full text-white pt-80">

          <h2 className="text-[841426]  text-center leading-tight
     text-[50px] sm:text-5xl lg:text-[80px]
  flex flex-col items-center gap-y-6">

            <span className="font-playfair-display font-normal">I  Made <span className="italic"> Something</span>
              <br /> For <span className="italic">You</span></span>
            <span className="font-cormorant italic text-2xl">Lets rewind time for a little while</span>
          </h2>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[30%] mr-[45%] mt-408">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>


          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40%] mr-[45%] mt-44">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[30%] mr-[45%] mt-120">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>
            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40.5%] mr-[45%] mt-78">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>
        
          {!showLetter && (
            <div
              className="ml-[36%] mr-[35%] mt-430 cursor-pointer"
              onClick={() => setShowLetter(true)}
            >
              <img
                src="/letter_box.png"
                alt=""
                className="animate-bounce"
              />
            </div>
          )}

          {showLetter && (
            <div className="bg-[url('/love_letter.png')] bg-no-repeat bg-cover 
          w-[380px] h-[500px] bg-center 
          ml-[37%] mr-[45%] mt-415">

              <div className="flex flex-col text-center">

              </div>

            </div>
          )}

          <div className="mt-610">
            <h2 className="text-[841426]  text-center leading-tight text-[50px] sm:text-5xl lg:text-[80px] flex flex-col items-center gap-y-6">
              <span className="font-playfair-display font-normal text-[#E5A292]">Forever Starts Here.</span>
              <span className="font-cormorant text-4xl text-[#E5A292]">{steps[step].question}</span>
            </h2>
           
            <div className="flex items-center justify-center gap-5 mt-12">
              {steps[step].buttons.map((btn, index) => (
                <button
                  key={index}
                  onClick={handleClick}
                  className="w-[180px] py-3 rounded-full  bg-white/20 backdrop-blur-md  border border-white/30
              text-white font-semibold shadow-lg  hover:bg-white/30 hover:scale-105 transition cursor-pointer"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
