import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/shoppiingimg.png";
import freshBurger from "../../assets/courier-app.png";
import hipsster from "../../assets/portfolio-logo.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src='https://cdn-icons-png.flaticon.com/128/3176/3176287.png'
          link="https://github.com/abhishekpancheshwar"
          h3="EcomGrove"
          p="E-commerce website"
          h4="CLick on logo to see live demo"

          
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/abhishekpancheshwar/shopping-cart-using-react"
          h3="Shopping-Cart"
          p="Shopping-app"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/abhishekpancheshwar/courier"
          h3="Courier App"
          p="Courier Delivery App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/abhishekpancheshwar"
          h3="Personal Portfolio"
          p="Portfolio web"
        />
        
      </div>
    </section>
  );
}

export default Projects;
