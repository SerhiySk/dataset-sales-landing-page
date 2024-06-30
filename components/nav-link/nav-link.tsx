import { forwardRef } from "@chakra-ui/react";

import { Button, ButtonProps } from "@chakra-ui/react";

import Link from "next/link";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  label: string;
}

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
  const { href, type, isActive, ...rest } = props;

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={isActive}
      fontWeight="medium"
      {...rest}
    >
      {props.label}
    </Button>
  );
});

NavLink.displayName = "NavLink";
