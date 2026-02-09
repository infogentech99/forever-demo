"use client";

import { useRef, useState, useMemo } from "react";


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
  const [showPopup, setShowPopup] = useState(false);
  const [showYesScreen, setShowYesScreen] = useState(false);



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




  const handleClick = (btn:any) => {
    const isLast = steps[step].question === "Will you be my valentine? 💝";

    if (isLast && btn === "No 😡") {
      setShowPopup(true);
      return;
    }

    if (isLast && btn === "yes 💖") {
      setShowYesScreen(true);
      return;
    }

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


      <section className="relative w-full md:h-2200 h-1300 overflow-hidden ">

        <div
          className=" absolute inset-0 bg-center bg-cover hidden lg:block"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1770626392/bg_forever_l0t5k1.png')",
          }}
        />


  <div
          className=" absolute inset-0 bg-center bg-cover bg-no-repeat block lg:hidden"
          style={{
            backgroundImage: "url('/bg_forever_mobile2.png')",
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




        <div className="relative z-10 flex flex-col  h-full text-white lg:pt-80 pt-20">

          <h2 className="text-[841426]  text-center leading-tight
     text-[50px] sm:text-5xl lg:text-[80px]
  flex flex-col items-center gap-y-6">

            <span className="font-playfair-display font-normal text-[34px] md:text-[80px]">I  Made <span className="italic"> Something</span>
              <br /> For <span className="italic">You</span></span>
            <span className="font-cormorant italic md:text-2xl text-[18px]">Lets rewind time for a little while</span>
          </h2>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center md:ml-[30%] ml-[10%] mr-[45%] md:mt-360 mt-140">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[20px] md:mt-20 mt-12   -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]">Forever </span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[26px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>


          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center  ml-[10%] md:ml-[40%] mr-[45%] mt-38 rotate-6">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[20px] md:mt-20 mt-12 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center ml-[10%] md:ml-[30%] mr-[45%] mt-109 rotate-6">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[22px] md:mt-20 mt-12 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>
            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover md:w-[380px] md:h-[330px] w-[285px] h-[250px] bg-center ml-[10%] md:ml-[40.5%] mr-[45%] mt-65">
            <div className="flex flex-col   text-center mb-8">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[22px] md:mt-20 mt-12 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold md:text-3xl text-[20px]">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere md:text-5xl text-[28px]">Forever</span>
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
          ml-[37%] mr-[45%] mt-390 mb-30 py-20 px-10 animate-bounce [animation-duration:3s]">
<div className="flex flex-col-2 gap-2 justify-end items-end pr-4 -rotate-6"><img src="" alt="" className="w-12 h-12 border-6"/>
<img src="" alt="" className="w-12 h-12 border-4"/>
</div>

              <div className="flex flex-col -rotate-4 pl-2">
<h2 className="text-black font-cormorant text-3xl ">
  My Love, ❤️

</h2>

<h2 className="text-[#515151] mt-6 font-cormorant pr-4 text-xl ">
  You make every ordinary moment feel special just by being you. Your smile means more to me than words can say. This Valentine’s Day, I just want you to know that my heart chooses you today and always.

</h2>
              <h2 className="text-black font-cormorant text-xl mt-2">Forever yours, ❤️

              </h2>
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
            <div className="bg-[url('/card1.png')] bg-no-repeat bg-cover  w-95 h-125 bg-center ml-[37%] mr-[45%] mt-150 ">

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
                  onClick={() => handleClick(btn)}
                  className="w-[180px] py-3 rounded-full  bg-white/20 backdrop-blur-md  border border-white/30
              text-white font-semibold shadow-lg  hover:bg-white/30 hover:scale-105 transition cursor-pointer"
                >
                  {btn}
                </button>
              ))}
            </div>

            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
                <div className="relative w-[90%] max-w-xl rounded-2xl border border-red-500/50
      bg-gradient-to-b from-[#1b0f14] to-[#12080c]
      px-8 py-10 text-center shadow-2xl">

                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600">
                    <span className="text-3xl font-bold text-white">✕</span>
                  </div>

                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Invalid choice.
                  </h3>
                  <p className="text-white/80 text-sm">
                    System has detected you are already my Valentine.
                  </p>

                  <button
                    onClick={() => setShowPopup(false)}
                    className="mt-6 rounded-full border border-red-500 px-6 py-2
        text-red-400 hover:bg-red-500 hover:text-white transition"
                  >
                    Try Again 💔
                  </button>
                </div>
              </div>
            )}


            {showYesScreen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
                <div className="w-[90%] max-w-2xl rounded-3xl border border-[#1b0f14]-500/50
      bg-gradient-to-b 
      px-10 py-14 text-center shadow-2xl">

                  {/* 🎉 */}
                  <div className="text-6xl mb-4">❤️</div>

                  <h1 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-4">
                    Yay! You're My Valentine!
                  </h1>

                  <div className="text-2xl mb-4">🎊</div>

                  <p className="text-lg text-purple-600">
                    Thank you for making my day special! ❤️
                  </p>

                  <button
                    onClick={() => setShowYesScreen(false)}
                    className="mt-8 rounded-full bg-[#800000] px-8 py-3
        text-white font-semibold hover:bg-red-700 transition"
                  >
                    💕 Forever 💕
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </>
  );
}
