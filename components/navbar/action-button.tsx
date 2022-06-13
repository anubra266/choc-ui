import { IconButton, forwardRef, useButtonGroup } from "@chakra-ui/react";
import type { IconButtonProps } from "@chakra-ui/react";

type LinkType =
  | {
      isLink: true;
      href: string;
    }
  | {
      isLink?: false;
      href?: never;
    };
export type ActionButtonProps = IconButtonProps & LinkType;

const linkProps = { as: "a", target: "_blank", rel: "noreferrer" } as const;

export const ActionButton = forwardRef<ActionButtonProps, "button">(
  (props, ref) => {
    const { isLink, ...rest } = props;
    const group = useButtonGroup() as
      | ReturnType<typeof useButtonGroup>
      | undefined;

    return (
      <IconButton
        ref={ref}
        size={group?.size ?? "sm"}
        fontSize={group?.size ? undefined : "md"}
        variant={group?.variant ?? "ghost"}
        title={props["aria-label"]}
        {...(isLink && linkProps)}
        {...rest}
      />
    );
  }
);
