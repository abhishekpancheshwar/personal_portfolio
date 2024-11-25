import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/bussiness_icon.jpeg";
import freshBurger from "../../assets/chat_image.jpeg";
import hipsster from "../../assets/portfolio-logo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div
        className={styles.projectsContainer}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          alignItems: "center",
          margin: "0 20px",
        }}
      >
        <ProjectCard
          src="https://cdn-icons-png.flaticon.com/128/3176/3176287.png"
          link="https://github.com/abhishekpancheshwar/Ecommerse_Website"
          h3={
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              E-commerce Website
            </h3>
          }
          p={
            <p
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "1.2rem",
                lineHeight: "1.5",
              }}
            >
              I built an interactive e-commerce website using the MERN stack
              (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for a
              modern, responsive design. This project demonstrates my expertise
              in full-stack development.
            </p>
          }
          h4={
            <ul
              style={{
                textAlign: "left",
                margin: "10px 0",
                paddingLeft: "20px",
                lineHeight: "1.6",
              }}
            >
              <li>
                <strong>Authentication:</strong> Secure Sign In/Sign Up with
                JWT-based session management.
              </li>
              <li>
                <strong>User Interaction:</strong> Users can create posts, share
                content, and engage with others.
              </li>
              <li>
                <strong>Dynamic Frontend:</strong> Powered by React.js with a
                clean UI styled using Tailwind CSS.
              </li>
              <li>
                <strong>Robust Backend:</strong> Node.js and Express.js ensure
                scalability and efficiency, with MongoDB for secure data
                handling.
              </li>
              <p> - Click on logo to see -</p>
            </ul>
          }
        />
        <hr />
        <ProjectCard
          src={viberr}
          link="https://github.com/abhishekpancheshwar/Bussiness_Discovery_and_recommendation"
          h3={
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Business Discovery & Recommendation Application
            </h3>
          }
          p={
            <p
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "1.2rem",
                lineHeight: "1.5",
              }}
            >
              I developed a Business Discovery and Recommendation platform using
              the MERN stack (MongoDB, Express.js, React.js, Node.js) with
              Tailwind CSS. This application provides a seamless way to discover
              businesses and manage recommendations efficiently.
            </p>
          }
          h4={
            <ul
              style={{
                textAlign: "left",
                margin: "10px 0",
                paddingLeft: "20px",
                lineHeight: "1.6",
              }}
            >
              <li>
                <strong>Authentication:</strong> Secure Sign Up with role-based
                access control (Admin and User roles).
              </li>
              <li>
                <strong>Admin Functionality:</strong> Only admins can create,
                update, or delete business posts.
              </li>
              <li>
                <strong>User Interaction:</strong> Users can view and explore
                recommended businesses seamlessly.
              </li>
              <li>
                <strong>Responsive Design:</strong> Built with Tailwind CSS to
                ensure a smooth experience across all devices.
              </li>
              <li>
                <strong>Scalable Backend:</strong> Node.js and Express.js
                provide robust and scalable APIs with MongoDB for data handling.
              </li>
              <p> - Click on logo to see -</p>
            </ul>
          }
        />
        <hr />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/abhishekpancheshwar"
          h3={
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Chat Application
            </h3>
          }
          p={
            <p
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "1.2rem",
                lineHeight: "1.5",
              }}
            >
              I developed a real-time Chat Application using the MERN stack
              (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS. This
              project highlights seamless communication and efficient real-time
              interaction.
            </p>
          }
          h4={
            <ul
              style={{
                textAlign: "left",
                margin: "10px 0",
                paddingLeft: "20px",
                lineHeight: "1.6",
              }}
            >
              <li>
                <strong>Authentication:</strong> Secure Sign Up and Sign In with
                session management using JWT.
              </li>
              <li>
                <strong>Real-Time Messaging:</strong> Instant chat functionality
                powered by WebSocket for seamless communication.
              </li>
              <li>
                <strong>User-Friendly Interface:</strong> Built with React.js
                and styled using Tailwind CSS for a clean and modern look.
              </li>
              <li>
                <strong>Scalable Backend:</strong> Node.js and Express.js ensure
                a reliable and efficient messaging system.
              </li>
              <li>
                <strong>Database:</strong> MongoDB stores user data and chat
                history securely.
              </li>
              <p> - Click on logo to see -</p>
            </ul>
          }
        />
        <hr />
        <ProjectCard
          src={hipsster}

          link="https://github.com/abhishekpancheshwar"
          h3={
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Personal Portfolio
            </h3>
          }
          p={
            <p
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "1rem",
                lineHeight: "1.5",
              }}
            >
              A fully interactive personal portfolio built with React.js, HTML,
              CSS, and JavaScript. It showcases my skills, projects, resume, and
              more. Users can contact me directly via email for inquiries.
            </p>
          }
          h4={
            <ul
              style={{
                textAlign: "left",
                margin: "10px 0",
                paddingLeft: "20px",
                lineHeight: "1.6",
              }}
            >
              <li>
                <strong>Contact:</strong> Users can directly send messages to my
                email for any inquiries.
              </li>
              <li>
                <strong>Projects:</strong> Displays a wide range of my personal
                and professional projects with detailed descriptions.
              </li>
              <li>
                <strong>Resume:</strong> View and download my resume for
                detailed information about my education and experience.
              </li>
              <li>
                <strong>Skills:</strong> A comprehensive list of technical
                skills including web development, React, JavaScript, and more.
              </li>
              <li>
                <strong>Modern Design:</strong> Clean and responsive UI built
                using React.js and styled with custom CSS for an immersive
                experience.
              </li>
              <p> - Click on logo to see -</p>
            </ul>
          }
        />
        <hr />
      </div>
    </section>
  );
}

export default Projects;
