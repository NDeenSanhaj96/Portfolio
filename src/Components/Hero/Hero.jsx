import logo from "../../assets/Images/nkdatti-logo.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero--content">
        <p className="hero--eyebrow">FRONT-END DEVELOPER</p>
        <h1>
          I build modern <span>digital experiences.</span>
        </h1>
        <p className="hero--description">
          I'm Nasir K. Datti, a front-end developer focused on building
          responsive, accessible, and user-centered web-applications.
        </p>
        <div>
          <a href="#projects" className="hero_primary--btn">
            View My Work
          </a>
          <a href="#contact" className="hero_secondary--btn">
            let's Talk
          </a>
        </div>
        <div className="hero_social--media">
          <a href="#" arial-label="GitHub">GitHub</a>
          <a href="#" arial-label="LinkedIn">LinkedIn</a>
          <a href="#" arial-label="Instagram">Instagram</a>
        </div>
      </div>
      <div className="hero--visual">
        <div className="hero--glow"></div>
        <div className="hero--logo">NKD</div>
      </div>
    </section>
  );
}
export default Hero;
