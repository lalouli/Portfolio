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
      {/* </div> */}
      <div className="w-[350px] md:w-[500px] lg:w-[700px] xl:w-[800px] h-[100px] flex items-center justify-center">
        <PrimaryButton text="Contact Me" />
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