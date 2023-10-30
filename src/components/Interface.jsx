import PrimaryButton from "./PrimaryButton";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { IconDeviceLandlinePhone } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import Slider from "react-slick";
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="w-screen h-screen p-8 max-w-screen-2xl  mx-auto flex flex-col items-start justify-center  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ContactMeSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <div className="flex flex-row w-full justify-between">
        <div className=" flex justify-center items-center flex-col ">
          <motion.div
            className="w-[350px] md:w-[500px] lg:w-[700px] xl:w-[800px]  h-[100px] text-[#F2B450]  font-teko text-3xl lg:text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            👋 Hi , I' am Houssam Lalouli 👦🏻
          </motion.div>

          <motion.div
            className="w-[350px] md:w-[500px] lg:w-[700px] xl:w-[800px]  h-[350px] text-xl md:text-2xl xl:text-3xl text-[#E8F1F2] font-skranji flex flex-row items-center justify-center "
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            As a front-end developer, I specialize in ReactJS, Next.js, and
            design. I excel at creating reusable UI components, managing
            application state, and translating design concepts into visually
            appealing interfaces. With my skills, I deliver captivating and
            high-quality web experiences.😇
          </motion.div>
        </div>
        <motion.img
          className="h-[500px] w-96 rounded-t-full object-cover object-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          src="/09140668.JPG"
          alt="nature image"
        />
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nextjs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
  {
    title: "Design UX/ Figma",
    level: 70,
  },
  {
    title: "Tailwindcss",
    level: 90,
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 40,
  },
  {
    title: "🇺🇸 English",
    level: 50,
  },
  {
    title: "🌐 Arabe",
    level: 100,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <div className="flex flex-row justify-between   w-full">
        <>
          <motion.div whileInView={"visible"}>
            <h2 className="text-5xl font-teko font-bold text-[#F2B450]">
              Skills
            </h2>
            <div className="mt-8 space-y-8">
              {skills.map((skill, index) => (
                <div className="w-80" key={index}>
                  <motion.h3
                    className="text-xl font-skranji text-[#E8F1F2]"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {" "}
                    {skill.title}
                  </motion.h3>
                  <div className="h-2 w-full rounded-full mt-2  bg-gray-100">
                    <motion.div
                      className="h-full bg-[#B3EFB2] rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-5xl font-teko font-bold text-[#F2B450] mt-10">
                Language
              </h2>
              <div className="mt-8 space-y-8">
                {languages.map((lgl, index) => (
                  <div className="w-80" key={index}>
                    <motion.h3
                      className="text-xl font-skranji text-[#E8F1F2]"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    >
                      {lgl.title}
                    </motion.h3>
                    <div className="h-2 w-full rounded-full mt-2  bg-gray-100">
                      <motion.div
                        className="h-full bg-[#B3EFB2] rounded-full"
                        style={{ width: `${lgl.level}%` }}
                        initial={{
                          scaleX: 0,
                          originX: 0,
                        }}
                        variants={{
                          visible: {
                            scaleX: 1,
                            transition: {
                              duration: 1,
                              delay: 2 + index * 0.2,
                            },
                          },
                        }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
        <>
          <motion.img
            className="h-[800px] w-[50%]   object-cover object-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.9 }}
            src="view-3d-man-with-tech-device-removebg-preview.png"
            alt="nature image"
          />
        </>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-teko font-bold text-[#F2B450]">Contact</h2>
        <div className="mt-10 space-y-12">
          <motion.p
            className="w-[400px]  text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <IconBrandLinkedin />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/houssam-lalouli-56a40b215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-teko font-bold text-[#E8F1F2]"
            >
              LinkedIn Profile
            </a>
          </motion.p>
          <motion.p
            className="w-[400px] text-xl flex flex-row  font-skranji font-bold text-[#B3EFB2] gap-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <IconBrandGithub />
            GitHub:{" "}
            <a
              href="https://github.com/lalouli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-teko font-bold text-[#E8F1F2]"
            >
              GitHub Profile
            </a>
          </motion.p>
          <motion.p
            className="w-[400px] text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <IconMail />
            Email:{" "}
            <a className="text-2xl font-teko font-bold text-[#E8F1F2]">
            lalouli.houssam2017@gmail.com
            </a>
              
          </motion.p>
          <motion.p
            className="w-[400px] text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <IconDeviceLandlinePhone />
            Phone Number:{" "}
            <a className="text-2xl font-teko font-bold text-[#E8F1F2]">
              06 17 93 75 29
            </a>
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

const ContactMeSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-teko font-bold text-[#F2B450]">
        Contact me
      </h2>
      <div className="mt-8 p-8 rounded-md bg-[#7A9E7E] w-96 max-w-full">
        <form>
          <label
            for="name"
            className="font-medium font-skranji text-[#E8F1F2] block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 bg-[#D9F4E4] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3 font-skranji"
          />
          <label
            for="email"
            className="font-medium font-skranji text-[#E8F1F2] block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 bg-[#D9F4E4]  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3 font-skranji"
          />
          <label
            for="email"
            className="font-medium font-skranji text-[#E8F1F2] block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1  bg-[#D9F4E4] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3 font-skranji"
          />
          <div className="flex items-center justify-center py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            <PrimaryButton text="Submit " />
          </div>
        </form>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-5xl font-teko font-bold text-[#F2B450]">
          Projects
        </h2>
        <div className="w-full flex flex-col h-[1400px] gap-4">
          <div className="w-full h-[700px]  flex flex-row gap-4">
            <div className="h-full w-[50%] border rounded-lg bg-gray-100">
              <div className="w-full h-[100px] flex justify-center items-center">
                <h2 className="text-xl md:text-3xl xl:text-5xl font-teko font-bold text-[#B3EFB2]">
                  FT_TRANSENDENCE
                </h2>
              </div>
              <div className="w-full h-[600px] flex justify-center items-center">
                <h2 className="w-[80%] text-md md:text-lg xl:text-3xl font-teko font-bold text-[#0D0D0D]">
                  ft_transendence is a project that combines the game of ping
                  pong with a user account system and integrated chat. Players
                  can register and create accounts to participate in multiplayer
                  matches. The project emphasizes a personalized experience by
                  allowing players to track their progress and compete against
                  similarly skilled opponents. With customizable gameplay
                  settings and a chat feature, ft_transendence provides a
                  dynamic platform for ping pong enthusiasts to connect, play,
                  and interact with each other.
                </h2>
              </div>
            </div>
            <div className="h-full w-[50%] border rounded-lg bg-gray-100">
              <div className="w-full h-[100px] flex justify-center items-center">
                <h2 className="text-xl md:text-3xl xl:text-5xl font-teko font-bold text-[#B3EFB2]">
                  SCHOOL MANAGEMENT SYSTEM
                </h2>
              </div>
              <div className="w-full h-[600px] flex justify-center items-center">
                <h2 className="w-[80%] text-md md:text-lg xl:text-3xl font-teko font-bold text-[#0D0D0D]">
                  This project involves creating a website for a faculty that
                  includes features such as registration, exam locations,
                  schedules, grades, and other administrative functions. Users
                  can access the site to view their personal information and
                  access relevant academic resources.
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full h-[700px] flex flex-row gap-4">
            <div className="h-full w-[50%] border rounded-lg bg-gray-100">
              <div className="w-full h-[100px] flex justify-center items-center">
                <h2 className="text-xl md:text-3xl xl:text-5xl font-teko font-bold text-[#B3EFB2]">
                  INCEPTION
                </h2>
              </div>
              <div className="w-full h-[600px] flex justify-center items-center">
                <h2 className="w-[80%] text-md md:text-lg xl:text-3xl font-teko font-bold text-[#0D0D0D]">
                  This project aims to enhance your system administration skills
                  with Docker. You can create multiple Docker images in a
                  personal virtual machine, each with Nginx, MariaDB, WordPress,
                  Adminer, and FTP. Using Docker Compose, you can define and run
                  multi-container Docker applications with a single
                  docker-compose.yml file.
                </h2>
              </div>
            </div>
            <div className="h-full w-[50%] border rounded-lg bg-gray-100">
              <div className="w-full h-[100px] flex justify-center items-center">
                <h2 className="text-xl md:text-3xl xl:text-5xl font-teko font-bold text-[#B3EFB2]">
                  FT_IRC
                </h2>
              </div>
              <div className="w-full h-[600px] flex justify-center items-center">
                <h2 className="w-[80%] text-md md:text-lg xl:text-3xl font-teko font-bold text-[#0D0D0D]">
                  This C++ project involves creating an IRC server and using an
                  IRC client to test it. IRC is a text-based communication
                  protocol that allows real-time messaging in public or private
                  channels. IRC clients connect to IRC servers to join channels,
                  and these servers can be connected together to form a network.
                  With C++, you can create a server that can handle multiple
                  clients and manage different channels and messages.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
