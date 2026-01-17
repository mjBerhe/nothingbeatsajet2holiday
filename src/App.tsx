import "./App.css";
import { useEffect } from "react";
import confetti from "canvas-confetti";

function App() {
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
      <div className="card">
        <div className="imgBox">
          <div className="bark"></div>
          <img src="https://image.ibb.co/fYzTrb/lastofus.jpg" />
        </div>
        <div className="details flex flex-col gap-y-3 text-sm px-4">
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
