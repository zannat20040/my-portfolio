/* eslint-disable no-unused-vars */
import React from "react";
import Project from "./Project/Project";
import Project2 from "./Project/Project2";
import Project3 from "./Project/Project3";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import TeamProject from "./Project/TeamProject";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

const Myproject = () => {
  AOS.init();

  const [activeTab, setActiveTab] = React.useState("personal");
  const data = [
    {
      label: "Personal Creations",
      value: "personal",
      projects: [
        {
          img: 'projectImage1',
          title: "Content Writing Consultancy",
          description:
            "It is an online platform for businesses and individuals seeking high-quality content writing services, SEO strategies, and digital marketing solutions with various functionalities to enhance your online presence.",
          technologies: ["React", "Tailwind CSS", "AOS", "JavaScript"],
          links: [
            {
              site: "Client Code",
              url: "https://github.com/zannat20040/Content-writing-consultancy",
            },
            {
              site: "Live",
              url: "https://content-writing-consultancy.vercel.app/",
            },
          ],
        },
      ],
    },
    {
      label: "Industrial Projects",
      value: "professional",
      projects: [
        {
          img: "http://krvjert.png",
          title: "Content Consultancy",
          description:
            "It is an online platform for businesses and individuals seeking high-quality content writing services, SEO strategies, and digital marketing solutions with various functionalities to enhance your online presence.",
          technologies: ["React", "JavaScript", "AOS"],
          links: [
            {
              site: "Live",
              url: "https://content-writing-consultancy.vercel.app/",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <Tabs value={activeTab} className="">
        <div className="mt-32 " id="scrollToProjects">
          <div className="flex justify-between gap-4 items-center">
            <p
              data-aos="fade-right"
              className="font-medium text-2xl text-accent"
            >
              03. My Projects
            </p>
            <TabsHeader
              className="w-fit p-0 bg-black text-white"
              indicatorProps={{
                className: "bg-accent text-whtie",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  className={`w-auto text-white px-6 py-3  font-medium text-sm `}
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
        </div>

        <TabsBody>
          {data.map(({ value, projects }) => (
            <TabPanel key={value} value={value}>
              {activeTab === value && (
                <div>
                  {projects.map((project, index) => (
                    <TeamProject key={index} project={project} />
                  ))}
                </div>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Myproject;
