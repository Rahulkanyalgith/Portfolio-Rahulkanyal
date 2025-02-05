"use client";

import { FormEvent, useRef } from "react";
import { Button } from "@mantine/core";
import emailjs from "@emailjs/browser";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import toast from "react-hot-toast";

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
          () => {
            toast.success("Submitted Successfully!", { duration: 4000 });
            form.current?.reset();
          },
          () => {
            toast.error("Failed to send message, please try again", {
              duration: 4000,
            });
          }
        );
    } else {
      toast.error("Form reference is missing", { duration: 4000 });
    }
  };

  return (
    <div className="px-6 md:px-12 lg:px-20 xl:px-32 mx-auto my-10 max-w-screen-lg" id="contact">
      <h1 className="text-4xl sm:text-3xl xs:text-2xl font-bold text-center text-white mb-10">
        <span className="text-primaryColor">04.&nbsp;</span>Contact
      </h1>

      <div 
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-full max-w-lg mx-auto shadow-lg border border-primaryColor p-6 sm:p-4 rounded-2xl"
      >
        <div className="text-2xl text-violet-800 flex items-center justify-center font-semibold mb-4">
          Let's Connect
          <IconTopologyStar3 className="w-8 h-8 text-primaryColor ml-2" />
        </div>

        <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            className="block w-full p-3 text-lg rounded-lg text-white bg-transparent border border-textColor focus:border-primaryColor focus:ring-0 outline-none"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            className="block w-full p-3 text-lg rounded-lg text-white bg-transparent border border-textColor focus:border-primaryColor focus:ring-0 outline-none"
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="phone"
            className="block w-full p-3 text-lg rounded-lg text-white bg-transparent border border-textColor focus:border-primaryColor focus:ring-0 outline-none"
            placeholder="Phone Number"
            required
          />
          <textarea
            name="message"
            rows={4}
            className="block w-full p-3 text-lg rounded-lg text-white bg-transparent border border-textColor focus:border-primaryColor focus:ring-0 outline-none"
            placeholder="Message"
            required
          ></textarea>

          <div className="text-center">
            <Button
              fullWidth
              type="submit"
              rightSection={<IconArrowRight size={20} />}
              className="!text-bgColor !font-bold"
              variant="filled"
              size="md"
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
