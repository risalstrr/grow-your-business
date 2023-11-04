import { ALink } from "@elements";
import { TextInput, Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { DialogueCard } from "./module-elements/DialogueCard";
import { IRegisterData } from "./interface";
import { EMPTY_REGISTER_DATA } from "./constant";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterModule: React.FC = () => {
  const [data, setData] = useState<IRegisterData>(EMPTY_REGISTER_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  function onFormChange(target: any) {
    setData(() => ({ ...data, [target.id]: target.value }));
  }

  function onFormSubmit() {
    setIsLoading(true);
    axios
      .post("/register", data)
      .then((res) => {
        toast.success("Succesfully registered user. Please log in...");

        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      })
      .catch((err) => {
        toast.error("Error registering user.");
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <div className=" bg-blue-light relative w-full py-10 lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <ToastContainer />
        <h1 className="text-3xl text-center">Welcome to GrowBiz!</h1>
        <br />
        <DialogueCard>
          <h2>Name</h2>
          <TextInput
            id="name"
            type="text"
            placeholder="Your Name"
            onChange={(e) => onFormChange(e.target)}
            value={data.name}
            required={true}
          />
          <br />
          <h2>E-mail</h2>
          <TextInput
            id="email"
            type="email"
            placeholder="your@email.com"
            onChange={(e) => onFormChange(e.target)}
            value={data.email}
            required={true}
          />
          <br />
          <h2>Phone Number</h2>
          <TextInput
            id="phone"
            type="text"
            placeholder="+6280000000"
            onChange={(e) => onFormChange(e.target)}
            value={data.phone}
            required={true}
          />
          <br />
          <h2>Date of Birth</h2>
          <TextInput
            id="birth_date"
            type="date"
            onChange={(e) => onFormChange(e.target)}
            value={data.birth_date}
            required={true}
          />
          <br />
          <h2>Address</h2>
          <TextInput
            id="address"
            type="text"
            placeholder="Your shipping address"
            onChange={(e) => onFormChange(e.target)}
            value={data.address}
            required={true}
          />
          <br />
          <h2>Password</h2>
          <TextInput
            id="password"
            type="password"
            placeholder="********"
            onChange={(e) => onFormChange(e.target)}
            value={data.password}
            required={true}
          />
          <br />
          <h2>Confirm Password</h2>
          <TextInput
            id="password2"
            type="password"
            placeholder="********"
            onChange={(e) => onFormChange(e.target)}
            value={data.password2}
            required={true}
          />
          <br />
          <div className="flex flex-row gap-x-8 justify-end">
            <ALink uppercase={false} href={"/auth/login"} className="text-sm">
              Have an account? Login
            </ALink>
            <Button onClick={onFormSubmit} className=" bg-indigo-500">
              {isLoading ? <Spinner /> : "Submit"}
            </Button>
          </div>
        </DialogueCard>
      </div>
    </>
  );
};
