import { memo, useEffect, useLayoutEffect, useRef, VFC } from "react";
import GlContents from "../../modules/glContents";

import "./BgCanvas.css";

type ActionType =
  | "cameraUp"
  | "cameraDown"
  | "log"
  | "changeRotateDirection"
  | null;

export interface IAction {
  type: ActionType;
  payload?: any;
}

interface IProps {
  action: IAction;
}

const BgCanvass: VFC<IProps> = (props) => {
  // console.log("canvas components render!");
  const instanceExists = useRef(false); //デバッグ用。外部クラスをインスタンス化済みかどうか。
  const canvasElemRef = useRef<HTMLCanvasElement>(null);
  const glContents = useRef<GlContents>();

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (!canvasElemRef.current) return;

    if (instanceExists.current) console.warn("danger!");
    instanceExists.current = true;

    glContents.current = new GlContents(canvasElemRef.current);
    glContents.current.render();
  }, []);

  useEffect(() => {
    // console.log("useEffect");
    if (glContents.current) {
      const actionType = props.action.type;
      switch (actionType) {
        case "cameraUp":
          glContents.current.cameraUp();
          break;

        case "cameraDown":
          glContents.current.cameraDown();
          break;

        case "log":
          const message = String(props.action.payload);
          glContents.current.log(message);
          break;

        case "changeRotateDirection":
          glContents.current.changeRotateDirection();
          break;
      }
    }
  }, [props.action]);

  useEffect(() => {
    console.log(`isLoading: ${glContents.current?.isLoading}`);
  }, [glContents.current?.isLoading]);

  return <canvas ref={canvasElemRef} id="canvas" className="canvas" />;
};

export default memo(BgCanvass);
