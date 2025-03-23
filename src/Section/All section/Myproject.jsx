/* eslint-disable no-unused-vars */
import React from "react";
import Project from "./Project/Project";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import personal_projects from "../../../public/json/personal_projects.json";
import professional_projects from "../../../public/json/professional_projects.json";

const Myproject = () => {
  AOS.init();

  const [activeTab, setActiveTab] = React.useState("personal");
  const data = [
    {
      label: "Personal Creations",
      value: "personal",
      projects: personal_projects,
    },
    {
      label: "Industrial Projects",
      value: "professional",
      projects: professional_projects,
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
                <div >
                  {projects.map((project, index) => (
                    <Project key={index} project={project} />
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
