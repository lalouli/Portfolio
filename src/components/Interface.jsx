
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
    <div className="flex flex-col items-center w-screen">
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
      <h1 className="">About</h1>

    </Section>
  );
}