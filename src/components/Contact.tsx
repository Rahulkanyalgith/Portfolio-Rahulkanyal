"use client";

import { FormEvent, useRef } from "react";
import { Button, useMatches } from "@mantine/core";
import emailjs from "@emailjs/browser";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import toast from "react-hot-toast";
/* eslint-disable react/no-unescaped-entities */ 
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_jjlxxjg",
          "template_61ji0c7",
          form.current,
          "PDptF5UqaqOi7hAdk"
        )
        .then(
          (result) => {
            toast.success("Submitted Successfully!", { duration: 4000 });
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error("Failed to send message, please try again", {
              duration: 4000,
            });
          }
        );
    } else {
      toast.error("Form reference is missing", { duration: 4000 });
    }
  };

  const btn = useMatches({
    xsm: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono"
      id="contact"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4"
      >
        <div className="text-3xl text-violet-800 flex gap-2 items-center font-semibold sm-mx:text-2xl xs-mx:text-xl">
          Let's Connect
          <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-[70%] lg-mx:w-full m-auto flex flex-col gap-6 sm-mx:p-4"
        >
          <input
            type="text"
            name="name"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border  border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
            placeholder="Name"
            required={true}
          />
          <input
            type="email"
            name="email"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border  border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
            placeholder="Email"
            required={true}
          />
          <input
            type="number"
            name="phone"
            className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border  border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
            placeholder="Phone Number"
            required={true}
          />

          <textarea
            name="message"
            rows={4}
            className={`block px-2.5 pb-2.5 xs-mx:text-base pt-4 w-full text-xl sm-mx:text-lg rounded-xl text-white bg-transparent border border-textColor appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
            placeholder="Message"
            required={true}
          ></textarea>

         <div className="text-violet-800 text-center w-full">
		 <Button
		 
		 fullWidth
		 type="submit"
		 rightSection={<IconArrowRight size={20} />}
		 className="!text-bgColor !font-bold"
		 variant="filled"
		 size={btn}
		 radius="lg"
		 color="#64FFDA"
		 
	   >
		 Send
	   </Button>
		 </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;












