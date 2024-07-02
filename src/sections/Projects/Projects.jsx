import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/shoppiingimg.png";
import freshBurger from "../../assets/courier-app.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
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
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
