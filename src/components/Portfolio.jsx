import React from "react";

// import { Tooltip, TooltipProvider, TooltipWrapper } from "react-tooltip";

import Hadaf from "../assests/portfolio/Hadaf.jpeg";
import IDB from "../assests/portfolio/IDB.webp";
import ITFC from "../assests/portfolio/ITFC.jpg";
import Panda from "../assests/portfolio/Panda.jpeg";
import Qapco from "../assests/portfolio/Qapco.jpeg";
import Qiddiya from "../assests/portfolio/Qiddiya.png";
import Savola from "../assests/portfolio/Savola.jpeg";

// import {arratDestructure} from "../assests/portfolio/arrayDestruct.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Panda,
      href: "https://github.com/Shahid725/New-Weather-app",
      desc: `Standard operating procedure Management for Panda Retail Company - The project was
build on SharePoint using HTML CSS JavaScript and jQuery. All the required data was
stored in the SharePoint lists and we used REST api to do the CRED operations from the
SharePoint list. The purpose of the project was to create a request for SOP or policy and
helps the user throughout the approval process such as workflow of the project.`,
    },
    {
      id: 2,
      src: ITFC,
      href: "https://github.com/Shahid725/foodrecipe",
      desc: `Digital Workspace for ITFC using React - Worked on the Digital Workspace of the
project which was its 3rd workstream using Reactjs. I worked on components such as file
attachment which helps the user to access the files from the system as well as the logged
in users OneDrive, calendar which will display the meeting details of the logged in user,
theme changer, user preferences and other important components and api integrations
and functions and responsiveness.`,
    },
    {
      id: 3,
      src: Savola,
      href: "https://github.com/Shahid725/CRud-application",
      desc: `Intranet Portal for Savola - The project was build on SharePoint using HTML CSS
JavaScript jQuery. All the required data was stored in the SharePoint lists and we used
REST api to do the CRED operations from the SharePoint list. I worked on components
such as directory which uses graph api to get the details of all the user in the organisation
along with other major components such as Announcemet,News ,Admin Portal etc.`,
    },
    {
      id: 4,
      src: Qiddiya,
      href: "https://github.com/Shahid725/CRud-application",
      desc: `Intranet Portal for Qiddiya - Using ReactJs &SharePoint. The project was build on
SharePoint using HTML CSS and ReactJS. All the required data was stored in the
SharePoint lists and we used REST api to do the CRED operations from the SharePoint
list. I worked on components such as Announcemet,News ,Admin Portal, Calendar,
Frequently used apps, Gallery etc`,
    },
    {
      id: 5,
      src: IDB,
      href: "https://github.com/Shahid725/CRud-application",
      desc: `Staff Social Club for IDB Using ReactJs & SharePoint - Using ReactJs & SharePoint.
Worked in designing the pages and components of the project, REST API integrations and
creating functionalities for the project. The project was build with both SharePoint and
Strapi as its backend and I worked on the SharePoint part of the project.`,
    },
    {
      id: 6,
      src: Hadaf,
      href: "https://github.com/Shahid725/CRud-application",
      desc: `HADAF (Project to manage minutes of meetings)- Using NextJS . Worked in designing the
pages, API integrations and creating functionalities for the project`,
    },
    {
      id: 7,
      src: Qapco,
      href: "https://github.com/Shahid725/CRud-application",
      desc: `Qapco DMS Project to manage the documents Using React js, SharePoint and Nintex.
(Currently working). Working on the page creations, SharePoint lists, API integrations and
creating functionalities for the project, and creation of Workflows for the approval and
other processes`,
    },
  ];

  // const handleButton = (href) => {
  //   // console.log(href);
  //   window.open(href, "_blank");
  // };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen justify-center flex "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PortFolio
          </p>
          <p className="py-6">
            I have had the privilege of working on various projects, each one
            allowing me to showcase my skills, creativity, and dedication to
            delivering exceptional results. Check out some of the projects I
            have worked.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 py-20 sm:px-0 ">
          {portfolios.map(({ id, src, href, desc }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-center">
                <img
                  src={src}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-md duration-300 hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-center">
                <button className=" group w-1/2  py-3  duration-200 hover:scale-105">
                  Description
                  <span
                    style={{ height: "auto", width: "500px" }}
                    className="opacity-0 bg-cyan-800 text-white text-xs rounded-lg py-1 px-2 absolute bottom-0 left-1/2  transform -translate-x-1/2 transition-opacity duration-1000 group-hover:opacity-100"
                  >
                    {desc}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
