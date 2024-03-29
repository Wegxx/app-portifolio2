import {Cursor, useTypewriter} from "react-simple-typewriter";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {projects} from "../data/codeProjectsData";
import ServiceCard from "../components/ServiceCard";
import IllustrationsServiceCard from "../components/IllustrationsServiceCard";
import {projectsIllustration} from "../data/illustrationProjectsData";



function Projects() {
    const [text] = useTypewriter({
        words: [
            "<Projects/>",
        ],
        loop: 1
    });
    const tabs = [
        {
            label: "Code Projects",
            value: "codeProjects",
        },
        {
            label: "Illustration Projects",
            value: "illustrationProjects",
        },
    ];
  return (
      <div className="pt-2 flex flex-col">
          <div className={"flex sm:h-20 h-40 justify-center items-center mb-4"}>
              <div>
                  <h1>
                      <span className={"lg:text-5xl md:text-2xl font-roboto-moto text-orange-500"}>{text}</span>
                      <Cursor cursorColor={"#FF8000"}/>
                  </h1>
              </div>
          </div>
          <div className={"lg:px-96 sm:p-2"}>
              <Tabs id="custom-animation" value="codeProjects" >
                  <TabsHeader className={"z-0 bg-gray-800 font-roboto-moto"}>
                      {tabs.map(({ label, value }) => (
                          <Tab id={"tab"} className={"font-bold text-gray-200"} key={value} value={value}>
                              {label}
                          </Tab>
                      ))}
                  </TabsHeader>
                  <TabsBody animate={{
                      initial: { y: 250 },
                      mount: { y: 0 },
                      unmount: { y: 250 },
                  }}>
                      <TabPanel key="codeProjects" value="codeProjects">
                          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
                              {
                                  projects.map
                                  (project =>
                                      <div key={project.title} className={"flex justify-center pt-10"}>
                                        <ServiceCard card={project}/>
                                      </div>
                                  )
                              }
                          </div>
                      </TabPanel>
                      <TabPanel key="illustrationProjects" value="illustrationProjects">
                          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
                              {
                                  projectsIllustration.map
                                  (project =>
                                      <div key={project.title} className={"flex justify-center pt-10"}>
                                          <IllustrationsServiceCard card={project}/>
                                      </div>
                                  )
                              }
                          </div>
                      </TabPanel>
                  </TabsBody>
              </Tabs>
          </div>
      </div>
  );
}

export default Projects;
