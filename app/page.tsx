"use client";

import { useRef, useState } from "react";

export default function Home() {


  const steps = [
    {
      question: "When did I First Fell For You? 💘",
      buttons: ["Jan 29", "Feb 12", "Jan28", "I Don't Remember"],
    },
    {
      question: "What is the gift that I bought you on our first date? 🎁",
      buttons: ["Teddy", "Chocolate", "Flowers", "Never gifted"],
    },
    {
      question: "Tell me where do you want to travel next? 🌍",
      buttons: ["Kenya", "Greece", "Italy", "Japan"],
    },
    {
      question: "Will you be my valentine? 💝",
      buttons: ["yes 💖", "No 😡"],
    },
  ];



  const [showLetter, setShowLetter] = useState(false);
   const [showBook, setShowBook] = useState(false);
  const [step, setStep] = useState(0);
  


 const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.3;
    audioRef.current.play();
    setStarted(true);
    setPlaying(true);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };





  const handleClick = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };
  return (
    <>

    <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/valentine.mp3" loop />

      
      <section className="relative w-full h-2500 overflow-hidden ">
        
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770614273/bg_forever_okv1da.png')",
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

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40.5%] mr-[45%] mt-81">
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
                className="animate-bounce [animation-duration:2s]"
              />
            </div>
          )}

          {showLetter && (
            <div className="bg-[url('/love_letter.png')] bg-no-repeat bg-cover 
          w-[380px] h-[500px] bg-center 
          ml-[37%] mr-[45%] mt-415 mb-30">

              <div className="flex flex-col text-center">

              </div>

            </div>
          )}






 {!showBook && (
            <div
              className="ml-[35%] mr-[20%] mt-190 cursor-pointer"
              onClick={() => setShowBook(true)}
            >
              <img
                src="/book.png"
                alt=""
                className="animate-bounce [animation-duration:2s] w-[550px] h-[400px]"
              />
            </div>
          )}

          {showBook && (
            <div className="bg-[url('/card1.png')] bg-no-repeat bg-cover 
          w-[380px] h-[500px] bg-center 
          ml-[37%] mr-[45%] mt-150 ">

              <div className="flex flex-col text-center">

              </div>

            </div>
          )}




          <div className="mt-250">
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
