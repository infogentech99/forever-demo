import { useState } from "react";

export default function Question() {

    const steps = [
        {
            question: "When did I First Fell For You? 💘",
            buttons: ["Jan 29", "Feb 12", "I Don't Remember"],
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
            buttons: ["Yes, always", "I need a second"],
        },
    ];

    const [step, setStep] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [showYesScreen, setShowYesScreen] = useState(false);


    const handleClick = (btn) => {
        const isLast = steps[step].question === "Will you be my valentine? 💝";

        if (isLast && btn === "I need a second") {
            setShowPopup(true);
            return;
        }

        if (isLast && btn === "Yes, always") {
            setShowYesScreen(true);
            return;
        }

        if (step < steps.length - 1) {
            setStep(step + 1);
        }
    };
    return (
        <>
      <div className="w-full md:h-137 h-150 rounded-3xl overflow-hidden ">
  <div
    className="w-full h-full bg-[url('/question_bg.png')] bg-no-repeat bg-center md:bg-contain bg-cover flex flex-col items-center justify-center rounded-3xl " >
             <h2 className="text-center leading-tight text-[30px] sm:text-5xl lg:text-[80px] flex flex-col items-center md:gap-y-6">
                    <span className="font-playfair-display text-[#E5A292] ">Forever Starts Here.</span>
                    <span className="font-cormorant md:text-4xl text-[#E5A292] text-xl px-12">{steps[step].question}</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">
                    {steps[step].buttons.map((btn, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(btn)}
                            className="w-45 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold shadow-lg  hover:bg-white/30 hover:scale-105 transition cursor-pointer"
                        >
                            {btn}
                        </button>
                    ))}
                </div>

            </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md ">
                    <div className="w-[90%] max-w-2xl rounded-3xl 
      bg-[url('/no_question_bg.png')] bg-no-repeat bg-center bg-contain
      px-10 py-14 text-center shadow-2xl  md:h-110 h-80 flex flex-col items-center justify-center md:gap-0">
                        <h3 className="md:text-2xl text-[16px] md:font-semibold text-white md:mt-6 mt-14  font-cormorant">
                            Invalid choice.
                        </h3>
                        <p className="text-white/80 md:text-[18px] text-[12px] font-cormorant px-12">
                            System has detected you are already my Valentine.
                        </p>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 rounded-full border border-red-500 md:px-6 px-4 md:py-2 py-1 text-red-400 text-[12px] md:text-xl hover:bg-red-500 hover:text-white transition cursor-pointer "
                        >
                            Try Again 💔
                        </button>
                    </div>
                </div>
            )}


            {showYesScreen && (
                
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md ">
                    <div className="w-[90%] max-w-2xl rounded-3xl 
      bg-[url('/yes_question_bg.png')] bg-no-repeat bg-center bg-contain
      px-10 py-14 text-center shadow-2xl  md:h-100 h-80 flex flex-col items-center justify-center gap-2 md:gap-0">
                        <h1 className="md:text-[32px] text-[16px] font-dancing-script font-bold text-red-600 md:mb-4 mb-0 ">
                            Yay! You're My Valentine!
                        </h1>
                        <p className="md:text-[18px] text-[12px] text-[#FF4348] font-cormorant">
                            This moment feels complete with you.
                        </p>

                        <button
                            onClick={() => setShowYesScreen(false)}
                            className="md:mt-8 rounded-full bg-[#800000] md:px-8 md:py-3 py-2 px-4
        text-white font-semibold hover:bg-red-700 transition text-[12px] md:text-xl font-cormorant cursor-pointer"
                        >
                            Forever ❤️
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}