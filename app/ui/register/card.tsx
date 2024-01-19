"use client";

import { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button
} from "@nextui-org/react";
import { EyeFilledIcon } from "./eye-icon";
import { EyeSlashFilledIcon } from "./eyeslash-icon";

export default function RegisterCard({
  user,
  setUser,
  handleRegister
}: {
  user: {
    name: string;
    email: string;
    password: string;
  };
  setUser: (user: {
    name: string;
    email: string;
    password: string;
  }) => void;
  handleRegister: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card className="w-[600px] mt-32 p-6">
      <CardHeader className="flex gap-3 text-center justify-center">
        <h1 className="text-2xl font-semibold">difaspace</h1>
      </CardHeader>
      <CardBody className="flex gap-4">
        <Input
          className="w-full"
          label="Username"
          variant="bordered"
          placeholder="Enter your username"
          labelPlacement="outside"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <Input
          className="w-full"
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          labelPlacement="outside"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <Input
          className="w-full"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          labelPlacement="outside"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <Button color="primary" radius="full" onClick={handleRegister}>
          Register
        </Button>
      </CardBody>
    </Card >
  );
}
