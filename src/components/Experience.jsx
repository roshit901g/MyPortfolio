import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import react from "../assests/react.png";
import jquery from "../assests/jquery.png";
import next from "../assests/nextjs.png";
import nintex from "../assests/nintex.jpg";
import tailwind from "../assests/tailwind.png";
import github from "../assests/github.png";
import sharepoint from "../assests/Sharepoint.png";
import powerautomate from "../assests/PowerAutomate.jpg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: jquery,
      title: "JQUERY",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: next,
      title: "NEXT JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: nintex,
      title: "NINTEX",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: sharepoint,
      title: "SHAREPOINT",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: powerautomate,
      title: "PowerAutomate",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen justify-center flex"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        {/* h-full */}
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-400 inline">
            Experience
          </p>
          <p className="py-6">
            Coupled with my proficiency in React.JS &Javascript , my expertise
            in these technologies has enabled me to develop innovative solutions
            and tackle complex challenges effectively. These are the
            technologies I've worked with.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 px-12 py-20 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <div className="flex items-center justify-center">
                <p className="mt-4">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
