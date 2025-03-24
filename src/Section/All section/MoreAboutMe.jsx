import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Skills from "../MoreAboutMe/Skills";
import Education from "../MoreAboutMe/Education";

const MoreAboutMe = () => {
  const [activeTab, setActiveTab] = useState("Education");

  AOS.init();

  const data = [
    {
      label: "Education",
      value: "Education",
      component: <Education />,
    },
    {
      label: "Skills",
      value: "Skills",
      component: <Skills />,
    },
  ];

  return (
    <div>
      <div
        className="mt-10  gap-4 flex-col-reverse lg:flex-row justify-between lg:items-center "
        id="scrollToSkils"
      >
        <Tabs value={activeTab} className="">
          <div className="mt-32 " id="scrollToProjects">
            <div className="flex justify-between gap-4 items-center w-full">
              <TabsHeader
                className="w-fit p-0 bg-black text-white"
                indicatorProps={{
                  className: "bg-accent text-whtie",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    className={`w-auto text-white px-16 py-3  font-medium text-sm `}
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <p
                data-aos="fade-left"
                className="font-medium text-2xl text-accent"
              >
                04. More About me
              </p>
            </div>
          </div>

          <TabsBody className="mt-14 w-full">
            {data.map(({ value, component }) => (
              <TabPanel key={value} value={value}>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default MoreAboutMe;
