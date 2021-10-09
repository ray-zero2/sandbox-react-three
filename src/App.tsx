import { useCallback, useEffect, useState } from "react";
import "./App.css";
import BgCanvas, { IAction } from "./components/bgCanvas/BgCanvas";
import Descriptions from "./components/description/Descriptions";

function App() {
  const [pressedKey, setPressedKey] = useState("");
  const [canvasEvent, setCanvasEvent] = useState<IAction>({ type: null });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = e.key;
    // console.log({ key });
    setPressedKey(key);

    switch (key) {
      case "d":
        setCanvasEvent({ type: "cameraDown" });
        break;
      case "u":
        setCanvasEvent({ type: "cameraUp" });
        break;
      case "l":
        setCanvasEvent({ type: "log", payload: "HelloReact" });
        break;
      // case "c":
      //   setCanvasEvent({ type: "changeRotateDirection" });
      //   break;
      default:
        setCanvasEvent({ type: null });
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
      <BgCanvas action={canvasEvent}></BgCanvas>
      <Descriptions pressed={pressedKey} />
    </div>
  );
}

export default App;
