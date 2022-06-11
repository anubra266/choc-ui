import type { MachineContext as Ctx } from "./component-demo.types";

export const dom = {
  getDoc: (ctx: Ctx) => ctx.doc ?? document,
  getRootNode: (ctx: Ctx) => ctx.rootNode ?? dom.getDoc(ctx),

  getRootId: (ctx: Ctx) => ctx.ids?.root ?? `component:demo:${ctx.uid}`,
  getToggleButtonId: (ctx: Ctx) =>
    ctx.ids?.toggleButton ?? `component:demo:${ctx.uid}:toggle:button`,
  getDeviceToggleId: (ctx: Ctx) =>
    ctx.ids?.deviceToggle ?? `component:demo:${ctx.uid}:device:toggle`,
  getFrameId: (ctx: Ctx) => ctx.ids?.frame ?? `component:demo:${ctx.uid}:frame`,

  getFrameEl: (ctx: Ctx) =>
    dom
      .getRootNode(ctx)
      .getElementById(dom.getFrameId(ctx)) as HTMLIFrameElement | null,
  getFrameWrapperEl: (ctx: Ctx) =>
    dom
      .getRootNode(ctx)
      .getElementById("frameWrapper") as HTMLIFrameElement | null,
};
