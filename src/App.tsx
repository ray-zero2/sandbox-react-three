import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import BgCanvas, { IHandler } from "./components/bgCanvas/BgCanvas";
import Descriptions from "./components/description/Descriptions";

function App() {
  const [pressedKey, setPressedKey] = useState("");
  const canvasRef = useRef<IHandler>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = e.key;
    setPressedKey(key);

    switch (key) {
      case "d":
        canvasRef.current?.cameraDown();
        break;
      case "u":
        canvasRef.current?.cameraUp();
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      <BgCanvas ref={canvasRef}></BgCanvas>
      <Descriptions pressed={pressedKey} />
    </div>
  );
}

export default App;
