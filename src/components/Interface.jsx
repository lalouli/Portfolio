import PrimaryButton from "./PrimaryButton";
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconDeviceLandlinePhone } from '@tabler/icons-react';
const Section = (props) => {
  const { children } = props;

  return (
    <section className="w-screen h-screen p-8 max-w-screen-2xl  mx-auto flex flex-col items-start justify-center  ">
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1 className="text-red-500">Projects</h1>
      </Section>
      <ContactSection />
      <ContactMeSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <div className="w-[350px] md:w-[500px] lg:w-[700px] xl:w-[800px]  h-[100px] text-[#F2B450]  font-teko text-3xl lg:text-4xl xl:text-5xl">
        👋 Hi , I' am Houssam Lalouli 👦🏻
      </div>
      <div className="w-[350px] md:w-[500px] lg:w-[700px] xl:w-[800px]  h-[350px] text-xl md:text-2xl xl:text-3xl text-[#E8F1F2] font-skranji flex items-center justify-center ">
        As a front-end developer, I specialize in ReactJS, Next.js, and design.
        I excel at creating reusable UI components, managing application state,
        and translating design concepts into visually appealing interfaces. With
        my skills, I deliver captivating and high-quality web experiences.😇
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
      <div>
        <h2 className="text-5xl font-teko font-bold text-[#F2B450]">
          Skills
        </h2>
        <div className="mt-8 space-y-8"> 
          {skills.map((skill, index) => (
              <div className="w-80" key={index}>
                <h3 className="text-xl font-skranji text-[#E8F1F2]"> {skill.title}</h3>
                  <div className="h-2 w-full rounded-full mt-2  bg-gray-100">
                    <div className="h-full bg-[#B3EFB2] rounded-full"
                      style={{ width: `${skill.level}%` }}
                    >
                      
                    </div>
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
                <h3 className="text-xl font-skranji text-[#E8F1F2]"> {lgl.title}</h3>
                  <div className="h-2 w-full rounded-full mt-2  bg-gray-100">
                    <div className="h-full bg-[#B3EFB2] rounded-full"
                      style={{ width: `${lgl.level}%` }}
                    >
                      
                    </div>
                  </div>
              </div>
          ))}
        </div>
        </div>
      </div>
    </Section>

  )
};


const ContactSection = () => {
  return (
    <Section>
      <div>
        <h2 className="text-5xl font-teko font-bold text-[#F2B450]">
          Contact
        </h2>
        <div className="mt-10 space-y-12">
          <p className="w-[400px]  text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2">
            <IconBrandLinkedin/>LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-2xl font-teko font-bold text-[#E8F1F2]">
              LinkedIn Profile
            </a>
          </p>
          <p className="w-[400px] text-xl flex flex-row  font-skranji font-bold text-[#B3EFB2] gap-2">
            <IconBrandGithub/>
            GitHub:{" "}
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-2xl font-teko font-bold text-[#E8F1F2]">
             GitHub Profile
            </a>
          </p>
          <p className="w-[400px] text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2">
            <IconMail/>
            Email:{" "}
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-teko font-bold text-[#E8F1F2]">
              email@example.com
            </a>
          </p>
          <p className="w-[400px] text-xl flex flex-row font-skranji font-bold text-[#B3EFB2] gap-2">
            <IconDeviceLandlinePhone/>
            Phone Number:{" "}
            <a className="text-2xl font-teko font-bold text-[#E8F1F2]">
            06 00 00 00 00
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

const ContactMeSection = () => {
  return (
    <Section>
       <h2 className="text-5xl font-teko font-bold text-[#F2B450]">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-[#7A9E7E] w-96 max-w-full">
        <form>
          <label for="name" className="font-medium font-skranji text-[#E8F1F2] block mb-1">
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
                  <PrimaryButton text="Submit" />
          </div>
        </form>
      </div>
    </Section>
  );
};