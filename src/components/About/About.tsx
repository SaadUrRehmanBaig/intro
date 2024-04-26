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
            As a Software Development Engineer II , I have been instrumental in spearheading the development of a
            fintech product called Advisor Sketchbook. Leveraging Angular and Springboot,
            I led the creation of this product from inception to implementation. This involved translating figma designs into dynamic,
            user-friendly interfaces, as well as engineering custom state management solutions to optimize performance and data flow.
            Additionally, I devised an API call shifter to redirect API calls effectively, enhancing the scalability of the product.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.15 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }} >
          <p>
            In my role, I conducted thorough code reviews to maintain high code quality and consistency,
            fostering a culture of excellence within the development team. Furthermore, I played a key role in deploying
            development environments using Docker containers and provided mentorship to team members to facilitate skill
            development and collaboration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Prior to this I worked as a Software Developer Consultant where I contributed to the development of Nucleus,
            an in-house data-intensive product, using Vue.js and Nest.js. I implemented Role Based Authentication and Control,
            designed system architecture, and developed real-time data pipelines using Kafka and BullMQ. Additionally,
            I ensured consistency and alignment across team members by establishing ground rules and style guides.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.25 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            In terms of education, I hold a degree in Industrial & Manufacturing Engineering from NED University of Engineering
            & Technology, where I ranked in the Top Ten of my batch. I have also pursued certifications in Deep Learning
            Specialization and Microsoft Office Specialist: Associate.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Outside of work, I have a keen interest in Artificial Intelligence and have completed projects
            in Face Detection and Facial Recognition Based Attendance System.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.35 * 1000}>
          <p>
            Overall, my diverse skill set, hands-on experience, and commitment to excellence make me a valuable asset in
            any software development team.
          </p>
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
