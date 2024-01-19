'use client';

import React from 'react';
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@nextui-org/react";

export default function NavLinks() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link className="font-medium text-xl" href="/">
          difaspace
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/find" aria-current="page">
            Find
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/friends">
            Friends
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/chat">
            Chat
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
