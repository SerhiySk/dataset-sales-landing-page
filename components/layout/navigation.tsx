import * as React from "react";
import { HStack } from "@chakra-ui/react";

import { useRouter } from "next/router";

import siteConfig from "data/config";

import { NavLink } from "components/nav-link";

import { useScrollSpy } from "hooks/use-scrollspy";

import { MobileNavButton } from "components/mobile-nav";
import { MobileNavContent } from "components/mobile-nav";
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import ThemeToggle from "./theme-toggle";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
const Navigation: React.FC = () => {
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <HStack spacing="2" flexShrink={0}>
      <Menu>
        <MenuButton
          as={Button}
          variant="nav-link"
          rightIcon={<FaChevronDown />}
        >
          Products
        </MenuButton>
        <MenuList>
          <MenuGroup title="Linkedin" fontSize="14px" color={"gray.400"}>
            <MenuItem as={"a"} href="/profiles">
              Profiles
            </MenuItem>
            <MenuItem as={"a"} href="/companies">
              Companies
            </MenuItem>
            <MenuItem as={"a"} href="/jobs">
              Job Descriptions
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      {siteConfig.header.links.map(({ id, ...props }, i) => {
        return (
          <NavLink
            display={["none", null, "block"]}
            href={`/#${id}`}
            key={i}
            isActive={!!(id && activeId === id)}
            {...props}
          />
        );
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  );
};

export default Navigation;
