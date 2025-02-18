export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Full Stack Developer with experience in designing, developing, testing, and maintaining 
          enterprise applications across healthcare, insurance, and finance sectors. 
          Expertise in React.js, Spring frameworks, Microservices, and cloud technologies (AWS, Azure). 
          Skilled in RESTful APIs, Apache Kafka for real-time data streaming, and Docker/Kubernetes for containerization and orchestration. 
          Proficient in version control using Git and managing CI/CD pipelines. 
          Experienced in unit testing and automated testing with tools like JUnit, Mockito, and Selenium.
          </p>
        </div>
      </div>
    </section>
  );
}
