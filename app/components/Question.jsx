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
            <div className="bg-[url('/question_bg.png')]
  bg-no-repeat bg-center bg-cover lg:bg-cover py-16 md:min-h-130 h-160 w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center" >
                <h2 className="text-center leading-tight text-[30px] sm:text-5xl lg:text-[80px] flex flex-col items-center md:gap-y-6 ">
                    <span className="font-playfair-display text-[#E5A292] ">Forever Starts Here.</span>
                    <span className="font-cormorant md:text-4xl text-[#E5A292] text-xl px-12">{steps[step].question}</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">
                    {steps[step].buttons.map((btn, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(btn)}
                            className="w-[180px] py-3 rounded-full bg-white/20 backdrop-blur-md
      border border-white/30 text-white font-semibold shadow-lg
      hover:bg-white/30 hover:scale-105 transition cursor-pointer"
                        >
                            {btn}
                        </button>
                    ))}
                </div>

            </div>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
                    <div className="relative w-[90%] max-w-xl rounded-2xl border border-red-500/50
      bg-linear-to-b from-[#1b0f14] to-[#12080c]
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
      bg-linear-to-b from-[#1b0f14] to-[#12080c]
      px-10 py-14 text-center shadow-2xl">
                        <h1 className="text-3xl sm:text-4xl font-semibold text-red-600 mb-4">
                            Yay! You're My Valentine!
                        </h1>
                        <p className="text-lg text-white">
                            This moment feels complete with you.
                        </p>

                        <button
                            onClick={() => setShowYesScreen(false)}
                            className="mt-8 rounded-full bg-[#800000] px-8 py-3
        text-white font-semibold hover:bg-red-700 transition"
                        >
                            Forever ❤️
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}