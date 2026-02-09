"use client";

import { useRef, useState,useMemo } from "react";


const FloationBallon = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/ballon.png"
      alt="Balloon"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};



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


      <section className="relative w-full h-2200 overflow-hidden ">

        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770614273/bg_forever_okv1da.png')",
          }}
        />



 {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
      
        <FloationBallon className="absolute top-20 left-60 w-14 h-14 transform rotate-15 opacity-80" />
        <FloationBallon className="absolute top-30 left-80 w-14 h-14 transform rotate-25 opacity-75" />
        <FloationBallon className="absolute top-50 left-100 w-18 h-18 transform rotate-10 opacity-85" />
        <FloationBallon className="absolute top-60 left-120 w-14 h-14 transform rotate-35 opacity-75" />
        <FloationBallon className="absolute top-70 left-140 w-18 h-18 transform rotate-22 opacity-85" />
        <FloationBallon className="absolute top-80 left-160 w-14 h-14 transform rotate-18 opacity-80" />
        <FloationBallon className="absolute top-90 left-180 w-14 h-14 transform rotate-28 opacity-85" />


        <FloationBallon className="hidden lg:block absolute top-50 left-40 w-14 h-14 transform rotate-30 opacity-85" />
        <FloationBallon className="hidden lg:block absolute top-60 left-40 w-18 h-18 transform rotate-15 opacity-80" />
        <FloationBallon className="hidden lg:block absolute top-80 left-80 w-14 h-14 transform rotate-25 opacity-75" />
        <FloationBallon className="hidden lg:block absolute top-100 left-100 w-18 h-18 transform rotate-10 opacity-85" />
        <FloationBallon className="hidden lg:block absolute top-120 left-120 w-18 h-18 transform rotate-35 opacity-75" />
        <FloationBallon className="hidden lg:block absolute top-140 left-140 w-18 h-18 transform rotate-22 opacity-85" />
        <FloationBallon className="hidden lg:block absolute top-160 left-160 w-18 h-18 transform rotate-18 opacity-80" />
        <FloationBallon className="hidden lg:block absolute top-40 left-180 w-18 h-18 transform rotate-28 opacity-85" />

         {/* <FloationBallon className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloationBallon className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloationBallon className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" /> */}
        




        {/* Right-to-Left Lamps - Less crowded */}
        <FloationBallon className="absolute top-20 right-12 w-14 h-14 transform -rotate-6 opacity-85" reverse={true} />
        <FloationBallon className="absolute top-30 right-32 w-14 h-14 transform -rotate-12 opacity-75" reverse={true} />
        <FloationBallon className="absolute top-50 right-52 w-14 h-14 transform -rotate-20 opacity-90" reverse={true} />
        <FloationBallon className="absolute top-60 right-72 w-14 h-14 transform -rotate-8 opacity-85" reverse={true} />
        <FloationBallon className="absolute top-80 right-92 w-14 h-14 transform -rotate-15 opacity-80" reverse={true} />
        <FloationBallon className="absolute top-100 right-112 w-14 h-14 transform -rotate-25 opacity-90" reverse={true} />
        <FloationBallon className="absolute top-105 right-132 w-26 h-26 transform -rotate-18 opacity-80" reverse={true} />
        <FloationBallon className="absolute top-25 right-152 w-14 h-14 transform -rotate-30 opacity-75" reverse={true} />
        <FloationBallon className="absolute top-45 right-172 w-14 h-14 transform -rotate-22 opacity-85" reverse={true} />
        <FloationBallon className="absolute top-55 right-192 w-14 h-14 transform -rotate-35 opacity-85" reverse={true} />


        <FloationBallon className="hidden lg:block absolute top-30 right-12 w-14 h-14 transform -rotate-6 opacity-85" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-50 right-32 w-14 h-14 transform -rotate-12 opacity-75" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-70 right-52 w-18 h-18 transform -rotate-20 opacity-90" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-90 right-72 w-18 h-18 transform -rotate-8 opacity-85" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-110 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-130 right-112 w-18 h-18 transform -rotate-25 opacity-90" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-150 right-132 w-18 h-18 transform -rotate-18 opacity-80" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-85 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-75 right-172 w-18 h-18 transform -rotate-22 opacity-85" reverse={true} />


        {/* <FloationBallon className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-170 right-152 w-40 h-40 transform -rotate-30 opacity-75" reverse={true} />
        <FloationBallon className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} /> */}




        {/* <FallingLamps /> */}




        <div className="relative z-10 flex flex-col  h-full text-white pt-20">

          <h2 className="text-[841426]  text-center leading-tight
     text-[50px] sm:text-5xl lg:text-[80px]
  flex flex-col items-center gap-y-6">

            <span className="font-playfair-display font-normal">I  Made <span className="italic"> Something</span>
              <br /> For <span className="italic">You</span></span>
            <span className="font-cormorant italic text-2xl">Lets rewind time for a little while</span>
          </h2>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[30%] mr-[45%] mt-368">
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


          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40%] mr-[45%] mt-35">
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

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[30%] mr-[45%] mt-110">
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

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40.5%] mr-[45%] mt-65">
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
              className="ml-[36%] mr-[35%] mt-390 cursor-pointer"
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
          ml-[37%] mr-[45%] mt-390 mb-30">

              <div className="flex flex-col text-center">

              </div>

            </div>
          )}






          {!showBook && (
            <div
              className="ml-[35%] mr-[20%] mt-160 cursor-pointer"
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




          <div className="mt-230">
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
