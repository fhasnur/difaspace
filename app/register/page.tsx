"use client";

import RegisterCard from "@/app/ui/register/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface User {
  name: string,
  email: string,
  password: string
}

export default function RegisterPage() {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/auth/register", user);
      if (response.status === 201) {
        console.log("Registration successful", response.data);
        router.push("/login");
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  }

  return (
    <>
      <section className="flex items-center justify-center h-full">
        <RegisterCard
          user={user}
          setUser={setUser}
          handleRegister={handleRegister}
        />
      </section>
    </>
  )
}
