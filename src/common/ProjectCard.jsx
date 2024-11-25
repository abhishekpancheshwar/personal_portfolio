import PropTypes from 'prop-types'

function ProjectCard({ src, link, h3, p, h4 }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} /> <br /> <br />
      <h3>{h3}</h3>
      <p>{p}</p>
      <p>{h4}</p>
    </a>
  );
}
ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.element.isRequired,
  p: PropTypes.element.isRequired,
  h4: PropTypes.element.isRequired,
};

export default ProjectCard;
