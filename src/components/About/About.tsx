import { Container } from "./styles";
import saad from "../../assets/saad.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import angularIcon from "../../assets/Angular_full_color_logo.svg";
import sqlIcon from "../../assets/mysql-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  const images = [reactIcon, vueIcon, angularIcon, nodeIcon, typescriptIcon, sqlIcon, boostrapIcon, htmlIcon, cssIcon, jsIcon, sassIcon];
  let start_delay = 0.12;
  return (

    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Saad, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {images.map((image, index) => (
            <div key={index} className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={(start_delay + index * 0.01) * 1000}>
                <img src={image} alt={`Skill ${index}`} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={saad} alt="image of saad baig" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
