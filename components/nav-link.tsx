import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { runIfFn } from "@chakra-ui/utils";

const NavLink = ({ children, href, ...props }) => {
  const { asPath, isReady } = useRouter();

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      setActive(activePathname === href);
    }
  }, [asPath, isReady, props.as, href]);

  return (
    <Link href={href} {...props}>
      {runIfFn(children, { isActive: active })}
    </Link>
  );
};

export default NavLink;
