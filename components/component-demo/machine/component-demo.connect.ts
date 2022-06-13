import { dataAttr } from "@zag-js/dom-utils";
import type { PropTypes, ReactPropTypes } from "@zag-js/types";
import { normalizeProp } from "@zag-js/types";
import type { ResizableProps } from "re-resizable";
import { dom } from "./component-demo.dom";
import type { DeviceView, Send, State } from "./component-demo.types";

export function connect<T extends PropTypes = ReactPropTypes>(
  state: State,
  send: Send,
  normalize = normalizeProp
) {
  const isCodeMode = state.matches("code");
  const isPreviewMode = state.matches("preview");

  const code = state.context.code;
  const isDirty = state.context.isDirty;

  const frameSize = state.context.frameSize;

  return {
    code,
    isCodeMode,
    isDirty,
    isPreviewMode,
    resetCode() {
      send("RESET_CODE");
    },
    toggleButtonProps: normalize.button<T>({
      id: dom.getToggleButtonId(state.context),
      type: "button",
      onClick() {
        send({ type: "TOGGLE" });
      },
    }),
    getDeviceToggleProps: (deviceView: DeviceView) =>
      normalize.button<T>({
        id: dom.getDeviceToggleId(state.context),
        type: "button",
        onClick() {
          send({ type: "UPDATE_DEVICE_VIEW", deviceView });
        },
        "data-active": dataAttr(state.context.deviceView === deviceView),
      }),
    editorProps: {
      onChange(code: string) {
        send({ type: "UPDATE_CODE", code });
      },
    },
    frameProps: {
      id: dom.getFrameId(state.context),
      resizableProps: {
        ...(frameSize.width === 0 ? {} : { size: frameSize }),
        onResizeStop: (e, direction, ref, d) => {
          send({ type: "UPDATE_FRAME_SIZE", direction, d });
        },
      } as ResizableProps,
    },
  };
}
