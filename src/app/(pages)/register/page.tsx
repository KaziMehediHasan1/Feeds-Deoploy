"use client";

import SubHeading from "@/components/home/shared/SubHeading";
import CheckboxField from "@/components/shared/input/CheckboxField";
import InputField from "@/components/shared/input/InputField";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const RegisterPage = (props: Props) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="px-2 py-4 bg-gray-200">
      <div className="bg-white">
        <SubHeading subHeading="Register for free now" />
        <div className="flex flex-col gap-3 p-3">
          <InputField
            name="nickname"
            label="Nick Name"
            register={register}
            placeholder="Jack"
            required={true}
          />
          <InputField
            name="firstName"
            label="First Name"
            register={register}
            placeholder="John"
            required={true}
          />
          <InputField
            name="LastName"
            label="Last Name"
            register={register}
            placeholder="Doe"
            required={true}
          />
          <InputField
            name="email"
            label="Email"
            register={register}
            placeholder="example@example.com"
            required={true}
          />
          <InputField
            name="password"
            label="Passowrd"
            type="password"
            register={register}
            required={true}
          />
          <CheckboxField
            name="terms"
            label="I accept the terms of use."
            required
            register={register}
          />
          <CheckboxField
            name="agreed"
            label="You agree that Transfermarkt GmbH & Co. KG sends you newsletters with product features and/or offers by e-mail. You can unsubscribe from receiving the newsletter at any time with effect for the future by clicking on the corresponding link in the newsletter."
            required
            register={register}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[var(--color-primary)] text-black px-4 py-2 rounded-md hover:bg-black hover:text-white font-semibold cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
