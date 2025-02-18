export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Amith Reddy Pasham</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack Developer</span>{" "}
            {/* <br />
            Developer */}
          </h1>
          {/* <p className="hero--section-description">
          I have over 7+ years of experience in designing, developing, testing, and maintaining enterprise-level applications in the healthcare, insurance, finance, and retail sectors.</p> */}
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/logo.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
