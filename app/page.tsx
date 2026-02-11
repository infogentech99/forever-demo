"use client";

import { useRef, useState, useMemo } from "react";
import Question from "./components/Question";

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
  const [showLetter, setShowLetter] = useState(false);
  const [showBook, setShowBook] = useState(false);
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


      <section className="relative w-full md:h-2200 h-1050 overflow-hidden ">

        <div
          className=" absolute inset-0 bg-center bg-cover hidden lg:block"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770709090/forever_bg_indcwj.png')",
          }}
        />


  <div
          className=" absolute inset-0 bg-center bg-cover bg-no-repeat block lg:hidden"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770721951/forever_bg_mobile_e6bird.png')",
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
        <FloationBallon className="absolute top-105 right-132 w-16 h-16 transform -rotate-18 opacity-80" reverse={true} />
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




        <div className="relative z-10 flex flex-col  h-full text-white lg:pt-20 pt-20">

          <h2 className="text-[841426]  text-center leading-tight
     text-[50px] sm:text-5xl lg:text-[80px]
  flex flex-col items-center gap-y-6">

            <span className="font-playfair-display font-normal text-[34px] md:text-[80px]">I  Made <span className="italic"> Something</span>
              <br /> For <span className="italic">You</span></span>
            <span className="font-cormorant italic md:text-2xl text-[18px]">Lets rewind time for a little while</span>
          </h2>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center md:ml-[30%] ml-[4%] mr-[45%] md:mt-360 mt-155">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[20px] md:mt-20 mt-12   -rotate-10">
                <span className="font-carattere">Where</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">it all quietly</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]">began. </span>
                {/* <span className="font-dancing-script font-bold"> STARTS HERE</span> */}
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[26px] -rotate-10">
                14 Feb 2021
              </h2>

            </div>
          </div>


          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center  ml-[10%] md:ml-[40%] mr-[45%] mt-38 rotate-6">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[20px] md:mt-20 mt-12 -rotate-10">
                <span className="font-carattere">A first</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">date that felt</span>
                <span className="font-carattere"> like</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]">fate.</span>
                {/* <span className="font-dancing-script font-bold"> STARTS HERE</span> */}
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                21 Mar 2021
              </h2>

            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center ml-[10%] md:ml-[30%] mr-[45%] mt-19 md:mt-109 rotate-6">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[22px] md:mt-20 mt-12 -rotate-10">
                <span className="font-carattere">A question</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">that </span>
                <span className="font-carattere"> changed</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]"> everything.</span>
                {/* <span className="font-dancing-script font-bold"> STARTS HERE</span> */}
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                05 Nov 2023
              </h2>
            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-95 md:h-82.5 w-71.25 h-62.5 bg-center ml-[10%] md:ml-[40.5%] mr-[45%] md:mt-65 mt-30">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[22px] md:mt-20 mt-12 -rotate-10">
                <span className="font-carattere">Two lives,</span> <br />
                {/* <span className="font-dancing-script font-bold md:text-3xl text-[20px]">one forever.</span>
                <span className="font-carattere"> of</span> <br /> */}
                <span className="font-carattere md:text-5xl text-[28px]">one forever.</span>
                {/* <span className="font-dancing-script font-bold"> STARTS HERE</span> */}
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
               12 Jan 2025
              </h2>

            </div>
          </div>

          {!showLetter && (
            <div
              className="md:ml-[38%] md:mr-[35%] mr-[17%] ml-[24%] md:mt-390 mt-70 cursor-pointer group "
              onClick={() => setShowLetter(true)}
            >
              <img
                src="/letter_box.png"
                alt=""
                className="animate-bounce [animation-duration:2s] md:w-95 md:h-125 w-75 h-80 transition-all duration-300
               group-hover:scale-105
               group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]"
              />
            </div>
          )}

          {showLetter && (
            <div className="bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770709709/love_letter_zznh3z.png')] bg-no-repeat md:bg-cover bg-contain 
          md:w-[380px] md:h-[500px] w-[285px] h-[500px] bg-center 
          md:ml-[37%] mr-[45%] ml-[10%] md:mt-350 mt-80 mb-30 md:py-20 py-16 px-10 ">
{/* <div className="flex flex-col-2 gap-2 justify-end items-end pr-4 -rotate-6"><img src="" alt="" className="w-12 h-12 border-6"/>
<img src="" alt="" className="w-12 h-12 border-4"/>
</div> */}

              <div className="flex flex-col -rotate-4 pl-2">
<h2 className="text-black font-cormorant md:text-3xl text-xl">
  My Love, ❤️

</h2>

<h2 className="text-[#515151] mt-6 font-cormorant pr-4 md:text-xl text-[14px]">
  You make every ordinary moment feel special just by being you. Your smile means more to me than words can say. This Valentine’s Day, I just want you to know that my heart chooses you today and always.

</h2>
              <h2 className="text-black font-cormorant text-xl mt-2">Forever yours, ❤️

              </h2>
              </div>

            </div>
          )}

          {!showBook && (
            <div
              className="ml-[35%] mr-[20%] md:mt-140 mt-60 cursor-pointer group"
              onClick={() => setShowBook(true)}
            >
              <img
                src="https://res.cloudinary.com/dx2di0mvx/image/upload/v1770709719/book_tkraq1.png"
                alt=""
                className="animate-bounce [animation-duration:2s] md:w-137 md:h-100 w-100 h-57 transition-all duration-300
               group-hover:scale-105
               group-hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]"
              />
            </div>
          )}

          {showBook && (
            <div className="bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770709714/open_book_sgbaod.png')] bg-no-repeat md:bg-cover  
            md:w-185 md:h-110 w-88 h-120 bg-center md:ml-[25%] ml-[1%] md:mr-[45%] mr-[0%] md:mt-150 mt-60 bg-contain">
              <div className="flex flex-col text-center">
              </div>
            </div>
            
          )}


          <div className="md:mt-280 mt-110 mx-4">
<Question/>
    </div>
        </div>

       <div className="fixed top-5 left-5 z-50">
  <a href="https://book.invitearc.com/">
    <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">    
      <span className="text-3xl leading-none">←</span>
      <span className="text-[16px] font-semibold">
        Exit Preview
      </span>

    </button>
  </a>
</div> 
      </section>

    </>
  );
}
