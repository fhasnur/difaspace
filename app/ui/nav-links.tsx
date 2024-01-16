'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from "@nextui-org/react";

export default function NavLinks() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-medium text-2xl">difaspace</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-lg" href="/find" aria-current="page">
            Find
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg" href="/friends">
            Friends
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg" href="/chat">
            Chat
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="text-md" as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
