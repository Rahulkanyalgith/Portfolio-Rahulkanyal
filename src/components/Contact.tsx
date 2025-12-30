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
      <h1 className="text-5xl sm:text-4xl xs:text-2xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">05.&nbsp;</span>
        <span className="text-white">Get In Touch</span>
      </h1>

      <div 
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-full max-w-lg mx-auto shadow-2xl shadow-violet-500/20 border border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-lg p-8 sm:p-6 rounded-2xl"
      >
        <div className="text-2xl text-white flex items-center justify-center font-bold mb-6">
          Let's Connect
          <IconTopologyStar3 className="w-8 h-8 text-violet-400 ml-2 animate-float" />
        </div>

        <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            className="block w-full p-3 text-base rounded-lg text-white bg-zinc-800/50 border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition-all duration-300"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="block w-full p-3 text-base rounded-lg text-white bg-zinc-800/50 border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition-all duration-300"
            placeholder="Your Email"
            required
          />
          <input
            type="number"
            name="phone"
            className="block w-full p-3 text-base rounded-lg text-white bg-zinc-800/50 border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition-all duration-300"
            placeholder="Phone Number"
            required
          />
          <textarea
            name="message"
            rows={4}
            className="block w-full p-3 text-base rounded-lg text-white bg-zinc-800/50 border border-zinc-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 outline-none transition-all duration-300 resize-none"
            placeholder="Your Message"
            required
          ></textarea>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <IconArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
