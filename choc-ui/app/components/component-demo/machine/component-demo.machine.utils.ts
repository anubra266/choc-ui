import { dom } from "~/components/component-demo/machine/component-demo.dom";
import { DeviceView } from "~/components/component-demo/machine/component-demo.types";
import type { MachineContext } from "~/components/component-demo/machine/component-demo.types";

export function getDefaultFramesize(ctx: MachineContext) {
  const frameEl = dom.getFrameEl(ctx);
  const positionInfo = frameEl?.getBoundingClientRect();

  return {
    width: positionInfo?.width || 0,
    height: positionInfo?.height || 0,
  };
}

export function getDefaultFrameWrappersize(ctx: MachineContext) {
  const frameEl = dom.getFrameWrapperEl(ctx);
  const positionInfo = frameEl?.getBoundingClientRect();

  return {
    width: positionInfo?.width || 0,
    height: positionInfo?.height || 0,
  };
}

export const getDeviceWidths = (ctx: MachineContext) => ({
  [DeviceView.MOBILE]: 480,
  [DeviceView.TABLET]: 768,
  [DeviceView.DESKTOP]: ctx.frameWrapperSize.width,
});
