"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Button, Burger, Menu, useMantineTheme, lighten } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import "./navigation.scss";

const NAV_ITEMS = [
  { label: "Home", url: "/" },
  { label: "Resume", url: "/resume" },
  { label: "Projects", url: "/projects" },
  { label: "Blog", url: "/blog" },
  { label: "Contact Me", url: "/contact" },
];

export default function Navigation() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null; 

  function renderNavItems() {
    if(isMobile) {
      return (
        <Menu shadow="md" width={200}  onClose={toggle}>
          <Menu.Target>
            <Burger
              size={30}
              color="white"
              opened={opened}
              onClick={toggle}
              aria-label="Open Menu"
            />
          </Menu.Target>

          <Menu.Dropdown bg={lighten(theme.colors.dark[0], 0.1)} bd="black">
            {NAV_ITEMS.map((item) => (
              <Menu.Item
                className="nav-item"
                component={Link}
                key={item.label}
                variant="filled"
                href={item.url}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      )
    }
    return (
      <>
        {NAV_ITEMS.map((item) => (
          <Button
            className="nav-item"
            component={Link}
            key={item.label}
            variant="filled"
            size="md"
            radius="sm"
            href={item.url}
          >
            {item.label}
          </Button>
        ))}
      </>)
  }

  return (
    <nav className="nav-container">
       { renderNavItems() }
    </nav>
  );
}