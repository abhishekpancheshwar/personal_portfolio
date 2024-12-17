import PropTypes from 'prop-types'

function ProjectCard({ src, link, h3, p, h4 }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img className="hover" src={src} alt={`${typeof h3 === 'string' ? h3 : 'project'} logo`} /> <br /> <br />
      <h3>{typeof h3 === 'object' ? h3.props.children : h3}</h3>
      <div>{typeof p === 'object' ? p.props.children : p}</div>
      {typeof h4 === 'object' ? (
        <div>
          {h4.props.children.filter(child => child.type !== 'p')}
          {h4.props.children.find(child => child.type === 'p') && 
            <p>{h4.props.children.find(child => child.type === 'p').props.children}</p>}
        </div>
      ) : (
        <div>{h4}</div>
      )}
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  h4: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
};

export default ProjectCard;