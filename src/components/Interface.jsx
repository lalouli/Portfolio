
const Section = (props) => {
  const { children } = props;

  return (
    <section className="w-screen h-screen p-8 max-w-screen-2xl  mx-auto flex flex-col items-start justify-center  ">
      {children}
    </section>
  );
}

export const Interface = ()=>{
  return(
    <div className="flex flex-col items-center">
      <AboutSection />
      <Section>
        <h1>Skills</h1>
      </Section>
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );

}

const AboutSection = () => {
  return (
    <Section>
      <div className="w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-[300px] xl:h-[250px] bg-[#03045E] rounded-xl flex flex-col items-center justify-center gap-8">
        <div className="text-[#CBFC01]  font-teko  text-3xl">👋 Hi , I' am Houssam Lalouli 👦🏻</div>
        <div className="w-[90%] text-md xl:text-xl text-[#CAF0F8] font-skranji flex items-center justify-center border">
        As a front-end developer, I specialize in ReactJS, Next.js, and design. I excel at creating reusable UI components, 
        managing application state, and translating design concepts into visually appealing interfaces. With my skills,
         I deliver captivating and high-quality web experiences.😇
        </div>
      </div>

    </Section>
  );
}