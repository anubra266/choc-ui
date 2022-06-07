import { createMachine, ref } from "@zag-js/core";
import { raf } from "@zag-js/dom-utils";
import {
  getDefaultFrameWrappersize,
  getDefaultFramesize,
  getDeviceWidths,
} from "~/components/component-demo/machine/component-demo.machine.utils";
import type {
  MachineContext,
  MachineState,
  UserDefinedContext,
} from "./component-demo.types";
import { DeviceView } from "./component-demo.types";

export function machine(ctx: UserDefinedContext = {}) {
  return createMachine<MachineContext, MachineState>(
    {
      id: "component-demo",
      initial: "unknown",

      context: {
        uid: "",
        deviceView: DeviceView.DESKTOP,
        code: ctx.initialCode ?? "",
        initialCode: "",
        frameSize: { width: 0, height: 0 },
        frameWrapperSize: { width: 0, height: 0 },
        ...ctx,
      },

      computed: {
        isDirty: (ctx) => ctx.code !== ctx.initialCode,
      },

      watch: {
        frameSize: "invokeOnFrameSizeChange",
      },

      on: {
        UPDATE_DEVICE_VIEW: {
          actions: "updateDeviceView",
        },
        UPDATE_CODE: {
          actions: "updateCode",
        },
        RESET_CODE: {
          actions: "resetCode",
        },
        UPDATE_FRAME_SIZE: {
          actions: "updateFrameSize",
        },
      },

      states: {
        unknown: {
          on: {
            SETUP: {
              target: "preview",
              actions: ["setupDocument", "setFrameSize"],
            },
          },
        },
        preview: {
          on: { TOGGLE: "code" },
        },
        code: {
          on: { TOGGLE: "preview" },
        },
      },
    },
    {
      guards: {
        isPressed: (_ctx, evt) => evt.pressed,
      },
      actions: {
        setupDocument(ctx, evt) {
          ctx.uid = evt.id;
          if (evt.doc) ctx.doc = ref(evt.doc);
          if (evt.root) ctx.rootNode = ref(evt.root);
        },

        setFrameSize(ctx) {
          raf(() => {
            ctx.frameSize = getDefaultFramesize(ctx);
            ctx.frameWrapperSize = getDefaultFrameWrappersize(ctx);
          });
        },

        updateCode(ctx, evt) {
          ctx.code = evt.code;
        },

        resetCode(ctx) {
          ctx.code = ctx.initialCode ?? "";
        },

        updateFrameSize(ctx, evt) {
          const directionOp = {
            left: -1,
            right: 1,
          };

          const directionNum = directionOp[evt.direction as "left" | "right"];
          const newWidth = (evt.d.width as number) * directionNum;

          ctx.frameSize = {
            width: ctx.frameSize.width + newWidth,
            height: ctx.frameSize.height,
          };
        },

        updateDeviceView(ctx, evt) {
          ctx.deviceView = evt.deviceView;

          ctx.frameSize = {
            height: ctx.frameSize.height,
            width: getDeviceWidths(ctx)[evt.deviceView as DeviceView],
          };
        },
        invokeOnFrameSizeChange(ctx) {
          const width = ctx.frameSize.width;

          const deviceWidths = getDeviceWidths(ctx);
          const validView = Object.values(deviceWidths).filter((dWidth) => {
            return dWidth >= width;
          })[0];

          const newView = Object.values(deviceWidths).indexOf(validView);

          ctx.deviceView = newView;
        },
      },
    }
  );
}
