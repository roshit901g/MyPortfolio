import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800  text-white justify-center flex"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full ">
        {/* h-full */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pt-8 ">
            Contact
          </p>
          <p className="py-6">
            To explore potential opportunities and connect with me, kindly
            submit the form below. As an enthusiastic developer actively seeking
            job opportunities, I'm excited to engage with prospective employers
            and discuss how my skills and experience can contribute to their
            projects and teams.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e39e6a5f-42c7-46d8-9e76-edb86da62000"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
