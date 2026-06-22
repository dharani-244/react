import { useState, useEffect } from "react";
import "./game.css";

function App() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({
    top: 100,
    left: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        top: Math.random() * 400,
        left: Math.random() * 300,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const catchPanda = () => {
    setScore(score + 1);

    setPosition({
      top: Math.random() * 400,
      left: Math.random() * 300,
    });
  };

  return (
    <div className="game">
      <h1>🐼 Catch The Panda</h1>
      <h2>Score: {score}</h2>

      <div
        className="panda"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
        onClick={catchPanda}
      >
        🐼
      </div>
    </div>
  );
}

export default App;