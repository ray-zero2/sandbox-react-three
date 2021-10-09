import {
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from "react";
import GlContents from "../../modules/glContents";

import "./BgCanvas.css";

export interface IHandler {
  cameraUp: () => void;
  cameraDown: () => void;
}

interface IProps {}

const BgCanvass = forwardRef<IHandler, IProps>((props, ref) => {
  console.log("canvas component was rendered");
  const instanceExists = useRef(false); //デバッグ用。外部クラスをインスタンス化済みかどうか。
  const canvasElemRef = useRef<HTMLCanvasElement>(null);
  const glContents = useRef<GlContents>();

  useLayoutEffect(() => {
    console.log("useLayoutEffect");

    if (instanceExists.current) console.warn("danger!");
    instanceExists.current = true;

    glContents.current = new GlContents(canvasElemRef.current!);
    glContents.current.render();
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      cameraUp: () => {
        glContents.current?.cameraUp();
      },
      cameraDown: () => {
        glContents.current?.cameraDown();
      },
    }),
    []
  );

  return <canvas ref={canvasElemRef} id="canvas" className="canvas" />;
});

export default memo(BgCanvass);
