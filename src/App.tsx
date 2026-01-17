import "./App.css";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 2. Functions to play and pause
  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("Audio play blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      // Optional: audioRef.current.currentTime = 0; // Uncomment to restart song every time
    }
  };

  useEffect(() => {
    // This fires as soon as the component mounts
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#a2d2ff", "#bde0fe", "#ffafcc", "#ffc8dd"], // Soft spa-like colors
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-orange-300/80">
      <audio ref={audioRef} src="/song.mp3" loop />

      <div
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="imgBox">
          <div className="bark"></div>
          <img src="https://image.ibb.co/fYzTrb/lastofus.jpg" />
        </div>
        <div className="details flex flex-col gap-y-3 md:text-sm px-4 text-xs md:mt-[70px] mt-12">
          <p>Happy Birthday to Shay and to Nate,</p>
          <p>
            A duo so stellar, it’s time to celebrate! We know you’ve been busy and working
            so hard, So we’re playing a very special "relax" card.
          </p>
          <p>
            No chores or errands or stresses allowed, We’re lifting you up to a fluffy
            white cloud. It’s time for some pampering—just you two, A spa day is waiting,
            and it’s all for you!
          </p>
          <p>
            So soak up the peace and the birthday fun, A duo like you is second to none!
          </p>

          <p className="text-right">Love you guys ❤</p>
        </div>
      </div>
    </div>
  );
}

export default App;
