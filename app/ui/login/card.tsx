"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  CircularProgress
} from "@nextui-org/react";
import { EyeFilledIcon } from "../eye-icon";
import { EyeSlashFilledIcon } from "../eyeslash-icon";

export default function LoginCard() {
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
          required
        />
        <Button color="primary" radius="full">
          Login
        </Button>
      </CardBody>
    </Card >
  );
}
