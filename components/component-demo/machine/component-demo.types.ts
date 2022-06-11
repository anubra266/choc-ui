import type { StateMachine as S } from "@zag-js/core";
import type { Context, DirectionProperty } from "@zag-js/types";

type ElementIds = Partial<{
  root: string;
  toggleButton: string;
  deviceToggle: string;
  frame: string;
}>;

export enum DeviceView {
  MOBILE,
  TABLET,
  DESKTOP,
}

type PublicContext = DirectionProperty & {
  /**
   * The ids of the elements in the toggle. Useful for composition.
   */
  ids?: ElementIds;

  /**
   * The initial code for the component.
   */
  initialCode?: string;

  /**
   * Function to call when the toggle is clicked.
   */
  onChange?: (details: { pressed: boolean }) => void;
};

export type UserDefinedContext = Partial<PublicContext>;

type ComputedContext = Readonly<{
  /**
   * @computed
   * Whether the code has been modified
   */
  readonly isDirty: boolean;
}>;

type PrivateContext = Context<{
  deviceView: DeviceView;
  /**
   * @internal
   * The current code in the editor
   */
  code: string;

  /**
   * @internal
   * The current code in the editor
   */
  frameSize: { width: number; height: number };

  frameWrapperSize: { width: number; height: number };
}>;

export type MachineContext = PublicContext & PrivateContext & ComputedContext;

export type MachineState = {
  value: "unknown" | "code" | "preview";
};

export type State = S.State<MachineContext, MachineState>;

export type Send = S.Send<S.AnyEventObject>;
